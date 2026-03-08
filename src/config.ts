export const BLOG_PATH = "src/data/blog";
export const DIARY_PATH = "src/data/diary";

export const SITE = {
  website: "https://fuxi.host/", // replace this with your deployed domain
  author: "Fuxi",
  profile: "https://fuxi.host/",
  desc: "一个时间长河中的个人档案馆。",
  title: "Fuxi's Blog",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/fux-i/blog-data",
  },
  comments: {
    enabled: true, // 启用评论功能
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
