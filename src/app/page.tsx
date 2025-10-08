// Home()
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Rayen Askri — Full Stack Developer & Video Editor
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
            I build clean, scalable web apps and craft engaging video content.
            My passion is turning ideas into polished, user-centered experiences.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-foreground/20 px-5 py-2.5 text-sm font-medium hover:bg-foreground/5 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden border border-foreground/10 shadow-sm">
            <Image
              src="/rayen.jpg.png" // placeholder — replace with your photo later
              alt="Hero image placeholder"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
