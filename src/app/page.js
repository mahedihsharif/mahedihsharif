"use client";
import Contact from "@/components/Contact/Contact";
import Features from "@/components/Features";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Resume from "@/components/Resume/Resume";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <div>
      <Header />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
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
