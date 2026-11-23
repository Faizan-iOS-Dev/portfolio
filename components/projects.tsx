"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  return <section ref={ref} id="projects" className="scroll-mt-32 pb-20 sm:pb-24"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Selected work">Company Projects</SectionHeading><Project /></div></section>;
}
