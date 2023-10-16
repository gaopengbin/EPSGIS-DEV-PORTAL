import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils"
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/EPSGIS-DEV-PORTAL/",
  port: 8083,
  lang: "zh-CN",
  title: "EPSGIS DEV for Cesium",
  description: "EPSGIS二次开发",
  head: [
    ["script", { type: 'text/javascript', src: '/EPSPlanet_SDK/XbsjEarth/XbsjEarth.js' }],
    ["script", { type: 'text/javascript', src: '/EPSGIS-DEV-PORTAL/EPSPlanet_SDK/XbsjEarth/XbsjEarth.js' }],
    // ["link", { rel: 'stylesheet', href: 'http://localhost/epsplanet_assets/assets/font/iconfont.css' }],
    // ["script", { type: 'text/css', src: '/EPSPlanet_Assets/assets/font/iconfont.css' }],
    // ["link", { rel: 'stylesheet', href: '/EPSGIS-DEV-PORTAL/EPSPlanet_Assets/assets/font/iconfont.css' }],
  ],
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,

  alias: {
    "@test": path.resolve(__dirname, "components/test.vue")
  }
});
