import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { LanguageCode, LanguageConfig, TranslationKeys } from './types';
import { en } from './locales/en';
import { zhCN } from './locales/zh-CN';
import { api } from '../api';

// Available languages configuration
export const languages: LanguageConfig[] = [
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '中文（简体）' },
  { code: 'en', name: 'English', nativeName: 'English' },
];

// Translation dictionary
const translations: Record<LanguageCode, TranslationKeys> = {
  'zh-CN': zhCN,
  'en': en,
};

// I18n context type
interface I18nContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => Promise<void>;
  t: (key: string) => string;
  isLoading: boolean;
}

// I18n context
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Get nested object value by dot notation key
function getNestedValue(obj: any, key: string): string {
  const keys = key.split('.');
  let value = obj;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return the key itself if not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// I18n Provider Props
interface I18nProviderProps {
  children: ReactNode;
  defaultLanguage?: LanguageCode;
}

// I18n Provider Component
export const I18nProvider: React.FC<I18nProviderProps> = ({ 
  children, 
  defaultLanguage = 'zh-CN' 
}) => {
  const [language, setCurrentLanguage] = useState<LanguageCode>(defaultLanguage);
  const [isLoading, setIsLoading] = useState(true);

  // Load language preference from settings on mount
  useEffect(() => {
    const loadLanguagePreference = async () => {
      try {
        const settings = await api.getClaudeSettings();
        const savedLanguage = settings?.ui_language as LanguageCode;
        
        if (savedLanguage && savedLanguage in translations) {
          setCurrentLanguage(savedLanguage);
        }
      } catch (error) {
        console.warn('Failed to load language preference:', error);
        // Use default language if loading fails
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguagePreference();
  }, []);

  // Change language and save to settings
  const setLanguage = async (newLanguage: LanguageCode) => {
    if (newLanguage === language) return;

    try {
      setCurrentLanguage(newLanguage);
      
      // Save to settings
      const currentSettings = await api.getClaudeSettings();
      const updatedSettings = {
        ...currentSettings,
        ui_language: newLanguage,
      };
      
      await api.saveClaudeSettings(updatedSettings);
    } catch (error) {
      console.error('Failed to save language preference:', error);
      // Revert language change if saving fails
      setCurrentLanguage(language);
      throw error;
    }
  };

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language];
    const fallbackTranslations = translations['en']; // Fallback to English
    
    // Try current language first
    let value = getNestedValue(currentTranslations, key);
    
    // If not found and not already English, try English fallback
    if (value === key && language !== 'en') {
      value = getNestedValue(fallbackTranslations, key);
    }
    
    return value;
  };

  const contextValue: I18nContextType = {
    language,
    setLanguage,
    t,
    isLoading,
  };

  return React.createElement(
    I18nContext.Provider,
    { value: contextValue },
    children
  );
};

// Hook to use I18n context
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

// Hook for translation function only (convenience)
export const useTranslation = () => {
  const { t } = useI18n();
  return { t };
};

// Get language configuration by code
export const getLanguageConfig = (code: LanguageCode): LanguageConfig | undefined => {
  return languages.find(lang => lang.code === code);
};

// Export types and constants
export type { LanguageCode, LanguageConfig, TranslationKeys };
export { translations };