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
    overview:
      "A modern e-commerce web application where users can browse products, add them to cart, and complete checkout seamlessly. Focused on providing a smooth and responsive shopping experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
  },
  {
    id: 2,
    img: PortfolioImg2,
    title: "Service System",
    desc: "Car Wash Service System",
    live: "https://ekhonie.netlify.app/",
    client_github:
      "https://github.com/mahedihsharif/car-wash-service-centre-client",
    server_github:
      "https://github.com/mahedihsharif/car-wash-service-centre-client",
    count: 750,
    overview:
      "An online platform for booking and managing car wash services. Users can schedule services, track progress, and provide feedback in real-time.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
  },
  {
    id: 3,
    img: PortfolioImg3,
    title: "Service System",
    desc: "Computer Service System",
    live: "https://cm-repair.netlify.app/",
    client_github: "https://github.com/mahedihsharif/CM-Repair",
    count: 800,
    overview:
      "A web app for managing computer repair services. Customers can request repairs, track status, and receive updates from service providers.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Node.js"],
  },
  {
    id: 4,
    img: PortfolioImg4,
    title: "CSS",
    desc: "The services provide for design",
    live: "https://mellifluous-licorice-ba925f.netlify.app/",
    count: 850,
    overview:
      "A creative CSS design showcase website demonstrating animations, layouts, and modern UI elements.",
    technologies: ["HTML", "CSS3", "JavaScript"],
  },
  {
    id: 5,
    img: PortfolioImg5,
    title: "Landing Page",
    desc: "E-commerce Landing Page",
    live: "https://globex-vertical.netlify.app/",
    count: 500,
    overview:
      "A professional e-commerce landing page designed for product marketing and lead generation with conversion-focused UI.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
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

// data/blogs.js
export const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    shortDesc:
      "Learn the basics of Next.js and how to build modern web applications with server-side rendering, routing, and API integration. Perfect for beginners to get started quickly.",
    content:
      "This is the full blog content for Getting Started with Next.js. You will learn about pages, routing, server-side rendering, static generation, API routes, and basic setup to start building robust web applications with ease. Next.js allows you to create high-performance websites and apps efficiently.",
    date: "2025-09-01",
    author: "Mahedi Hassan Sharif",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips and Tricks",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
    shortDesc:
      "Boost your productivity using Tailwind CSS with practical tips, utilities, and responsive design techniques to make your web apps visually stunning and maintainable.",
    content:
      "Tailwind CSS makes styling super fast and consistent. In this blog, we cover custom utilities, responsive design, dark mode handling, optimizing workflow, and how to build reusable UI components that scale across projects effectively.",
    date: "2025-08-28",
    author: "John Doe",
  },
  {
    id: 3,
    title: "Why Learn TypeScript?",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
    shortDesc:
      "Discover why TypeScript is essential for large-scale applications. Learn how static typing and enhanced tooling improve code quality and reduce bugs.",
    content:
      "TypeScript is a superset of JavaScript that introduces static typing. It helps catch errors during development, improves code readability, and integrates seamlessly with modern frameworks like React and Next.js. In this article, we explain how TypeScript can enhance developer productivity and maintainability.",
    date: "2025-08-20",
    author: "Jane Smith",
  },
  {
    id: 4,
    title: "Building a Portfolio Website",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    shortDesc:
      "Step-by-step guide to creating a stunning portfolio website to showcase your skills, projects, and experience, using modern tools and best practices.",
    content:
      "A portfolio website is crucial for any developer or designer. This blog covers planning your portfolio, choosing the right tech stack, designing a clean UI, optimizing performance, and deploying your site online. Learn how to make an impactful first impression on potential clients or employers.",
    date: "2025-08-15",
    author: "Alex Johnson",
  },
  {
    id: 5,
    title: "Mastering React Hooks",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    shortDesc:
      "Learn how to use React Hooks effectively to manage state, side effects, and create reusable logic in functional components.",
    content:
      "React Hooks provide a powerful way to write functional components with state and lifecycle methods. This blog dives deep into useState, useEffect, useRef, custom hooks, and best practices for creating scalable and maintainable React applications.",
    date: "2025-08-10",
    author: "Emily Davis",
  },
];
