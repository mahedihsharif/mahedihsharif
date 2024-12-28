import ElementorIcon from "../../assets/images/elementor.png";
import GempageIcon from "../../assets/images/gempage.jpg";
import JsIcon from "../../assets/images/js.png";
import MuiIcon from "../../assets/images/mui.png";
import PageFlyIcon from "../../assets/images/PageFly.png";
import PortfolioImg1 from "../../assets/images/portfolio-01.png";
import PortfolioImg2 from "../../assets/images/portfolio-02.png";
import PortfolioImg3 from "../../assets/images/portfolio-03.png";
import PortfolioImg4 from "../../assets/images/portfolio-04.png";
import PortfolioImg5 from "../../assets/images/portfolio-05.png";
import PortfolioImg6 from "../../assets/images/portfolio-06.jpg";
import ReactIcon from "../../assets/images/react.png";
import ReduxIcon from "../../assets/images/redux.png";
import ShopifyIcon from "../../assets/images/shopify.png";
import TailwindIcon from "../../assets/images/tailwind.png";
import WooIcon from "../../assets/images/woo.png";
import WordPressIcon from "../../assets/images/wordpress.png";

export const portfolioData = [
  {
    id: 1,
    img: PortfolioImg1,
    title: "E-Commerce",
    desc: "Ekhonie Online Shop",
    live: "https://ekhonie.netlify.app/",
    client_github: "https://github.com/mahedihsharif/ekhonie_client",
    count: 600,
  },
  {
    id: 2,
    img: PortfolioImg2,
    title: "service system",
    desc: "Car Wash Service System",
    live: "https://ekhonie.netlify.app/",
    client_github:
      "https://github.com/mahedihsharif/car-wash-service-centre-client",
    server_github:
      "https://github.com/mahedihsharif/car-wash-service-centre-client",
    count: 750,
  },
  {
    id: 3,
    img: PortfolioImg3,
    title: "service system",
    desc: "Computer Service System",
    live: "https://cm-repair.netlify.app/",
    client_github: "https://github.com/mahedihsharif/CM-Repair",
    count: 800,
  },
  {
    id: 4,
    img: PortfolioImg4,
    title: "css",
    desc: "The services provide for design",
    live: "https://mellifluous-licorice-ba925f.netlify.app/",
    count: 850,
  },
  {
    id: 5,
    img: PortfolioImg5,
    title: "landing page",
    desc: "E-commerce Landing Page",
    live: "https://globex-vertical.netlify.app/",
    count: 500,
  },
  {
    id: 6,
    img: PortfolioImg6,
    title: "web design",
    desc: "The services provide for design",
    count: 300,
  },
];

export const mySkillsData = [
  {
    id: 1,
    title: "web development",
    desc: "Web development involves creating and maintaining websites and web applications. It combines frontend design with backend functionality to build interactive, user-friendly digital experiences.",
    icon: [ReactIcon, ReduxIcon, TailwindIcon, MuiIcon, JsIcon],
  },
  {
    id: 2,
    title: "shopify expert",
    desc: "Shopify is a leading e-commerce platform that enables users to create and manage online stores with ease. It offers a user-friendly interface, customizable templates, and a range of tools for managing products, payments, and shipping.",
    icon: [ShopifyIcon, GempageIcon, PageFlyIcon],
  },
  {
    id: 3,
    title: "wordpress expert",
    desc: "Elementor is a powerful drag-and-drop page builder for WordPress, allowing users to create custom, responsive websites without coding. It features a wide range of design elements, templates, and widgets, enabling users to craft visually appealing pages.",
    icon: [WordPressIcon, ElementorIcon, WooIcon],
  },
];
