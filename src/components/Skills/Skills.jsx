"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    Backend: ["Node.js", "Express.js", "REST API", "Authentication (JWT)"],
    Database: ["MongoDB", "Mongoose"],
    Tools: ["Git & GitHub", "VS Code", "Postman", "Figma"],
  };

  return (
    <section className="py-48 px-6   mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-blue-600">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <Card
            key={category}
            className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-sm rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
