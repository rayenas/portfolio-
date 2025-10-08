"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className={`${darkMode ? "dark" : ""} max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24`}>

      {/* Dark/Light toggle */}
      

      {/* Hero */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">Rayen Askri</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Full Stack Developer & Video Editor. I build clean, scalable web apps and craft engaging video content.
        </p>
        <a
          href="/Rayen_ASKRI_CV.pdf"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition"
        >
          Download CV
        </a>
      </div>

      {/* Education */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold border-b-2 border-foreground/20 pb-2">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center text-center space-y-4">
            <Image
              src="/islaib.jpg"
              alt="ISLAIB"
              width={400}
              height={250}
              className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h3 className="text-2xl font-semibold">Licence en Génie Logiciel</h3>
              <p>ISLAIB, Béja, Tunisie</p>
              <p>12/09/2021 - 24/06/2024</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">Engineering Degree</h3>
            <p>Private Higher School of Engineering and Technology (ESPRIT), Ariana, Tunisia</p>
            <p>09/2024 - Present</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold border-b-2 border-foreground/20 pb-2">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Languages", items: "Python, Java, C#, JavaScript, TypeScript, PHP" },
            { title: "Frontend", items: "React.js, Next.js, React Native, HTML/CSS, Tailwind CSS, Bootstrap" },
            { title: "Backend", items: "Express.js, Node.js, Symfony, MongoDB, MySQL, PostgreSQL" },
            { title: "Tools & Others", items: "Git, Docker, LaTeX, ESP32, MQTT, Google Auth" },
            { title: "Languages Spoken", items: "Arabe, Français, Anglais" }
          ].map((skill, idx) => (
            <div key={idx} className="border rounded-xl p-4 shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-foreground/80">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-10">
        <h2 className="text-4xl font-bold border-b-2 border-foreground/20 pb-2">Achievements</h2>

        {/* Hackathon */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Hackathon Youth Speak</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
    "/hack1.png",
    "/hack2.png",
  ].map((src, idx) => (
    <div key={idx} className="relative h-40 cursor-pointer group overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={`Project ${idx + 1}`}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
onClick={() => window.open(src, "_blank")}
      />
    </div>
  ))}
          </div>
          <p className="mt-2 text-foreground/80">Local and national winner for a mobile app (FlutterFlow)</p>
        </div>

        {/* Enactus Limitless */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Enactus Limitless Challenge</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
           {[
    "/enactus1.png",
    "/enactus2.png",
  ].map((src, idx) => (
    <div key={idx} className="relative h-40 cursor-pointer group overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={`Project ${idx + 1}`}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
onClick={() => window.open(src, "_blank")}
      />
    </div>
  ))}
          </div>
          <p className="mt-2 text-foreground/80">Community Manager & Social Media management (2021-2023)</p>
        </div>

      </div>

    </section>
  );
}
