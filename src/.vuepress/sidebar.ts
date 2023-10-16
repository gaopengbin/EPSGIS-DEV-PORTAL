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
      icon: "book",
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
      icon: "rocket",
      prefix: "web/quick",
      link: "web/quick",
      children: [
        {
          text: "SDK下载",
          link: "#下载-epsplanetsdk",
        },
        {
          text: "SDK引入",
          link: "#引入-epsplanetsdk",
        },
        {
          text: "组件库安装",
          link: "#组件库安装",
        },
        {
          text: "组件库使用",
          link: "#组件库用法",
        },
      ]
    },
    {
      text: "开发",
      icon: "laptop-code",
      prefix: "dev/",
      // link: "dev/",
      children:[
        {
          text:"常见问题",
          link:"question",
        }
      ]
    }
  ],
  "/lib/": createComponentNav(),
});
