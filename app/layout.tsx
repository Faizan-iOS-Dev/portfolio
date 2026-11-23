import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";

export const metadata = {
  title: "Shaikh Faizan | iOS Developer",
  description: "Shaikh Faizan is an iOS Developer specializing in native iOS development, banking applications, fintech solutions, digital payments and enterprise mobile applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="!scroll-smooth" suppressHydrationWarning><body className="bg-[#fbfcfe] text-slate-950 dark:bg-slate-950 dark:text-slate-50"><ThemeContextProvider><ActiveSectionContextProvider><Header /><div className="relative overflow-hidden pt-28 sm:pt-32"><div className="pointer-events-none absolute -left-48 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-100/60 blur-3xl dark:bg-sky-900/20" /><div className="pointer-events-none absolute -right-48 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-purple-100/60 blur-3xl dark:bg-purple-900/20" />{children}</div><Footer /></ActiveSectionContextProvider></ThemeContextProvider></body></html>;
}
