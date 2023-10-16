---
title: "快速开始"
---

# 引入EPSPlanetSDK

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

## 组件库安装

```node
选择一个你喜欢的包管理器 

# NPM
npm install epsplanet

# Yarn
yarn add epsplanet

# PNPM
pnpm add epsplanet
```

## 组件库用法

### 全局引入
如果你想在项目中全局引入组件库，可以在 main.ts 中这样写

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import Epsplanet from "epsplanet";
import "epsplanet/es/style.css";

XE.ready().then(() => {
  const app = createApp(App);
  app.use(Epsplanet);
  app.mount("#app");
});
```

### 按需引入
如果你只想引入部分组件，可以手动引入组件

```vue
<template>
  <div id="app">
    <epsplanet-earth :options="options" />
  </div>
</template>
<script setup>
import { EpsplanetEarth } from "vue";
import "epsplanet/es/style.css";
</script>
```
