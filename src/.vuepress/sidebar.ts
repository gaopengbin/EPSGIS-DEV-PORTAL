import { sidebar } from "vuepress-theme-hope";
import { createComponentNav } from './createNav'
console.log(createComponentNav())
export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
  "/guide/": [
    // "",
    {
      text: "介绍",
      icon: "laptop-code",
      prefix: "web/intro/",
      link: "web/intro/",
      children: [
        {
          text: "Cesium",
          link: "#cesium",

        },
        {
          text: "EpsplanetSDK",
          link: "#epsplanetsdk",
        },
        {
          text: "EpsplanetBWL",
          link: "#epsplanetbwl",
        },
      ],
    },
    {
      text: "快速开始",
      icon: "book",
      prefix: "quick/",
      link: "web/quick/",
      children: "structure",
    },
  ],
  "/lib/": createComponentNav(),
});
