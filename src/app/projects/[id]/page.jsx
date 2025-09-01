import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

// ✅ generateStaticParams (needed for SSG export)
export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetails({ params }) {
  const project = portfolioData.find((p) => p.id.toString() === params.id);

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-6">
      <Card className="w-full max-w-4xl shadow-lg rounded-2xl">
        {/* Project Image */}
        <CardHeader className="flex flex-col items-center">
          <Image
            src={project.img}
            alt={project.title}
            width={600}
            height={350}
            className="rounded-xl object-cover"
          />
          <CardTitle className="text-3xl font-bold mt-4">
            {project.title}
          </CardTitle>
          {project.status && (
            <Badge className="mt-2 bg-green-600 text-white px-3 py-1 rounded-full">
              {project.status}
            </Badge>
          )}
        </CardHeader>

        {/* Project Content */}
        <CardContent className="space-y-6">
          {/* Short Description */}
          <p className="text-gray-600 dark:text-gray-300 text-lg text-center">
            {project.desc}
          </p>

          {/* Overview Section */}
          {project.overview && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.overview}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Price (Optional) */}
          {project.price && (
            <h2 className="text-3xl font-semibold text-primary text-center">
              {project.price}
            </h2>
          )}

          {/* Links */}
          <div className="flex justify-center gap-6 mt-6 text-blue-600 underline">
            <Link href={project.live} target="_blank">
              Live
            </Link>
            {project.client_github && (
              <Link href={project.client_github} target="_blank">
                Client Code
              </Link>
            )}
            {project.server_github && (
              <Link href={project.server_github} target="_blank">
                Server Code
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
