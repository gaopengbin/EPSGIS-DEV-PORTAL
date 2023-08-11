import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/portal/",

  lang: "zh-CN",
  title: "EPSGIS DEV for Cesium",
  description: "EPSGIS二次开发",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
