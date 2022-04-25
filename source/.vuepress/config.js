module.exports = {
  title: "MongoDB FAQ",
  description:
    "Frequently asked questions from our courses on working with and setting up MongoDB.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    lastUpdated: "Last updated",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Get the course",
        link: "https://go.tecla.do/web-dev-course-sale",
      },
    ],
    sidebar: [
      //"/",
      {
        title: "Mac",
        children: ["/mac/1_installation", "/mac/2_faq"],
      },
      {
        title: "Windows",
        children: ["/windows/1_installation", "/windows/2_faq"],
      },
      //{
      //  title: "Ubuntu",
      //  children: ["/ubuntu/", "/ubuntu/1_installation"]
      //},
      {
        title: "MongoDB with Python",
        children: [
          "/mongodb_with_python/",
          "/mongodb_with_python/database.py",
          "/mongodb_with_python/faq",
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2] },
  },
  plugins: [["plausible", { domain: "mongodb.tecladocode.com" }]],
};
