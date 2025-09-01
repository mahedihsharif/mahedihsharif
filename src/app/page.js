"use client";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import ProjectsSection from "@/components/ProjectSection/ProjectSection";

import Resume from "@/components/Resume/Resume";
import Skills from "@/components/Skills/Skills";
import ScrollToTop from "react-scroll-to-top";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <ProjectsSection />
      <Resume />
      <Contact />
      <BlogPage />
      <ScrollToTop
        smooth
        height="12px"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
}
