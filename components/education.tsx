"use client";

import { education } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.5);
  return <section ref={ref} id="education" className="scroll-mt-32 pb-20 sm:pb-24"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Academic background">Education</SectionHeading><div className="border-y border-black/10 py-6 dark:border-white/10 sm:flex sm:items-start sm:justify-between sm:gap-6"><div><h3 className="text-lg font-semibold text-slate-950 dark:text-white">{education.degree}</h3><p className="mt-2 text-slate-600 dark:text-slate-300">{education.school}</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{education.location}</p></div><p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400 sm:mt-1">{education.years}</p></div></div></section>;
}
