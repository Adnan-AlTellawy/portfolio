import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

import user_image from "./user-image.jpg";
import user_img from "./user-img.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import postman from "./postman.jpg";
import postman_dark from "./postman-dark.jpg";
import github from "./github.jpg";
import github_dark from "./github-dark.jpg";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo1.jpg";
import logo_dark from "./logo2.jpg";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

import restaurant from "./public/restaurant.jpg";
import ecommerce from "./public/ecommerce.png";
import weather from "./public/weather.png";

export const assets = {
  user_image,
  user_img,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  postman,
  postman_dark,
  github,
  github_dark,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Restaurant Menu",
    description: "Web Application",
    bgImage: restaurant,
    link: "https://restaurant-app-adnan.netlify.app/"
  },
  {
    title: "e-commerce UI",
    description: "Frontend Interface",
    bgImage: ecommerce,
    link: "https://store-app-adnan.netlify.app/"
  },
  {
    title: "Weather App",
    description: "API Integration",
    bgImage: weather,
    link: "https://adnan-weather-pro.netlify.app/"
  },
];

export const serviceData = [
  {
    icon: <CodeBracketIcon />,
    title: "Web Development",
    description:
      "Building high-performance web applications using React and Next.js with clean, efficient code.",
    link: "",
  },
  {
    icon: <DevicePhoneMobileIcon />,
    title: "Responsive Design",
    description:
      "Ensuring a seamless experience across all mobile and desktop devices.",
    link: "",
  },
  {
    icon: <CommandLineIcon />,
    title: "API Integration",
    description:
      "Connecting front-end interfaces with dynamic back-end data and services.",
    link: "",
  },
  {
    icon: <RocketLaunchIcon />,
    title: "Optimization",
    description:
      "Optimizing code for maximum speed, performance, and SEO rankings.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Software Engineering Degree (In progress)",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = ["vscode", "postman", "figma", "git", "github"];
