// Projects page
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and TailwindCSS.",
    imageSrc: "/window.svg",
    href: "#",
  },
  {
    title: "Full Stack App",
    description:
      "End-to-end web application with authentication and a REST API.",
    imageSrc: "/file.svg",
    href: "#",
  },
  {
    title: "Video Editing Reel",
    description:
      "A curated showcase of editing techniques and motion graphics.",
    imageSrc: "/globe.svg",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Projects</h1>
        <p className="text-foreground/75 mt-2">
          A selection of my recent work and achievements.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            imageSrc={p.imageSrc}
            href={p.href}
          />
        ))}
      </div>
    </section>
  );
}