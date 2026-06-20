"use client";

import { useState } from "react";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  const pageClass = darkMode ? "min-h-screen bg-zinc-950 text-white" : "min-h-screen bg-white text-zinc-900";

  const navClass = darkMode ? "border-zinc-700 bg-zinc-900 text-zinc-300" : "border-zinc-200 bg-white text-zinc-700";

  const textClass = darkMode ? "text-zinc-400" : "text-zinc-600";
  const borderClass = darkMode ? "border-zinc-700" : "border-zinc-200";

  return (
    <main className={pageClass}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <nav className={`flex gap-8 rounded-full border px-6 py-3 text-sm font-medium shadow-sm ${navClass}`}>
          <a href="/" className="hover:text-teal-500">
            Home
          </a>
          <a href="/about" className="text-teal-500">
            About
          </a>
          <a href="/projects" className="hover:text-teal-500">
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

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            I am Ajith Ramachandran. I live in Salt Lake City, where I develop the future.
          </h1>

          <div className={`mt-10 space-y-7 text-sm leading-7 ${textClass}`}>
            <p>
              I am a Software Engineering student with a passion for building technology that solves real-world
              problems. I enjoy creating web applications, exploring artificial intelligence, and learning new
              technologies that improve the lives of others.
            </p>

            <p>
              Originally from India, I now live in Salt Lake City, Utah. My journey into technology began with a
              fascination for complex systems and has grown into a commitment to developing software that makes a
              positive impact.
            </p>

            <p>
              My interests include software development, cybersecurity, artificial intelligence, and emerging
              technologies. I enjoy working on projects that challenge me to learn, collaborate, and continuously
              improve my technical skills.
            </p>

            <p>
              Outside of coding, I enjoy serving in my church community, spending time with family and friends, learning
              about science and innovation, and pursuing personal growth through education and service.
            </p>
          </div>
        </div>

        <div className="lg:pl-8">
          <img src="/profile.jpg" alt="Ajith Ramachandran" className="w-full rounded-2xl object-cover shadow-lg" />

          <div className={`mt-8 space-y-5 text-sm ${textClass}`}>
            <a href="https://x.com" className="block hover:text-teal-500">
              ✕ Follow me on X
            </a>

            <a href="https://github.com/Ajisah4" className="block hover:text-teal-500">
              GitHub Follow me on GitHub
            </a>

            <a href="https://www.linkedin.com" className="block hover:text-teal-500">
              LinkedIn Follow me on LinkedIn
            </a>

            <div className={`w-40 border-b pt-4 ${borderClass}`}></div>

            <a href="mailto:ajr384@ensign.edu" className="block hover:text-teal-500">
              ✉ ajr384@ensign.edu
            </a>
          </div>
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
