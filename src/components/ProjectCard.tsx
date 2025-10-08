// ProjectCard()
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  href,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-foreground/10 overflow-hidden shadow-sm bg-background">
      <div className="relative h-40">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-foreground/75">{description}</p>
        {href && (
          <div>
            <Link
              href={href}
              className="inline-flex items-center rounded-md border border-foreground/20 px-3 py-1.5 text-sm hover:bg-foreground/5 transition"
            >
              Learn More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}