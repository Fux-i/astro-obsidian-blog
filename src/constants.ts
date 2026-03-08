import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconZhihu from "@/assets/icons/IconZhihu.svg"
// import IconBrandX from "@/assets/icons/IconBrandX.svg";
// import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
// import IconBili from "@/assets/icons/IconBilibili.svg";

// import IconWeibo from "@/assets/icons/IconTelegram.svg";
// import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
// import IconFacebook from "@/assets/icons/IconFacebook.svg";
// import IconTelegram from "@/assets/icons/IconTelegram.svg";
// import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: readonly Social[] = [
  {
    name: "Zhihu",
    href: "https://www.zhihu.com/people/ju-jiu-31-72/posts",
    linkTitle: `Fuxi on Zhihu`,
    icon: IconZhihu,
  },
  {
    name: "GitHub",
    href: "https://github.com/fux-i",
    linkTitle: `Fuxi on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:1538130391@qq.com",
    linkTitle: `Send an email to Fuxi`,
    icon: IconMail,
  },
  // {
  //   name: "X",
  //   href: "https://x.com/username",
  //   linkTitle: `Fuxi on X`,
  //   icon: IconBrandX,
  // },
  // {
  //   name: "LinkedIn",
  //   href: "https://www.linkedin.com/in/username/",
  //   linkTitle: `Fuxi on LinkedIn`,
  //   icon: IconLinkedin,
  // },
] as const;

export const SHARE_LINKS: readonly Social[] = [
  // {
  //   name: "WhatsApp",
  //   href: "https://wa.me/?text=",
  //   linkTitle: `Share this post via WhatsApp`,
  //   icon: IconWhatsapp,
  // },
  // {
  //   name: "Facebook",
  //   href: "https://www.facebook.com/sharer.php?u=",
  //   linkTitle: `Share this post on Facebook`,
  //   icon: IconFacebook,
  // },
  // {
  //   name: "X",
  //   href: "https://x.com/intent/post?url=",
  //   linkTitle: `Share this post on X`,
  //   icon: IconBrandX,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://t.me/share/url?url=",
  //   linkTitle: `Share this post via Telegram`,
  //   icon: IconTelegram,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://pinterest.com/pin/create/button/?url=",
  //   linkTitle: `Share this post on Pinterest`,
  //   icon: IconPinterest,
  // },
  // {
  //   name: "Bilibili",
  //   href: "###",
  //   linkTitle: `分享到哔哩哔哩`,
  //   icon: IconBili,
  // },
  // {
  //   name: "Mail",
  //   href: "mailto:hi@yaavi.me?subject=See%20this%20post&body=",
  //   linkTitle: `发送邮件分享`,
  //   icon: IconMail,
  // },
] as const;
