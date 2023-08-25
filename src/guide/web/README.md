---
title: "web"
---

# 项目环境配置

## 1.首先我们创建一个新的 Vue3 的项目

这里我们可以参考菜鸟教程

<iframe src="https://www.runoob.com/vue3/vue3-create-project.html" width="100%" height="500px" frameborder="0" allowfullscreen
/>

## 2.引入 EPSPlanetSDK

将下载好的 sdk 包解压到项目的 public 目录下

![](../assets/sdk.png)

然后在 public/index.html 中引入

![](../assets/sdk2.png)

main.ts 修改

![](../assets/sdk3.png)

## 3.引入 EPSPlanet_bwl

npm 安装

```powershell
<!--npm i 压缩包路径-->
npm i D:\Users\EPSPlanetBWL-1.0.0.tgz
```

main.ts 中引入

```typescript
import EPSPlanetBWL from "EPSPlanetBWL";
import "EPSPlanetBWL/lib/epsplanet-bwl.css";
app.use(EPSPlanetBWL);
```

静态配置资源包引入

将下载的资源包解压到项目的 public 目录下

![](../assets/assets.png)

至此，我们的项目环境配置完毕
