// Navbar()
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Rayen Askri
        </Link>

        <button
          className="md:hidden inline-flex items-center rounded-md border border-foreground/15 px-3 py-1.5 text-sm hover:bg-foreground/5 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm hover:opacity-80 transition ${
                  active ? "font-medium" : "text-foreground/80"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-foreground/10">
          <div className="px-4 py-3 flex flex-col gap-2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm py-1.5 ${
                    active ? "font-medium" : "text-foreground/80"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}