---
title: "快速开始"
---

# 引入 EPSPlanetSDK

## 下载 EPSPlanetSDK

在开始前，请先下载好 SDK 包

::: tip 下载地址
[点击跳转](../../download/)
:::

## 引入 EPSPlanetSDK

::: tabs
@tab html
原生 js 在 html 中引入

```html
<script src="EPSPlanet_SDK/XbsjEarth/XbsjEarth.js"></script>
```

sdk 载入后初始化场景

```javascript
XE.ready().then(() => {
  const earth = new XE.Earth('earthContainer')
})
```

@tab vue
将下载好的 sdk 包解压到项目的 public 目录下,在 index.html 中引入

```html
<script src="EPSPlanet_SDK/XbsjEarth/XbsjEarth.js"></script>
```

在 sdk 加载后再创建 App

```typescript
import { createApp } from "vue";
import App from "./App.vue";

XE.ready().then(() => {
  const app = createApp(App);
  app.mount("#app");
});
```

:::

