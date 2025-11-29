"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background text-foreground">
      {/* Subtle animated background blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-500 blur-3xl"
          initial={{ scale: 0.9, rotate: 0 }}
          animate={{ scale: 1.05, rotate: 20 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>

      {/* Top nav */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="Autos"
            width={80}
            height={16}
            priority
            className="dark:invert"
          />
          <span className="hidden text-sm text-zinc-500 sm:inline">Autos</span>
        </div>
        <nav className="flex items-center gap-3">
          <a
            href="#features"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Features
          </a>
          <a
            href="#templates"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Templates
          </a>
          <a
            href="#docs"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            Docs
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-6 py-12 sm:items-start">
        <motion.h1
          className="max-w-3xl text-balance text-center text-5xl font-semibold tracking-tight sm:text-left sm:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Autos — build visual automation workflows like n8n & Zapier.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400 sm:text-left"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          Design flows with a drag‑and‑drop builder, connect to dozens of apps,
          and automate tasks with triggers, schedules, and retries.
        </motion.p>

        {/* CTA buttons (shadcn-like styles) */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <motion.a
            href="#get-started"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Automating
          </motion.a>
          <motion.a
            href="#templates"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-transparent px-5 text-sm font-medium text-foreground transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-border dark:hover:bg-zinc-800"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Templates
          </motion.a>
        </div>

        {/* Simple features grid */}
        <section
          id="features"
          className="mt-16 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            {
              title: "Visual builder",
              desc: "Drag‑and‑drop nodes to design flows fast.",
              icon: "/globe.svg",
            },
            {
              title: "Integrations",
              desc: "Connect to popular apps and custom webhooks.",
              icon: "/next.svg",
            },
            {
              title: "Reliable runs",
              desc: "Triggers, schedules, retries, and robust logging.",
              icon: "/vercel.svg",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 * i }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={f.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="dark:invert"
                />
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
