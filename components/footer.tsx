import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return <footer className="border-t border-black/10 py-8 dark:border-white/10"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-slate-500 sm:flex-row sm:px-6 sm:text-left dark:text-slate-400"><p>© 2026 {profile.name}. All rights reserved.</p><div className="flex items-center gap-4"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-sky-600 dark:hover:text-sky-400"><Linkedin size={16} aria-hidden="true" /></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-slate-950 dark:hover:text-white"><Github size={16} aria-hidden="true" /></a><a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-sky-600 dark:hover:text-sky-400"><Mail size={16} aria-hidden="true" /></a></div></div></footer>;
}
