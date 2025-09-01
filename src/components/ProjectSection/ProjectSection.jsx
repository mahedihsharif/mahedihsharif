"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection({ all = false }) {
  const projects = all ? portfolioData : portfolioData.slice(0, 3);

  return (
    <section className=" max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-blue-600">Projects</span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg">
            <Image
              src={project.img}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <p className="uppercase text-sm text-blue-600 tracking-widest">
                {project.title}
              </p>
              <CardTitle className="text-lg">{project.desc}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center text-sm text-blue-500 underline">
                <a href={project.live} target="_blank">
                  Live
                </a>
                {project.client_github && (
                  <a href={project.client_github} target="_blank">
                    Code
                  </a>
                )}
                {project.server_github && (
                  <a href={project.server_github} target="_blank">
                    Server
                  </a>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/projects/${project.id}`}>
                <Button variant="default" className="w-full">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {!all && (
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
