"use client";

import { useState } from "react";

const sections = [
  {
    title: "Workstation",
    items: [
      ["Alienware m15 R6", "My primary laptop for software development, assignments, and personal projects."],
      ["External Monitor", "Provides additional screen space for coding, debugging, and multitasking."],
      ["Mechanical Keyboard", "Comfortable for long programming sessions and daily productivity."],
      ["Wireless Mouse", "Simple and reliable for navigation and development work."],
    ],
  },
  {
    title: "Development tools",
    items: [
      ["Visual Studio Code", "My preferred editor for JavaScript, React, Next.js, and software engineering projects."],
      ["GitHub", "Used for version control, collaboration, and assignment submissions."],
      ["Chrome DevTools", "Helpful for responsive design testing and debugging web applications."],
    ],
  },
  {
    title: "Design",
    items: [
      ["Figma", "Used for reviewing layouts and implementing user interface designs."],
      ["Tailwind CSS", "A utility-first framework that helps build responsive interfaces quickly."],
    ],
  },
  {
    title: "Productivity",
    items: [
      ["Notion", "Keeps notes, assignments, and project planning organized."],
      ["Google Calendar", "Helps manage deadlines, classes, work schedules, and meetings."],
      ["ChatGPT", "Assists with learning, debugging, research, and writing."],
    ],
  },
];

export default function Uses() {
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
          <a href="/projects" className="hover:text-teal-500">
            Projects
          </a>
          <a href="/uses" className="text-teal-500">
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
            Software I use, gadgets I love, and other things I recommend.
          </h1>

          <p className={`mt-8 text-sm leading-7 ${textClass}`}>
            Here are some of the tools, devices, applications, and resources I regularly use for software development,
            productivity, learning, and everyday work.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {sections.map((section) => (
            <section key={section.title} className={`grid gap-8 border-l pl-6 sm:grid-cols-4 ${borderClass}`}>
              <h2 className="text-sm font-semibold">{section.title}</h2>

              <div className="space-y-10 sm:col-span-3">
                {section.items.map(([name, description]) => (
                  <div key={name}>
                    <h3 className="text-sm font-semibold">{name}</h3>

                    <p className={`mt-3 text-sm leading-6 ${textClass}`}>{description}</p>
                  </div>
                ))}
              </div>
            </section>
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
