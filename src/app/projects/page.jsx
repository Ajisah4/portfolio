"use client";

import { useState } from "react";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS to showcase my work and skills.",
    link: "https://github.com/Ajisah4",
  },
  {
    name: "Movie App",
    description: "A full-stack movie application with movies, reviews, watchlists, and user accounts.",
    link: "https://github.com/Ajisah4",
  },
  {
    name: "Parking App",
    description: "A mobile parking application with reservations, QR codes, and license plate management.",
    link: "https://github.com/Ajisah4",
  },
  {
    name: "AI Learning Project",
    description: "A machine learning project focused on exploring artificial intelligence concepts and tools.",
    link: "https://github.com/Ajisah4",
  },
  {
    name: "Travel Blog",
    description: "A responsive website built to practice viewport settings and mobile-first design.",
    link: "https://github.com/Ajisah4",
  },
  {
    name: "Tech Blog",
    description: "A Flexbox-based project demonstrating responsive layouts and navigation.",
    link: "https://github.com/Ajisah4",
  },
];

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  const pageClass = darkMode ? "min-h-screen bg-zinc-950 text-white" : "min-h-screen bg-white text-zinc-900";

  const navClass = darkMode ? "border-zinc-700 bg-zinc-900 text-zinc-300" : "border-zinc-200 bg-white text-zinc-700";

  const textClass = darkMode ? "text-zinc-400" : "text-zinc-600";
  const borderClass = darkMode ? "border-zinc-800" : "border-zinc-200";

  return (
    <main className={pageClass}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <nav className={`flex gap-8 rounded-full border px-6 py-3 text-sm font-medium shadow-sm ${navClass}`}>
          <a href="/" className="hover:text-teal-500">
            Home
          </a>
          <a href="/about" className="hover:text-teal-500">
            About
          </a>
          <a href="/projects" className="text-teal-500">
            Projects
          </a>
          <a href="/uses" className="hover:text-teal-500">
            Uses
          </a>
        </nav>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`rounded-full border p-3 shadow-sm ${
            darkMode ? "border-zinc-700 bg-zinc-900" : "border-zinc-200 bg-white"
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Things I&apos;ve made trying to put my dent in the universe.
          </h1>

          <p className={`mt-8 text-sm leading-7 ${textClass}`}>
            I enjoy building projects that help me grow as a software engineer. These projects include web applications,
            responsive layouts, and software experiments that improve my skills and problem-solving abilities.
          </p>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="group">
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full border ${borderClass}`}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">
                  A
                </div>
              </div>

              <h2 className="text-sm font-semibold">{project.name}</h2>

              <p className={`mt-3 text-sm leading-6 ${textClass}`}>{project.description}</p>

              <a
                href={project.link}
                className={`mt-4 flex items-center gap-2 text-sm ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                } hover:text-teal-500`}
              >
                🔗 {project.link}
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer
        className={`mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t px-6 py-10 text-sm ${borderClass} ${textClass} sm:flex-row`}
      >
        <nav className="flex gap-6">
          <a href="/" className="hover:text-teal-500">
            Home
          </a>
          <a href="/about" className="hover:text-teal-500">
            About
          </a>
          <a href="/projects" className="hover:text-teal-500">
            Projects
          </a>
          <a href="/uses" className="hover:text-teal-500">
            Uses
          </a>
        </nav>

        <p>© 2026 Ajith Ramachandran. All rights reserved.</p>
      </footer>
    </main>
  );
}
