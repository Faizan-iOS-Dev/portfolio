"use client";

import { Bot } from "lucide-react";
import { aiTools } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function AIDevelopment() {
  return <section id="ai-development" className="scroll-mt-32 pb-20 sm:pb-24"><div className="mx-auto max-w-4xl border-y border-black/10 py-8 dark:border-white/10 sm:py-10"><SectionHeading eyebrow="A continuing practice">Built with AI-Assisted Development</SectionHeading><div className="flex items-start gap-4"><div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-600 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300"><Bot size={22} aria-hidden="true" /></div><p className="text-sm leading-7 text-slate-600 dark:text-slate-300">As an iOS Developer, I actively explore AI-powered development tools and modern AI technologies to improve productivity, simplify engineering workflows and solve development challenges more efficiently. I experiment with AI coding assistants, prompt engineering, AI agents and local large language models to enhance my development workflow and continuously explore new possibilities in software engineering.</p></div><div className="mt-6 flex flex-wrap gap-2 pl-0 sm:pl-14">{aiTools.map((tool) => <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">{tool}</span>)}</div></div></section>;
}
