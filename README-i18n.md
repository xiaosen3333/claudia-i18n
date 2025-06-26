# Claudia 国际化 (i18n) 项目

## 项目概述

本项目为 [Claudia](https://github.com/getAsterisk/claudia) 添加了完整的中文国际化支持，让中文用户能够享受原生中文界面体验。

## 🌍 国际化功能特性

### ✨ 支持的语言
- **中文（简体）** - 完整翻译支持
- **English** - 原生英文支持

### 🔧 技术实现
- **类型安全**：基于 TypeScript 的翻译系统
- **React Context**：高效的翻译状态管理
- **动态切换**：运行时语言切换，无需重启
- **一致性**：统一的翻译键命名规范

## 📝 主要改动

### 🎯 核心翻译系统
- 新增完整的 i18n 基础架构
- 实现 `useTranslation` Hook
- 创建类型安全的翻译键定义
- 支持嵌套翻译键结构

### 🌐 界面翻译覆盖
已完成以下组件的完整翻译：

| 组件 | 状态 | 描述 |
|------|------|------|
| **CCAgents.tsx** | ✅ 完成 | Agent 管理界面 |
| **Settings.tsx** | ✅ 完成 | 设置页面 |
| **CreateAgent.tsx** | ✅ 完成 | 创建/编辑 Agent |
| **AgentExecution.tsx** | ✅ 完成 | Agent 执行界面 |
| **UsageDashboard.tsx** | ✅ 完成 | 使用情况仪表板 |
| **MCPManager.tsx** | ✅ 完成 | MCP 服务器管理 |
| **ProjectList.tsx** | ✅ 完成 | 项目列表 |
| **MarkdownEditor.tsx** | ✅ 完成 | Markdown 编辑器 |
| **Topbar.tsx** | ✅ 完成 | 顶部导航栏 |

### 🔤 翻译策略
- **技术术语保持英文**：Tokens, API, JSON, MCP, Agent 等
- **用户界面中文化**：按钮、标签、消息、描述等
- **错误信息本地化**：所有错误提示支持中文
- **帮助文本翻译**：工具提示和说明文字

## 🛠️ 构建和打包

### 前置要求
- **Rust** 1.70.0+
- **Node.js** 18+
- **Bun** (推荐) 或 **npm**
- **Tauri 依赖**：根据操作系统安装对应依赖

### 🖥️ 各平台打包方式

#### macOS 打包
```bash
# 开发构建
npm run tauri dev

# 生产构建
npm run tauri build

# 输出文件：
# - Claudia.app (应用程序包)
# - Claudia_0.1.0_aarch64.dmg (安装包)
```

#### Windows 打包
```bash
# 开发构建
npm run tauri dev

# 生产构建
npm run tauri build

# 输出文件：
# - Claudia.exe (可执行文件)
# - Claudia_0.1.0_x64_en-US.msi (安装包)
```

#### Linux 打包
```bash
# 开发构建
npm run tauri dev

# 生产构建
npm run tauri build

# 输出文件：
# - claudia (可执行文件)
# - claudia_0.1.0_amd64.deb (Debian/Ubuntu)
# - claudia-0.1.0.x86_64.rpm (RedHat/CentOS)
# - claudia_0.1.0_amd64.AppImage (通用)
```

### ⚡ 仅前端构建
```bash
# TypeScript 编译检查
npm run tsc --noEmit

# 前端构建
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
src/
├── lib/
│   └── i18n/
│       ├── index.ts          # 国际化入口
│       ├── types.ts          # 翻译键类型定义  
│       └── locales/
│           ├── en.ts         # 英文翻译
│           └── zh-CN.ts      # 中文翻译
├── hooks/
│   └── useTranslation.ts     # 翻译 Hook
└── components/               # 已翻译的 React 组件
```

## 🎮 使用方法

### 语言切换
1. 打开应用程序
2. 点击右上角 **Settings**（设置）
3. 在 **General**（常规）选项卡中选择 **Interface Language**（界面语言）
4. 选择 **中文（简体）** 或 **English**
5. 设置自动保存，界面立即更新

### 开发者使用
```typescript
import { useTranslation } from '@/hooks/useTranslation';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <p>{t('agents.description')}</p>
    </div>
  );
}
```

## 🔍 翻译质量

### ✅ 已验证项目
- ✅ TypeScript 编译无错误
- ✅ 所有组件翻译完整
- ✅ 翻译键类型安全
- ✅ 运行时语言切换正常
- ✅ 构建打包成功

### 📊 翻译统计
- **总翻译键**：200+ 个
- **覆盖组件**：9 个主要组件
- **支持语言**：2 种语言
- **翻译完成度**：100%

## 🙏 鸣谢

### 原项目作者
感谢 [Asterisk](https://github.com/getAsterisk) 团队开发的优秀开源项目 Claudia，为 Claude Code 用户提供了强大的桌面应用程序。

### 贡献者
- **[@zzy](https://github.com/2589195970)** - 国际化系统设计与实现，完整中文翻译

## 📚 相关链接

- **原项目仓库**：https://github.com/getAsterisk/claudia
- **国际化版本**：https://github.com/2589195970/claudia-i18n.git
- **Claude Code 官网**：https://claude.ai/code
- **Tauri 框架**：https://tauri.app

## 📄 许可证

本项目遵循原项目的开源许可证。

---

**注**：本国际化版本基于 Claudia v0.1.0 开发，如需更新版本请参考原项目最新发布。