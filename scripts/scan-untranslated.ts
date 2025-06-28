#!/usr/bin/env bun

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const COMPONENTS_DIR = './src/components';
const EXCLUDED_FILES = ['index.ts', 'ui'];

// 匹配可能是硬编码文本的模式
const patterns = [
  // 直接的字符串字面量（排除单个字符和纯符号）
  />["'](?![\s\W])[A-Z][a-zA-Z\s]{2,}["']</,
  />\s*["'](?![\s\W])[A-Z][a-zA-Z\s]{2,}["']\s*</,
  
  // 标题属性
  /title=["'][A-Z][a-zA-Z\s]{2,}["']/,
  
  // placeholder属性
  /placeholder=["'][A-Z][a-zA-Z\s]{2,}["']/,
  
  // aria-label属性
  /aria-label=["'][A-Z][a-zA-Z\s]{2,}["']/,
  
  // 按钮和标签文本
  /<(Button|Label|span|p|h[1-6]|div)[^>]*>["']?[A-Z][a-zA-Z\s]{2,}["']?</,
  
  // 错误消息
  /Error:?\s*["'][A-Z][a-zA-Z\s]{2,}["']/,
  /message:\s*["'][A-Z][a-zA-Z\s]{2,}["']/,
  
  // Toast消息
  /toast\(\{[^}]*message:\s*["'][A-Z][a-zA-Z\s]{2,}["']/,
  
  // 条件渲染中的文本
  /\?\s*["'][A-Z][a-zA-Z\s]{2,}["']\s*:/,
  /:\s*["'][A-Z][a-zA-Z\s]{2,}["']\s*[})]/, 
];

// 已知的可忽略模式
const ignorePatterns = [
  /className=/,
  /import\s+/,
  /from\s+["']/,
  /\/\/.*/,
  /\/\*[\s\S]*?\*\//,
  /console\./,
  /data-/,
  /key=/,
  /id=/,
  /type=/,
  /variant=/,
  /size=/,
  /align=/,
  /side=/,
  /\bt\(/,  // 已经使用t()函数的
];

async function scanFile(filePath: string) {
  const content = await readFile(filePath, 'utf-8');
  const lines = content.split('\n');
  const issues: Array<{ line: number; text: string; match: string }> = [];

  lines.forEach((line, index) => {
    // 跳过已经使用t()函数的行
    if (line.includes('t(') || line.includes('useTranslation')) {
      return;
    }

    // 检查是否应该忽略这一行
    const shouldIgnore = ignorePatterns.some(pattern => pattern.test(line));
    if (shouldIgnore) {
      return;
    }

    // 检查每个模式
    patterns.forEach(pattern => {
      const matches = line.match(pattern);
      if (matches) {
        issues.push({
          line: index + 1,
          text: line.trim(),
          match: matches[0]
        });
      }
    });
  });

  return issues;
}

async function scanDirectory(dir: string) {
  const entries = await readdir(dir, { withFileTypes: true });
  let totalIssues = 0;

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!EXCLUDED_FILES.includes(entry.name)) {
        await scanDirectory(fullPath);
      }
    } else if (entry.isFile() && entry.name.endsWith('.tsx') && !EXCLUDED_FILES.includes(entry.name)) {
      const issues = await scanFile(fullPath);
      
      if (issues.length > 0) {
        console.log(`\n📄 ${fullPath}`);
        issues.forEach(issue => {
          console.log(`  Line ${issue.line}: ${issue.match}`);
          console.log(`    ${issue.text}`);
        });
        totalIssues += issues.length;
      }
    }
  }

  return totalIssues;
}

async function main() {
  console.log('🔍 扫描未翻译的文本...\n');
  
  try {
    const totalIssues = await scanDirectory(COMPONENTS_DIR);
    
    if (totalIssues === 0) {
      console.log('\n✅ 太好了！没有发现未翻译的文本。');
    } else {
      console.log(`\n⚠️  发现 ${totalIssues} 处可能未翻译的文本。`);
      console.log('\n提示：请检查这些文本是否需要国际化处理。');
    }
  } catch (error) {
    console.error('扫描时出错:', error);
    process.exit(1);
  }
}

main();