import FacebookIcon from "@/public/assets/facebook-icon.svg";
import InstagramIcon from "@/public/assets/instagram-icon.svg";
import LinkedinIcon from "@/public/assets/linkedin-icon.svg";
import TwitterIcon from "@/public/assets/twitter-icon.svg";
import YoutubeIcon from "@/public/assets/youtube-icon.svg";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "List", href: "/list" },
  { name: "Contact us", href: "/" },
];

export const FEATURES = [
  {
    title: "Feature One",
    description:
      "Brief description of Feature One. This is where you highlight key benefits.",
  },
  {
    title: "Feature Two",
    description:
      "Brief description of Feature Two. This is where you highlight key benefits.",
  },
  {
    title: "Feature Three",
    description:
      "Brief description of Feature Three. This is where you highlight key benefits.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    icon: FacebookIcon,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/",
    icon: YoutubeIcon,
  },
  {
    name: "twitter",
    href: "https://twitter.com/",
    icon: TwitterIcon,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
    icon: LinkedinIcon,
  },
];

export const HERO_MESSAGE = {
  TITLE: "Welcome to My Amazing Product",
  SUB_TITLE:
    "Transforming your ideas into reality with my innovative solutions.",
};

export const ERROR_MSG = {
  DEFAULT: "An unexpected error occurred.",
};
