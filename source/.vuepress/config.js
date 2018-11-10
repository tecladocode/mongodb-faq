module.exports = {
  title: "MongoDB FAQ",
  description:
    "Frequently asked questions from our courses on working with and setting up MongoDB.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    lastUpdated: "Last updated",
    sidebar: [
      "/",
      {
        title: "Mac",
        children: ["/mac/", "/mac/1_installation", "/mac/2_faq"]
      },
      {
        title: "Windows",
        children: ["/windows/", "/windows/1_installation"]
      },
      {
        title: "Ubuntu",
        children: ["/ubuntu/", "/ubuntu/1_installation"]
      },
      "/mongodb_with_python"
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2] }
  },
  ga: "UA-44054919-18"
};
