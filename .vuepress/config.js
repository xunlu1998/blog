const moment = require("moment");
module.exports = {
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
        },
      },
    ],
    // [
    //   "@vuepress-reco/vuepress-plugin-bulletin-popover",
    //   {
    //     body: [
    //       {
    //         type: "title",
    //         content: "欢迎加入QQ交流群 🎉🎉🎉",
    //         style: "text-aligin: center;",
    //       },
    //       {
    //         type: "image",
    //         src: "/rvcode_qq.png",
    //       },
    //     ],
    //     footer: [
    //       {
    //         type: "button",
    //         text: "打赏",
    //         link: "/donate",
    //       },
    //       {
    //         type: "button",
    //         text: "打赏",
    //         link: "/donate",
    //       },
    //     ],
    //   },
    // ],
  ],

  title: "XunLu's Blog",
  description: "飞向宇宙浩瀚无垠",
  // "dest": "public",
  // base: "/blog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    // 评论配置
    valineConfig: {
      appId: "Kc1c0JlFg43C1WV6YAPS74yL-gzGzoHsz", // your appId
      appKey: "hmoAJbPQOb7fU1aE4v6cV5J1", // your appKey
    },
    // vssueConfig: {
    //   platform: "github",
    //   owner: "xunlu1998",
    //   repo: "blog",
    //   clientId: "16288c69954660d2f0cb",
    //   clientSecret: "e3a81aef8e7deb94b164e75c855571528c0dece5",
    // },
    mode: "light",
    // 子侧边栏
    subSidebar: "auto",
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Docs",
        icon: "reco-document",
        items: [
          {
            text: "Webpack",
            link: "/docs/webpack/",
          },
          {
            text: "MySQL",
            link: "/docs/mysql/",
          },
          {
            text: "短的JavaScript",
            link: "/docs/javascript/",
          },
          {
            text: "Browser",
            link: "/docs/browser/",
          },
        ],
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/xunlu1998",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/mysql/": ["", "theme", "plugin", "api"],
      "/docs/webpack/": ["", "history", "loader"],
      "/docs/browser/": ["", "begin"],
      "/docs/javascript/": ["", "data-type", "closure", "GC"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "XunLu",
    authorAvatar: "/avatar.png",
    record: "xunlu的部落格",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};
