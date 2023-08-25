import { sidebar } from "vuepress-theme-hope";

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
    "",
    {
      text: "介绍",
      icon: "laptop-code",
      prefix: "demo/",
      link: "web/intro/",
      children: "structure",
    },
    {
      text: "快速开始",
      icon: "book",
      prefix: "quick/",
      link: "web/quick/",
      children: "structure",
    },
  ],
  "/api/": [
    {
      text: "标绘",
      icon: "laptop-code",
      prefix: "plot/",
      collapsible: true,
      children: [
        {
          text: "pin",
          // prefix: "demo/",
          link: "point.md",
          // children: "structure",
        },
        {
          text: "快速开始",
          icon: "book",
          prefix: "quick/",
          link: "web/quick/",
          children: "structure",
        },
      ]
    },
    {
      text: "介绍2",
      icon: "laptop-code",
      prefix: "demo/",
      collapsible: true,
      children: [
        {
          text: "标绘",
          icon: "laptop-code",
          prefix: "demo/",
          link: "web/intro/",
          children: "structure",
        },
        {
          text: "快速开始",
          icon: "book",
          prefix: "quick/",
          link: "web/quick/",
          children: "structure",
        },
      ]
    }
  ]
});
