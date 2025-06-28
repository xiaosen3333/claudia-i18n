// import { TranslationKeys } from './types';
// import * as fs from 'fs';
// import * as path from 'path';

/**
 * 翻译质量验证工具
 * 用于检查翻译的完整性、一致性和质量
 */

interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  stats: ValidationStats;
}

interface ValidationError {
  type: 'missing_key' | 'type_mismatch' | 'empty_value' | 'invalid_format';
  key: string;
  language: string;
  message: string;
}

interface ValidationWarning {
  type: 'inconsistent_term' | 'placeholder_mismatch' | 'length_difference' | 'untranslated';
  key: string;
  language: string;
  message: string;
}

interface ValidationStats {
  totalKeys: number;
  translatedKeys: Record<string, number>;
  coverage: Record<string, number>;
}

// 术语表 - 确保关键术语翻译一致
const TERMINOLOGY_MAP: Record<string, string> = {
  'agent': '智能体',
  'agents': '智能体',
  'token': '令牌',
  'tokens': '令牌',
  'session': '会话',
  'sessions': '会话',
  'checkpoint': '检查点',
  'checkpoints': '检查点',
  'sandbox': '沙箱',
  'model': '模型',
  'prompt': '提示词',
  'prompts': '提示词',
  'context': '上下文',
  'api': 'API',
  'mcp': 'MCP',
  'server': '服务器',
  'servers': '服务器',
  'tool': '工具',
  'tools': '工具',
  'command': '命令',
  'commands': '命令',
  'file': '文件',
  'files': '文件',
  'folder': '文件夹',
  'folders': '文件夹',
  'directory': '目录',
  'directories': '目录',
  'project': '项目',
  'projects': '项目',
  'user': '用户',
  'users': '用户',
  'permission': '权限',
  'permissions': '权限',
  'security': '安全',
  'profile': '配置',
  'profiles': '配置',
  'setting': '设置',
  'settings': '设置',
  'error': '错误',
  'errors': '错误',
  'warning': '警告',
  'warnings': '警告',
  'success': '成功',
  'failed': '失败',
  'running': '运行中',
  'completed': '已完成',
  'pending': '待处理',
  'cancelled': '已取消',
  'save': '保存',
  'cancel': '取消',
  'delete': '删除',
  'edit': '编辑',
  'create': '创建',
  'update': '更新',
  'refresh': '刷新',
  'search': '搜索',
  'filter': '筛选',
  'export': '导出',
  'import': '导入',
  'download': '下载',
  'upload': '上传',
  'preview': '预览',
  'close': '关闭',
  'open': '打开',
  'confirm': '确认',
  'apply': '应用',
  'reset': '重置',
  'clear': '清空',
  'select': '选择',
  'copy': '复制',
  'paste': '粘贴',
  'cut': '剪切'
};

// 检查翻译键的完整性
function checkKeyCompleteness(
  translations: Record<string, any>,
  baseKeys: Set<string>,
  language: string
): ValidationError[] {
  const errors: ValidationError[] = [];
  const translationKeys = new Set(extractKeys(translations));
  
  // 检查缺失的键
  for (const key of baseKeys) {
    if (!translationKeys.has(key)) {
      errors.push({
        type: 'missing_key',
        key,
        language,
        message: `Missing translation key: ${key}`
      });
    }
  }
  
  return errors;
}

// 提取所有键（支持嵌套对象）
function extractKeys(obj: any, prefix = ''): string[] {
  const keys: string[] = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...extractKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

// 检查值的有效性
function checkValueValidity(
  translations: Record<string, any>,
  language: string
): ValidationError[] {
  const errors: ValidationError[] = [];
  
  function checkValues(obj: any, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        checkValues(value, fullKey);
      } else {
        // 检查空值
        if (value === '' || value === null || value === undefined) {
          errors.push({
            type: 'empty_value',
            key: fullKey,
            language,
            message: `Empty translation value for key: ${fullKey}`
          });
        }
        
        // 检查类型
        if (typeof value !== 'string') {
          errors.push({
            type: 'type_mismatch',
            key: fullKey,
            language,
            message: `Invalid value type for key: ${fullKey}, expected string but got ${typeof value}`
          });
        }
      }
    }
  }
  
  checkValues(translations);
  return errors;
}

// 检查术语一致性
function checkTerminologyConsistency(
  translations: Record<string, any>,
  language: string
): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];
  
  if (language !== 'zh-CN') return warnings; // 只检查中文翻译
  
  function checkTerms(obj: any, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        checkTerms(value, fullKey);
      } else if (typeof value === 'string') {
        // 检查术语使用
        for (const [englishTerm, chineseTerm] of Object.entries(TERMINOLOGY_MAP)) {
          const regex = new RegExp(`\\b${englishTerm}\\b`, 'gi');
          const matches = value.match(regex);
          
          if (matches && !value.includes(chineseTerm)) {
            // 检查是否应该翻译这个术语
            const lowerValue = value.toLowerCase();
            const lowerTerm = englishTerm.toLowerCase();
            
            // 如果术语出现在非技术上下文中，应该翻译
            if (!isInTechnicalContext(lowerValue, lowerTerm)) {
              warnings.push({
                type: 'inconsistent_term',
                key: fullKey,
                language,
                message: `Found untranslated term "${englishTerm}" that should be translated to "${chineseTerm}"`
              });
            }
          }
        }
      }
    }
  }
  
  checkTerms(translations);
  return warnings;
}

// 判断术语是否在技术上下文中（不需要翻译）
function isInTechnicalContext(text: string, term: string): boolean {
  // 技术上下文标识
  const technicalPatterns = [
    `claude.*${term}`, // Claude API, Claude Agents等
    `${term}.*api`,   // Token API等
    `mcp.*${term}`,   // MCP server等
    `\\.${term}`,     // 文件扩展名等
    `${term}\\s*:`,   // JSON键等
    `\\$\\{.*${term}.*\\}`, // 变量占位符
    `<.*${term}.*>`,  // HTML/JSX标签
  ];
  
  return technicalPatterns.some(pattern => 
    new RegExp(pattern, 'i').test(text)
  );
}

// 检查占位符匹配
function checkPlaceholderConsistency(
  sourceTranslations: Record<string, any>,
  targetTranslations: Record<string, any>,
  targetLanguage: string
): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];
  const sourceKeys = extractKeyValuePairs(sourceTranslations);
  const targetKeys = extractKeyValuePairs(targetTranslations);
  
  for (const [key, sourceValue] of Object.entries(sourceKeys)) {
    const targetValue = targetKeys[key];
    if (!targetValue) continue;
    
    // 提取占位符
    const sourcePlaceholders = extractPlaceholders(sourceValue);
    const targetPlaceholders = extractPlaceholders(targetValue);
    
    // 比较占位符
    if (sourcePlaceholders.length !== targetPlaceholders.length) {
      warnings.push({
        type: 'placeholder_mismatch',
        key,
        language: targetLanguage,
        message: `Placeholder count mismatch: source has ${sourcePlaceholders.length}, target has ${targetPlaceholders.length}`
      });
    } else {
      const missingPlaceholders = sourcePlaceholders.filter(p => !targetPlaceholders.includes(p));
      if (missingPlaceholders.length > 0) {
        warnings.push({
          type: 'placeholder_mismatch',
          key,
          language: targetLanguage,
          message: `Missing placeholders: ${missingPlaceholders.join(', ')}`
        });
      }
    }
  }
  
  return warnings;
}

// 提取键值对
function extractKeyValuePairs(obj: any, prefix = ''): Record<string, string> {
  const pairs: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(pairs, extractKeyValuePairs(value, fullKey));
    } else if (typeof value === 'string') {
      pairs[fullKey] = value;
    }
  }
  
  return pairs;
}

// 提取占位符
function extractPlaceholders(text: string): string[] {
  const placeholders: string[] = [];
  
  // {variable} 格式
  const curlyMatches = text.match(/\{[^}]+\}/g) || [];
  placeholders.push(...curlyMatches);
  
  // ${variable} 格式
  const dollarMatches = text.match(/\$\{[^}]+\}/g) || [];
  placeholders.push(...dollarMatches);
  
  // %s, %d 等格式
  const percentMatches = text.match(/%[sd]/g) || [];
  placeholders.push(...percentMatches);
  
  return placeholders;
}

// 检查未翻译的文本
function checkUntranslatedText(
  translations: Record<string, any>,
  language: string
): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];
  
  if (language !== 'zh-CN') return warnings;
  
  function checkText(obj: any, prefix = '') {
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        checkText(value, fullKey);
      } else if (typeof value === 'string') {
        // 检查是否包含大量英文
        const englishRatio = calculateEnglishRatio(value);
        if (englishRatio > 0.7) { // 70%以上是英文
          warnings.push({
            type: 'untranslated',
            key: fullKey,
            language,
            message: `Text appears to be mostly untranslated (${Math.round(englishRatio * 100)}% English)`
          });
        }
      }
    }
  }
  
  checkText(translations);
  return warnings;
}

// 计算英文字符比例
function calculateEnglishRatio(text: string): number {
  const cleanText = text.replace(/[^a-zA-Z\u4e00-\u9fa5]/g, '');
  if (cleanText.length === 0) return 0;
  
  const englishChars = cleanText.match(/[a-zA-Z]/g) || [];
  return englishChars.length / cleanText.length;
}

// 计算翻译统计
function calculateStats(
  translations: Record<string, Record<string, any>>
): ValidationStats {
  const baseLanguage = 'en';
  const baseKeys = new Set(extractKeys(translations[baseLanguage] || {}));
  const totalKeys = baseKeys.size;
  
  const translatedKeys: Record<string, number> = {};
  const coverage: Record<string, number> = {};
  
  for (const [language, trans] of Object.entries(translations)) {
    const keys = extractKeys(trans);
    translatedKeys[language] = keys.length;
    coverage[language] = totalKeys > 0 ? (keys.length / totalKeys) * 100 : 0;
  }
  
  return {
    totalKeys,
    translatedKeys,
    coverage
  };
}

// 主验证函数
export function validateTranslations(
  translations: Record<string, Record<string, any>>
): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  
  // 获取基准语言（英文）的所有键
  const baseKeys = new Set(extractKeys(translations.en || {}));
  
  // 验证每种语言
  for (const [language, trans] of Object.entries(translations)) {
    // 检查键完整性
    errors.push(...checkKeyCompleteness(trans, baseKeys, language));
    
    // 检查值有效性
    errors.push(...checkValueValidity(trans, language));
    
    // 检查术语一致性
    warnings.push(...checkTerminologyConsistency(trans, language));
    
    // 检查占位符一致性
    if (language !== 'en') {
      warnings.push(...checkPlaceholderConsistency(translations.en, trans, language));
    }
    
    // 检查未翻译文本
    warnings.push(...checkUntranslatedText(trans, language));
  }
  
  // 计算统计信息
  const stats = calculateStats(translations);
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats
  };
}

// 生成验证报告
export function generateValidationReport(result: ValidationResult): string {
  const lines: string[] = [];
  
  lines.push('# Translation Validation Report');
  lines.push('');
  lines.push(`## Summary`);
  lines.push(`- Status: ${result.valid ? '✅ PASSED' : '❌ FAILED'}`);
  lines.push(`- Total Keys: ${result.stats.totalKeys}`);
  lines.push(`- Errors: ${result.errors.length}`);
  lines.push(`- Warnings: ${result.warnings.length}`);
  lines.push('');
  
  lines.push('## Coverage');
  for (const [language, coverage] of Object.entries(result.stats.coverage)) {
    lines.push(`- ${language}: ${coverage.toFixed(1)}% (${result.stats.translatedKeys[language]}/${result.stats.totalKeys})`);
  }
  lines.push('');
  
  if (result.errors.length > 0) {
    lines.push('## Errors');
    for (const error of result.errors) {
      lines.push(`- **[${error.type}]** ${error.language}: ${error.message}`);
    }
    lines.push('');
  }
  
  if (result.warnings.length > 0) {
    lines.push('## Warnings');
    for (const warning of result.warnings) {
      lines.push(`- **[${warning.type}]** ${warning.language}: ${warning.message}`);
    }
    lines.push('');
  }
  
  return lines.join('\n');
}

// CLI执行函数
export async function runValidation() {
  try {
    // 动态导入翻译文件
    const enModule = await import('./locales/en');
    const zhModule = await import('./locales/zh-CN');
    
    const translations = {
      en: enModule.en,
      'zh-CN': zhModule.zhCN
    };
    
    const result = validateTranslations(translations);
    const report = generateValidationReport(result);
    
    console.log(report);
    
    // 如果有错误，退出码为1
    if (!result.valid) {
      process.exit(1);
    }
  } catch (error) {
    console.error('Validation failed:', error);
    process.exit(1);
  }
}

// 如果直接执行此文件
if (require.main === module) {
  runValidation();
}