import React from "react";

export default function SectionHeading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return <div className="mb-8">{eyebrow && <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">{eyebrow}</p>}<h2 className="text-center text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">{children}</h2></div>;
}
