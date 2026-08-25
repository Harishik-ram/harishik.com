import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harishik.com"),
  title: "Pentapalli Harishik · Software Engineer",
  description:
    "Software engineer in Bengaluru. I build and ship complete products — healthcare platforms at Anvera Health, and dunnflow, a live payment-recovery SaaS on Stripe.",
  openGraph: {
    title: "Pentapalli Harishik · Software Engineer",
    description:
      "I build and ship complete products — from data model to deployment.",
    url: "https://harishik.com",
    siteName: "Pentapalli Harishik",
    type: "website",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-300">
        {children}
      </body>
    </html>
  );
}
