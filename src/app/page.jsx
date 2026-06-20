"use client";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const pageClass = darkMode
    ? "min-h-screen bg-gray-950 text-white"
    : "min-h-screen bg-white text-gray-900";

  const cardClass = darkMode
    ? "rounded-2xl border border-gray-700 p-6 shadow-sm"
    : "rounded-2xl border border-gray-200 p-6 shadow-sm";

  const textClass = darkMode ? "text-gray-400" : "text-gray-600";
  const smallTextClass = darkMode ? "text-gray-400" : "text-gray-500";
  const borderClass = darkMode ? "border-gray-700" : "border-gray-200";

  const articles = [
    {
      date: "June 2026",
      title: "Building my portfolio with Next.js",
      description:
        "I created this portfolio to practice Next.js, Tailwind CSS, responsive design, and clean page layouts.",
    },
    {
      date: "June 2026",
      title: "Learning software engineering",
      description:
        "My goal is to become a stronger developer by building projects, solving problems, and learning modern web technologies.",
    },
    {
      date: "June 2026",
      title: "Exploring artificial intelligence",
      description:
        "I am interested in how artificial intelligence can help people solve real-world problems and improve digital experiences.",
    },
  ];

  const workItems = [
    [
      "Ensign College",
      "Software Engineering Student",
      "2024 - Present",
      "/images/ensign.png",
    ],
    [
      "Portfolio Projects",
      "Next.js and Tailwind CSS",
      "2026",
      "/images/github.png",
    ],
    [
      "Web Development",
      "React and JavaScript Practice",
      "2026",
      "/images/react.png",
    ],
    [
      "AI Learning",
      "Machine Learning Exploration",
      "2026",
      "/images/ai.png",
    ],
  ];

  return (
    <main className={pageClass}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <nav
          className={`flex gap-8 rounded-full border px-6 py-3 text-sm font-medium shadow-sm ${
            darkMode
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <a href="/" className="text-teal-500">
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

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`rounded-full border p-3 shadow-sm ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <img
          src="/profile.jpg"
          alt="Ajith Ramachandran"
          className="mb-8 h-16 w-16 rounded-full object-cover"
        />

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Software engineering student, builder, and lifelong learner.
        </h1>

        <p className={`mt-6 max-w-3xl text-base leading-7 ${textClass}`}>
          I am Ajith Ramachandran, a Software Engineering student who enjoys
          building web applications, learning new technologies, and solving
          real-world problems through code. I am passionate about software
          development, artificial intelligence, and creating meaningful digital
          experiences.
        </p>

        <div className={`mt-6 flex gap-5 ${smallTextClass}`}>
          <a href="https://www.linkedin.com" className="hover:text-teal-500">
            LinkedIn
          </a>
          <a href="https://github.com/Ajisah4" className="hover:text-teal-500">
            GitHub
          </a>
          <a href="mailto:ajr384@ensign.edu" className="hover:text-teal-500">
            Email
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-12">
          {articles.map((article) => (
            <article
              key={article.title}
              className={`border-l pl-6 ${borderClass}`}
            >
              <p className={`text-sm ${smallTextClass}`}>{article.date}</p>

              <h2 className="mt-3 text-xl font-semibold">{article.title}</h2>

              <p className={`mt-3 max-w-2xl text-sm leading-7 ${textClass}`}>
                {article.description}
              </p>

              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-teal-500"
              >
                Read article →
              </a>
            </article>
          ))}
        </div>        <aside className="space-y-8">
          <div className={cardClass}>
            <h3 className="text-lg font-semibold">Stay up to date</h3>

            <p className={`mt-3 text-sm leading-6 ${textClass}`}>
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>

            <div className="mt-5 flex gap-3">
              <input
                type="email"
                placeholder="Email address"
                className={`w-full rounded-md border px-3 py-2 text-sm outline-none ${
                  darkMode
                    ? "border-gray-700 bg-gray-900 text-white"
                    : "border-gray-300 bg-white text-gray-900"
                }`}
              />

              <button
                className={`rounded-md px-4 py-2 text-sm font-semibold ${
                  darkMode
                    ? "bg-white text-gray-900"
                    : "bg-gray-900 text-white"
                }`}
              >
                Join
              </button>
            </div>
          </div>

          <div className={cardClass}>
            <h3 className="text-lg font-semibold">Work</h3>

            <div className="mt-6 space-y-5">
              {workItems.map(([company, role, year, image]) => (
                <div key={company} className="flex items-center gap-4">
                  <img
                    src={image}
                    alt={company}
                    className={`h-10 w-10 rounded-full border object-cover ${
                      darkMode ? "border-gray-700" : "border-gray-300"
                    }`}
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium">{company}</p>
                    <p className={`text-xs ${smallTextClass}`}>{role}</p>
                  </div>

                  <p className={`text-xs ${smallTextClass}`}>{year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={cardClass}>
            <h3 className="text-lg font-semibold">Skills</h3>

            <p className={`mt-3 text-sm leading-6 ${textClass}`}>
              Skills I am developing through class projects, coding challenges,
              and personal learning.
            </p>

            <div className="mt-6 space-y-4">
              {[
                ["HTML", "90%"],
                ["CSS", "80%"],
                ["JavaScript", "70%"],
              ].map(([skill, width]) => (
                <div key={skill}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{skill}</span>
                    <span>{width}</span>
                  </div>

                  <div
                    className={`h-2 rounded-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className="h-2 rounded-full bg-teal-500"
                      style={{ width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <footer
        className={`mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t px-6 py-10 text-sm sm:flex-row ${borderClass} ${smallTextClass}`}
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

