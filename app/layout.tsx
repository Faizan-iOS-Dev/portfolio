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
  return <html lang="en" className="!scroll-smooth" suppressHydrationWarning><body className="bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50"><ThemeContextProvider><ActiveSectionContextProvider><Header /><div className="relative isolate overflow-hidden pt-24 md:pt-20"><div className="pointer-events-none absolute right-[8rem] top-[-8rem] z-0 h-[30rem] w-[30rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263]/50 sm:w-[42rem]" /><div className="pointer-events-none absolute left-[-14rem] top-[2rem] z-0 h-[30rem] w-[30rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394]/45 sm:left-[-10rem] sm:w-[42rem]" /><div className="relative z-10">{children}</div></div><Footer /></ActiveSectionContextProvider></ThemeContextProvider></body></html>;
}
