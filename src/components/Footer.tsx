// Footer()
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Rayen Askri. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/rayenas"
            target="_blank"
            className="text-sm hover:opacity-80"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/rayen-askri-79b428298/"
            target="_blank"
            className="text-sm hover:opacity-80"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}