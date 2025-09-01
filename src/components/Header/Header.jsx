"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { ReactTyped } from "react-typed";
import MyPic from "../../../assets/images/mypic.png";

export default function Header() {
  return (
    <section className="pt-28 max-w-7xl mx-auto px-6 md:flex gap-20 items-center">
      {/* Left Content */}
      <div className="md:w-[60%] w-full">
        <h1 className="lg:text-5xl text-3xl font-bold mb-4">
          Hi, I’m <span className="text-blue-600">Mahedi H Sharif</span>
        </h1>

        {/* Typing Effect */}
        <ReactTyped
          strings={["Frontend Developer.", "MERN Stack Developer."]}
          className="lg:text-4xl text-2xl font-semibold text-gray-800 dark:text-gray-200"
          typeSpeed={80}
          backSpeed={40}
          backDelay={1200}
          loop
        />

        {/* Intro Paragraph */}
        <p className="py-8 tracking-wide leading-7 text-gray-600 dark:text-gray-300">
          I am a passionate and dedicated JavaScript-based full stack developer
          with a strong foundation in modern web technologies including{" "}
          <span className="font-medium">
            React.js, Next.js, Node.js, and MongoDB
          </span>
          . My focus is on building scalable, user-friendly, and high-performing
          applications. I love solving problems through clean code and
          continuously improving my skills to become a top-tier software
          engineer. My long-term goal is to work at a top-level company and
          contribute to impactful projects that make a difference.
        </p>

        {/* Social + Resume */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Social Links */}
          <div>
            <p className="pb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              FIND WITH ME
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a href="https://github.com/mahedihsharif" target="_blank">
                  <FaGithub className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a
                  href="https://www.facebook.com/mahedihsharif/"
                  target="_blank"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a
                  href="https://www.linkedin.com/in/mahedihsharif/"
                  target="_blank"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Resume Button */}
          <div>
            <a
              href="/assets/images/mahedihsharif_resume.pdf"
              download="Mahedi-Hassan-Sharif-Resume.pdf"
            >
              <Button className="flex items-center gap-2 px-6 py-3 rounded-xl shadow-md">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-[40%] w-full mt-10 md:mt-0">
        <Card className="rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <Image
              src={MyPic}
              alt="mahedihsharif"
              className="w-full object-cover"
              priority
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
