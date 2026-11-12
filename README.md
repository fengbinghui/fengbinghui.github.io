# fengbinghui.github.io

个人作品集站点（纯 HTML / CSS / JS，零依赖、零构建）。

- 在线访问：<https://fengbinghui.github.io>
- 风格：参考 Apple 官网（apple.com.cn）—— 大留白、编辑级大标题、毛玻璃导航、浅色默认、蓝色主 CTA、分区色带
- 内容：个人介绍、代表项目（feiyu-ai / 知阅书库 / 月见小筑 / OISYS / CommHeatManage）、界面预览、技术栈、工程实践、编程轨迹
- 特性：**默认浅色主题**（可切换深色并记忆）、响应式布局、滚动渐入、数字滚动、无外部 CDN 依赖

## 项目一览

| 项目 | 定位 | 技术栈 |
| --- | --- | --- |
| **feiyu-ai** | 企业级 AI Agent 应用平台（公开） | Java 17 · Spring Boot 3 · LangChain4j · Vue3 · PostgreSQL + pgvector |
| **知阅书库** | 图书管理全栈系统（私有） | Spring Boot 2.7 · MyBatis-Plus · Vue2 · Element UI · ECharts |
| **月见小筑** | 心月狐主题个人博客（私有） | Spring Boot 2.3.7 · Vue3 / Vue2 · MySQL · Redis |
| **OISYS** | 教务 / 考勤管理系统（公开） | Spring Boot 2.7 · MyBatis-Plus · Vue2 · Element UI |
| **CommHeatManage** | 社区健康管理系统（公开） | Spring Boot 3.1 · Spring Security/JWT · Vue3 · Element Plus · ECharts |

> 知阅书库、月见小筑为私有仓库项目，页面只展示介绍与本地真机截图，不挂失效链接。

## 本地预览

```bash
# 任选其一
start index.html            # Windows 直接打开
python -m http.server 8080  # 或起一个本地静态服务器
```

## 结构

```text
.
├─ index.html            # 页面结构（导航 / Hero / 数字带 / 关于 / 项目 / 截图 / 技术栈 / 工程实践 / 轨迹 / CTA）
├─ assets/
│  ├─ style.css          # 设计令牌（浅色默认 + 深色）+ 布局 + 响应式
│  ├─ main.js            # 主题切换 / 导航状态 / 滚动渐入 / 数字滚动
│  ├─ favicon.svg        # 站点图标
│  └─ img/               # 项目真实界面截图（feiyu-ai / 知阅书库 / 月见小筑）
└─ README.md
```

## 设计要点

- **字体**：优先 SF Pro（-apple-system / BlinkMacSystemFont），中文回退 PingFang SC / 微软雅黑
- **色彩**：浅色 `#ffffff` / 色带 `#f5f5f7` / 正文 `#1d1d1f` / 辅助 `#6e6e73` / 主按钮 `#0071e3` / 链接 `#0066cc`
- **排版**：Hero 大标题 `clamp(42px, 7.2vw, 82px)`，字距 `-0.03em`；正文 17px；分区标题 30–44px
- **导航**：48px 高、半透明 + `backdrop-filter: saturate(180%) blur(20px)`
- **组件**：980px 胶囊按钮、28px 圆角深色/浅色项目卡片、带截图的项目卡（图上式）、无边框列表、细分隔线

## 更新记录

- **2026.11**：新增「知阅书库」「月见小筑」两个项目卡与 6 张界面截图；Hero、关于、技术栈、轨迹同步更新；补充 Open Graph / JSON-LD 元数据。
- **2026.11.10**：参考 Apple 官网重构（浅色默认 / 大留白 / 毛玻璃导航 / 项目 tiles），包装 feiyu-ai 等公开项目。
