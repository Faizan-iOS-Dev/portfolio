import AIDevelopment from "@/components/ai-development";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return <main className="px-4 sm:px-6"><Intro /><Skills /><Projects /><Experience /><Education /><AIDevelopment /></main>;
}
