# fengbinghui.github.io

个人作品集站点（纯 HTML / CSS / JS，零依赖、零构建）。

- 在线访问：<https://fengbinghui.github.io>
- 风格：参考 Apple 官网（apple.com.cn）—— 大留白、编辑级大标题、毛玻璃导航、浅色默认、蓝色主 CTA、分区色带
- 内容：个人介绍、代表项目（feiyu-ai / OISYS / CommHeatManage）、界面预览、技术栈、工程实践、编程轨迹
- 特性：**默认浅色主题**（可切换深色并记忆）、响应式布局、滚动渐入、数字滚动、无外部 CDN 依赖

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
│  └─ img/               # 项目真实界面截图（feiyu-ai）
└─ README.md
```

## 设计要点

- **字体**：优先 SF Pro（-apple-system / BlinkMacSystemFont），中文回退 PingFang SC / 微软雅黑
- **色彩**：浅色 `#ffffff` / 色带 `#f5f5f7` / 正文 `#1d1d1f` / 辅助 `#6e6e73` / 主按钮 `#0071e3` / 链接 `#0066cc`
- **排版**：Hero 大标题 `clamp(42px, 7.2vw, 82px)`，字距 `-0.03em`；正文 17px；分区标题 30–44px
- **导航**：48px 高、半透明 + `backdrop-filter: saturate(180%) blur(20px)`
- **组件**：980px 胶囊按钮、28px 圆角深色/浅色项目卡片、无边框列表、细分隔线
