import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "产品",
    prefix: "/guide/",
    children: [
      {
        text: "产品介绍",
        link: ''
        // prefix: "bar/",
        // children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "下载",
        link: ''
      },
      {
        text: "模块说明",
        link: ''
      },
      {
        text: "新特性",
        link: ''
      },
      {
        text: "相关依赖",
        link: ''
      },
    ],
  },
  {
    text: "开发指南",
    prefix: "/guide/",
    children: [
      {
        text: 'Web端',
        link: ''
      },
      {
        text: '移动端',
        link: ''
      }
    ]
  },
  {
    text: "示例",
    prefix: "/example/",
    children: [
      {
        text: "web端",
        link: ''
      },
      {
        text: "移动端",
        link: ''
      },
      // {
      //   text: "Server",
      //   prefix: "foo/",
      //   children: ["ray", { text: "...", link: "" }],
      // },
    ],
  },
  {
    text: "API",
    icon: "book",
    link: "http://39.152.31.83:11280/apps/epsplanet_docs/dist/api/",
  },
  {
    text: "组件库",
    icon: "book",
    link: "http://39.152.31.83:11280/apps/epsplanet_docs/dist/components/",
  }
]);
