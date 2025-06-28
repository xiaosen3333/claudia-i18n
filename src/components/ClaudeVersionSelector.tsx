import React, { useEffect, useState } from "react";
import { api, type ClaudeInstallation } from "@/lib/api";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Terminal, Package, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";

interface ClaudeVersionSelectorProps {
  /**
   * Currently selected Claude installation path
   */
  selectedPath?: string | null;
  /**
   * Callback when a Claude installation is selected
   */
  onSelect: (installation: ClaudeInstallation) => void;
  /**
   * Optional className for styling
   */
  className?: string;
  /**
   * Whether to show a save button (for settings page)
   */
  showSaveButton?: boolean;
  /**
   * Callback when save button is clicked
   */
  onSave?: () => void;
  /**
   * Whether the save operation is in progress
   */
  isSaving?: boolean;
}

/**
 * ClaudeVersionSelector component for selecting Claude Code installations
 * 
 * @example
 * <ClaudeVersionSelector
 *   selectedPath={currentPath}
 *   onSelect={(installation) => setSelectedInstallation(installation)}
 * />
 */
export const ClaudeVersionSelector: React.FC<ClaudeVersionSelectorProps> = ({
  selectedPath,
  onSelect,
  className,
  showSaveButton = false,
  onSave,
  isSaving = false,
}) => {
  const { t } = useTranslation();
  const [installations, setInstallations] = useState<ClaudeInstallation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInstallation, setSelectedInstallation] = useState<ClaudeInstallation | null>(null);

  useEffect(() => {
    loadInstallations();
  }, []);

  useEffect(() => {
    // Update selected installation when selectedPath changes
    if (selectedPath && installations.length > 0) {
      const found = installations.find(i => i.path === selectedPath);
      if (found) {
        setSelectedInstallation(found);
      }
    }
  }, [selectedPath, installations]);

  const loadInstallations = async () => {
    try {
      setLoading(true);
      setError(null);
      const foundInstallations = await api.listClaudeInstallations();
      setInstallations(foundInstallations);
      
      // If we have a selected path, find and select it
      if (selectedPath) {
        const found = foundInstallations.find(i => i.path === selectedPath);
        if (found) {
          setSelectedInstallation(found);
        }
      } else if (foundInstallations.length > 0) {
        // Auto-select the first (best) installation
        setSelectedInstallation(foundInstallations[0]);
        onSelect(foundInstallations[0]);
      }
    } catch (err) {
      console.error("Failed to load Claude installations:", err);
      setError(err instanceof Error ? err.message : t('claudeVersion.failedToLoadInstallations'));
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (installation: ClaudeInstallation) => {
    setSelectedInstallation(installation);
    onSelect(installation);
  };

  const getSourceIcon = (source: string) => {
    if (source.includes("nvm")) return <Package className="w-4 h-4" />;
    return <Terminal className="w-4 h-4" />;
  };

  const getSourceLabel = (source: string) => {
    if (source === "which") return t('claudeVersion.systemPath');
    if (source === "homebrew") return t('claudeVersion.homebrew');
    if (source === "system") return t('claudeVersion.system');
    if (source.startsWith("nvm")) return source.replace("nvm ", "NVM ");
    if (source === "local-bin") return t('claudeVersion.localBin');
    if (source === "claude-local") return t('claudeVersion.claudeLocal');
    if (source === "npm-global") return t('claudeVersion.npmGlobal');
    if (source === "yarn" || source === "yarn-global") return t('claudeVersion.yarn');
    if (source === "bun") return t('claudeVersion.bun');
    return source;
  };

  if (loading) {
    return (
      <div className={cn("flex items-center justify-center py-8", className)}>
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <Card className={cn("p-4", className)}>
        <div className="text-sm text-destructive">{error}</div>
      </Card>
    );
  }

  if (installations.length === 0) {
    return (
      <Card className={cn("p-4", className)}>
        <div className="text-sm text-muted-foreground">
          {t('claudeVersion.noInstallationsFound')}
        </div>
      </Card>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <Label className="text-sm font-medium mb-3 block">
          {t('claudeVersion.selectInstallation')}
        </Label>
        <RadioGroup
          value={selectedInstallation?.path}
          onValueChange={(value: string) => {
            const installation = installations.find(i => i.path === value);
            if (installation) {
              handleSelect(installation);
            }
          }}
        >
          <div className="space-y-2">
            {installations.map((installation) => (
              <Card
                key={installation.path}
                className={cn(
                  "relative cursor-pointer transition-colors",
                  selectedInstallation?.path === installation.path
                    ? "border-primary"
                    : "hover:border-muted-foreground/50"
                )}
                onClick={() => handleSelect(installation)}
              >
                <div className="flex items-start p-4">
                  <RadioGroupItem
                    value={installation.path}
                    id={installation.path}
                    className="mt-1"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {getSourceIcon(installation.source)}
                      <span className="font-medium text-sm">
                        {getSourceLabel(installation.source)}
                      </span>
                      {installation.version && (
                        <Badge variant="secondary" className="text-xs">
                          v{installation.version}
                        </Badge>
                      )}
                      {selectedPath === installation.path && (
                        <Badge variant="default" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          {t('claudeVersion.current')}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground font-mono break-all">
                      {installation.path}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </RadioGroup>
      </div>

      {showSaveButton && onSave && (
        <div className="flex justify-end">
          <Button
            onClick={onSave}
            disabled={!selectedInstallation || isSaving}
            size="sm"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t('claudeVersion.saving')}
              </>
            ) : (
              t('claudeVersion.saveSelection')
            )}
          </Button>
        </div>
      )}
    </div>
  );
}; 