import ProjectsSection from "@/components/ProjectSection/ProjectSection";

export default function ProjectsPage() {
  return (
    <main className="pt-28 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-14">All Projects</h1>
      <ProjectsSection all />
    </main>
  );
}
