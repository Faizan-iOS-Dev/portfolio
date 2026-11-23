export const profile = {
  name: "Shaikh Faizan",
  role: "iOS Developer",
  experience: "4 years",
  email: "faizan.iosdev@gmail.com",
  phone: "+91 7775962642",
  phoneHref: "tel:+917775962642",
  linkedin: "https://www.linkedin.com/in/shaikh-faizan-415380228/",
  github: "https://github.com/Faizan-iOS-Dev",
  site: "https://Faizan-iOS-Dev.github.io/portfolio/",
  resume: "/portfolio/Faizan_iOS_Developer_CV.pdf",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "email" },
  { label: "Phone", href: profile.phoneHref, icon: "phone" },
] as const;

export const links = [
  { name: "Home", hash: "#home" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Education", hash: "#education" },
] as const;

export const skillGroups = [
  { name: "Languages & Platforms", skills: ["Swift", "Objective-C", "iOS"] },
  { name: "Frameworks & Concurrency", skills: ["UIKit", "SwiftUI", "Combine", "Core Data", "SwiftData", "Swift Concurrency", "Async/Await", "GCD"] },
  { name: "Architecture & Patterns", skills: ["MVC", "MVVM", "Clean Architecture", "VIPER", "Repository Pattern"] },
  { name: "APIs, Networking & Storage", skills: ["REST APIs", "Firebase", "Core Data", "SwiftData"] },
  { name: "iOS Development & Capabilities", skills: ["Auto Layout", "Core Animation", "Push Notifications", "Unit Testing", "SDK Development", "Performance Optimization", "Memory Management"] },
  { name: "Tools, Testing & DevOps", skills: ["Xcode", "Git", "CocoaPods", "Swift Package Manager", "CI/CD", "App Store Connect", "TestFlight", "Firebase Crashlytics", "Analytics", "Jira", "Slack"] },
  { name: "AI & Modern Development", skills: ["Cursor", "Antigravity", "Codex", "Claude Code", "Ollama", "Prompt Engineering", "AI Agents", "AI-Assisted Development"] },
] as const;

type PublicLink = { label: string; url: string; kind: "appstore" | "github" };

export type CompanyProject = {
  title: string;
  company: string;
  years: string;
  industry: string;
  publicLink?: PublicLink;
};

export const companyProjects: readonly CompanyProject[] = [
  { title: "Canara Aarohan", company: "NeoSoft", years: "2025 - Present", industry: "Banking / Enterprise HR" },
  { title: "IOB Lakshya", company: "NeoSoft", years: "2025 - Present", industry: "Banking / HR Management", publicLink: { label: "App Store", kind: "appstore", url: "https://apps.apple.com/in/app/iob-lakshya/id6575362653" } },
  { title: "YES Pay Biz", company: "Sodel Solution Pvt. Ltd.", years: "2023 - 2025", industry: "B2B Fintech / Digital Payments", publicLink: { label: "App Store", kind: "appstore", url: "https://apps.apple.com/in/app/yes-pay-biz/id6504474039" } },
  { title: "YES Pay Next", company: "Sodel Solution Pvt. Ltd.", years: "2023 - 2025", industry: "Fintech / UPI Payments", publicLink: { label: "App Store", kind: "appstore", url: "https://apps.apple.com/in/app/yes-pay-next/id6449251562" } },
  { title: "YES Pay Lite", company: "Sodel Solution Pvt. Ltd.", years: "2023 - 2025", industry: "Fintech / Digital Payments" },
  { title: "CollectNotes", company: "BridgeLabz Solutions LLP", years: "2022 - 2023", industry: "Productivity / Notes", publicLink: { label: "GitHub", kind: "github", url: "https://github.com/Faizan-iOS-Dev/collectNotes" } },
  { title: "Sanatan App", company: "BridgeLabz Solutions LLP", years: "2022 - 2023", industry: "Social / Lifestyle" },
  { title: "Unit Converter", company: "BridgeLabz Solutions LLP", years: "2022 - 2023", industry: "Utility Application", publicLink: { label: "GitHub", kind: "github", url: "https://github.com/Faizan-iOS-Dev/unitConverterUpdated" } },
  { title: "TodoList", company: "BridgeLabz Solutions LLP", years: "2022 - 2023", industry: "Productivity / Task Management", publicLink: { label: "GitHub", kind: "github", url: "https://github.com/Faizan-iOS-Dev/TodoLists" } },
];

export type Experience = {
  title: string;
  company: string;
  date: string;
  projects: readonly { name: string; summary: string; bullets?: readonly string[] }[];
  technologies: readonly string[];
};

export const experiencesData: readonly Experience[] = [
  {
    title: "Software Engineer - iOS",
    company: "NeoSoft",
    date: "May 2025 - Present",
    projects: [
      { name: "Canara Aarohan", summary: "Built an enterprise iOS HR and performance management application from the ground up.", bullets: ["Implemented secure OTP authentication.", "Developed advanced performance analytics dashboards with complex chart visualizations.", "Implemented dynamic progress tracking.", "Developed multi-tab navigation and application screens."] },
      { name: "IOB Lakshya", summary: "Contributed to an enterprise HR management application.", bullets: ["Implemented secure deep-link login to simplify employee authentication.", "Developed HR features including tracking, surveys, feedback and community modules.", "Addressed VAPT security findings through stronger encryption.", "Improved application stability by resolving bugs and crashes."] },
    ],
    technologies: ["Swift", "UIKit", "SwiftUI", "REST APIs", "MVVM", "Clean Architecture", "Xcode", "Git"],
  },
  {
    title: "Software Engineer - iOS",
    company: "Sodel Solution Pvt. Ltd.",
    date: "October 2023 - April 2025",
    projects: [
      { name: "YES Pay Biz", summary: "Engineered a B2B fintech application from scratch to support merchant onboarding and digital payment settlements.", bullets: ["Implemented secure device binding.", "Integrated multi-language support.", "Developed core banking modules.", "Supported merchant onboarding and digital payment settlement workflows."] },
      { name: "YES Pay Next", summary: "Contributed to a UPI payments application serving 1M+ users and maintaining a 4.6-star App Store rating, as stated in my resume.", bullets: ["Implemented UPI ID and QR code-based payments.", "Worked on credit card payment functionality.", "Developed money transfers, mobile recharges and bill payment features.", "Resolved bugs, crashes and memory issues using Crashlytics and Xcode debugging tools.", "Migrated REST API integrations to Swift async/await.", "Improved application performance and payment functionality.", "Implemented MVVM and Clean Architecture with the Repository pattern."] },
      { name: "YES Pay Lite", summary: "Worked on a lightweight version of YES Pay Next, optimized for low-end devices and limited network conditions." },
    ],
    technologies: ["Swift", "UIKit", "SwiftUI", "REST APIs", "Async/Await", "MVVM", "Clean Architecture", "Repository Pattern", "Firebase Crashlytics", "Core Data", "Xcode"],
  },
  {
    title: "Software Engineer - iOS Intern",
    company: "BridgeLabz Solutions LLP",
    date: "December 2022 - July 2023",
    projects: [
      { name: "CollectNotes", summary: "Designed and developed a note-taking application similar to Google Keep.", bullets: ["Developed a responsive card-based interface.", "Implemented search functionality.", "Created list and grid views.", "Integrated Firebase for real-time synchronization and storage.", "Implemented Google and Facebook social login."] },
      { name: "Sanatan App", summary: "Developed a religious and social application.", bullets: ["Implemented Live Darshan.", "Developed post, like and share features.", "Integrated astrology and horoscope information through REST APIs.", "Developed responsive UI screens using Swift and UIKit."] },
      { name: "Unit Converter", summary: "Developed a unit conversion application using Swift and UIKit to support conversions across multiple measurement units." },
      { name: "TodoList", summary: "Built a task management application with task prioritization, reminders and Core Data local storage." },
    ],
    technologies: ["Swift", "UIKit", "Objective-C", "Firebase", "Core Data", "REST APIs", "Xcode", "Git"],
  },
];

export const education = {
  degree: "Bachelor of Engineering (Computer Science & Engineering)",
  school: "PES Institute of Technology",
  location: "Aurangabad, Maharashtra, India",
  years: "2016 - 2020",
} as const;

export const aiTools = ["Cursor", "Antigravity", "Codex", "Claude Code", "Ollama", "Prompt Engineering", "AI-Assisted Development", "AI Agents"] as const;
