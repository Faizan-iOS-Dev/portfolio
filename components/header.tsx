"use client";

import Link from "next/link";
import { Download, Github, Linkedin, Mail, Moon, Phone, Sun } from "lucide-react";
import { links, profile, socialLinks } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  if (icon === "linkedin") return <Linkedin aria-hidden="true" />;
  if (icon === "github") return <Github aria-hidden="true" />;
  if (icon === "phone") return <Phone aria-hidden="true" />;
  return <Mail aria-hidden="true" />;
}

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <nav className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="#home" className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">{profile.name}</Link>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href={profile.resume} download className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"><Download size={14} aria-hidden="true" /><span className="hidden sm:inline">Download Resume</span><span className="sm:hidden">Resume</span></a>
            {socialLinks.slice(0, 3).map((social) => <a key={social.label} href={social.href} target={social.label === "Email" ? undefined : "_blank"} rel={social.label === "Email" ? undefined : "noopener noreferrer"} aria-label={social.label} className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"><SocialIcon icon={social.icon} /></a>)}
            <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white">{theme === "light" ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}</button>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-black/5 pt-2 text-xs dark:border-white/10">
          {links.map((link) => <Link key={link.hash} href={link.hash} onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); }} className={`py-1 font-medium transition ${activeSection === link.name ? "text-sky-600 dark:text-sky-400" : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"}`}>{link.name}</Link>)}
        </div>
      </nav>
    </header>
  );
}
