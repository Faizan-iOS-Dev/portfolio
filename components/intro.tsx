"use client";

import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const solving = ["Secure banking and fintech experiences.", "Scalable iOS application architecture.", "Complex API integrations and payment workflows.", "Performance optimization and memory management."];
const exploring = ["AI-assisted software development.", "AI Agents and Local LLMs.", "Prompt Engineering.", "Modern AI-powered development workflows."];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section ref={ref} id="home" className="scroll-mt-32 pb-20 pt-10 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
        <div className="flex justify-center lg:justify-start lg:pt-1"><div className="relative"><Image src="/portfolio/profile.jpg" alt="Shaikh Faizan in a red blazer" width={220} height={220} priority className="h-44 w-44 rounded-full object-cover ring-8 ring-white/70 shadow-2xl shadow-slate-300/30 dark:ring-slate-950/60 dark:shadow-black/30 sm:h-52 sm:w-52" /><span className="absolute -bottom-2 -right-1 text-3xl" role="img" aria-label="Waving hand">👋</span></div></div>
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">Native iOS development</p>
          <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">Hello, I&apos;m <span className="font-semibold">Faizan</span>. An experienced <span className="font-semibold">iOS Developer</span> with {profile.experience} of experience in designing, developing and delivering high-quality native iOS applications.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">I build secure, scalable and user-friendly iOS applications using Swift, UIKit and SwiftUI. I have contributed to 9+ applications across banking, fintech, e-commerce and SaaS domains, including enterprise banking solutions and digital payment applications. My experience includes building applications from scratch, integrating REST APIs, implementing scalable architectures, improving application performance and resolving complex development challenges. I enjoy writing clean, maintainable code and building mobile experiences that provide real value to users.</p>
          <div className="mt-8 grid gap-8 border-y border-black/10 py-6 text-sm dark:border-white/10 sm:grid-cols-2"><ListBlock title="I enjoy solving:" items={solving} /><ListBlock title="Currently exploring:" items={exploring} accent="purple" /></div>
          <div className="mt-7 flex flex-wrap gap-3"><a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"><Download size={16} aria-hidden="true" /> Download Resume</a><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/20 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"><Mail size={16} aria-hidden="true" /> Get in touch</a><a href="#skills" className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">Explore portfolio <ArrowDown size={16} aria-hidden="true" /></a></div>
        </div>
      </div>
    </section>
  );
}

function ListBlock({ title, items, accent = "blue" }: { title: string; items: readonly string[]; accent?: "blue" | "purple" }) {
  return <div><h2 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">{title}</h2><ul className="space-y-2 text-slate-600 dark:text-slate-300">{items.map((item) => <li key={item} className="flex gap-2"><span className={accent === "purple" ? "text-purple-500" : "text-sky-500"}>-&gt;</span><span>{item}</span></li>)}</ul></div>;
}
