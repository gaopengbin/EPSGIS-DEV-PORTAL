import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/EPSGIS-DEV-PORTAL/",

  lang: "zh-CN",
  title: "EPSGIS DEV for Cesium",
  description: "EPSGIS二次开发",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
