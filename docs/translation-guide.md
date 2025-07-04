# Claudia 翻译规范指南

本文档定义了 Claudia 项目的翻译标准和规范，确保中文翻译的质量、一致性和专业性。

## 1. 翻译原则

### 1.1 基本原则
- **准确性**：准确传达原文含义，不增删内容
- **自然性**：符合中文表达习惯，避免生硬翻译
- **一致性**：同一术语在整个应用中保持统一译法
- **简洁性**：使用简洁明了的表达，避免冗长
- **用户友好**：从用户角度出发，确保易于理解

### 1.2 语言风格
- 使用正式但友好的语气
- 避免过于口语化的表达
- 保持专业性的同时确保亲和力
- 错误消息应清晰指出问题并提供解决方向

## 2. 术语表

### 2.1 核心术语（保持英文）
以下技术术语在中文界面中保持英文原文：
- **API** - 应用程序接口
- **Token** - 在技术上下文中保持原文
- **Claude** - 产品名称
- **MCP** (Model Context Protocol) - 模型上下文协议
- **JSON** - 数据格式
- **Markdown** - 标记语言
- **JSONL** - JSON Lines格式

### 2.2 标准译法
以下术语必须使用统一的中文翻译：

| 英文 | 中文 | 使用场景 |
|------|------|----------|
| Agent/Agents | 智能体 | 所有UI文本 |
| Token/Tokens | 令牌 | 使用量统计中 |
| Session/Sessions | 会话 | 项目交互 |
| Checkpoint/Checkpoints | 检查点 | 时间线功能 |
| Sandbox | 沙箱 | 安全隔离环境 |
| Model | 模型 | AI模型选择 |
| Prompt | 提示词 | 输入提示 |
| Context | 上下文 | 对话上下文 |
| Server/Servers | 服务器 | MCP服务器 |
| Tool/Tools | 工具 | 功能工具 |
| Command/Commands | 命令 | 执行命令 |
| Permission/Permissions | 权限 | 访问控制 |
| Profile/Profiles | 配置 | 设置配置 |
| Setting/Settings | 设置 | 应用设置 |

### 2.3 动作词汇

| 英文 | 中文 | 备注 |
|------|------|------|
| Save | 保存 | |
| Cancel | 取消 | |
| Delete | 删除 | |
| Edit | 编辑 | |
| Create | 创建 | |
| Update | 更新 | |
| Refresh | 刷新 | |
| Search | 搜索 | |
| Filter | 筛选 | |
| Export | 导出 | |
| Import | 导入 | |
| Execute | 执行 | |
| Run | 运行 | |
| Stop | 停止 | |
| Preview | 预览 | |
| Browse | 浏览 | |
| Select | 选择 | |
| Apply | 应用 | |
| Reset | 重置 | |
| Clear | 清空 | |
| Copy | 复制 | |
| Close | 关闭 | |

### 2.4 状态词汇

| 英文 | 中文 | 使用场景 |
|------|------|----------|
| Running | 运行中 | 任务执行状态 |
| Completed | 已完成 | 任务完成状态 |
| Failed | 失败 | 任务失败状态 |
| Pending | 待处理 | 等待执行 |
| Cancelled | 已取消 | 用户取消 |
| Loading | 加载中 | 数据加载 |
| Ready | 就绪 | 准备状态 |
| Active | 活动 | 激活状态 |
| Inactive | 非活动 | 未激活状态 |

## 3. 翻译规范

### 3.1 界面元素
- **按钮**：使用动词，如"保存"、"取消"
- **标题**：简洁明了，避免冗长
- **标签**：名词为主，如"名称"、"描述"
- **提示文本**：完整句子，友好引导
- **占位符**：示例或引导文本，如"请输入..."

### 3.2 消息类型

#### 成功消息
- 格式：`[对象] + 已成功 + [动作]`
- 例如："智能体已成功创建"、"设置已成功保存"

#### 错误消息
- 格式：`[动作] + 失败：[原因]`
- 例如："保存失败：网络连接错误"
- 应提供解决建议

#### 确认消息
- 格式：`确定要 + [动作] + [对象] + 吗？`
- 例如："确定要删除此智能体吗？"

#### 警告消息
- 明确说明风险和后果
- 例如："此操作无法撤销"

### 3.3 数字和单位
- 保持阿拉伯数字
- 大数字使用千分位：1,234,567
- 百分比：85%（无空格）
- 时间：使用24小时制
- 日期：YYYY年MM月DD日

### 3.4 标点符号
- 中文标点：使用全角标点（。，！？：；）
- 英文内容：保持半角标点
- 省略号：使用中文省略号（……）
- 破折号：使用中文破折号（——）

### 3.5 特殊情况处理

#### 品牌和产品名
- Claude、Anthropic 等保持原文
- 不翻译的产品功能名保持原文

#### 技术文本中的英文
- API key → API 密钥
- JSON response → JSON 响应
- Error code → 错误代码

#### 混合文本
- 中英文之间加空格：`使用 API 密钥`
- 数字与单位之间加空格：`10 MB`
- 但百分号例外：`100%`

## 4. 质量检查清单

### 4.1 翻译前检查
- [ ] 理解原文完整含义
- [ ] 确认上下文场景
- [ ] 查阅术语表

### 4.2 翻译中注意
- [ ] 保持术语一致性
- [ ] 符合中文表达习惯
- [ ] 控制文本长度（UI空间限制）
- [ ] 保留必要的变量占位符

### 4.3 翻译后验证
- [ ] 语义准确无歧义
- [ ] 标点符号正确
- [ ] 无错别字
- [ ] 在实际界面中显示正常
- [ ] 保持了原文的语气

## 5. 常见错误示例

### 5.1 避免直译
❌ "Create a new agent" → "创建一个新的代理"  
✅ "Create a new agent" → "创建新智能体"

### 5.2 避免冗余
❌ "点击这里进行保存操作"  
✅ "保存"

### 5.3 保持一致性
❌ 同时使用"代理"、"智能体"、"Agent"  
✅ 统一使用"智能体"

### 5.4 正确处理占位符
❌ "已使用{used}个令牌，共{total}个"  
✅ "已使用 {used} 个令牌，共 {total} 个"

## 6. 更新和维护

### 6.1 添加新翻译
1. 在 `types.ts` 中添加类型定义
2. 在 `en.ts` 中添加英文原文
3. 在 `zh-CN.ts` 中添加中文翻译
4. 运行验证工具确保正确

### 6.2 修改现有翻译
1. 同时更新所有语言文件
2. 检查所有使用该翻译键的组件
3. 运行完整测试确保无破坏

### 6.3 翻译审查流程
1. 自查：译者按清单自查
2. 工具检查：运行 validator.ts
3. 界面检查：在实际UI中验证
4. 用户反馈：收集并改进

## 7. 工具使用

### 7.1 翻译验证工具
```bash
npm run validate-translations
```

### 7.2 查找未翻译文本
```bash
npm run find-untranslated
```

### 7.3 术语一致性检查
验证工具会自动检查术语使用的一致性。

## 8. 贡献指南

欢迎贡献翻译改进！请：
1. 遵循本规范
2. 使用 Pull Request 提交
3. 在 PR 中说明改动原因
4. 确保通过所有验证

---

最后更新：2024年1月
版本：1.0.0