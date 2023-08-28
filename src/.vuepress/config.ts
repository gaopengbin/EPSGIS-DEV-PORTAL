import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils"
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/EPSGIS-DEV-PORTAL/",

  lang: "zh-CN",
  title: "EPSGIS DEV for Cesium",
  description: "EPSGIS二次开发",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,

  alias: {
    "@test": path.resolve(__dirname, "components/test.vue")
  }
});
