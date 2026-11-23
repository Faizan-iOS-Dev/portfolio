"use client";

import { skillGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.35);
  return <section ref={ref} id="skills" className="scroll-mt-32 pb-20 sm:pb-24"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="What I work with">Technical Skills</SectionHeading><div className="grid gap-4 md:grid-cols-2">{skillGroups.map((group) => <div key={group.name} className="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.04]"><h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.name}</h3><div className="mt-4 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">{skill}</span>)}</div></div>)}</div></div></section>;
}
