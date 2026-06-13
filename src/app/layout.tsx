import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Ribin K P — Automation Developer | Web Developer | AI Solutions Creator",
  description:
    "I help businesses streamline workflows, automate repetitive tasks, build modern web applications, develop Telegram bots, create AI-powered content, and design professional digital assets that improve productivity and business growth.",
  keywords: [
    "Automation Developer",
    "Web Developer",
    "AI Solutions",
    "Django Developer",
    "Telegram Bot Developer",
    "Workflow Automation",
    "Business Automation",
    "Digital Solutions",
    "Muhammed Ribin K P",
  ],
  authors: [{ name: "Muhammed Ribin K P" }],
  openGraph: {
    title: "Muhammed Ribin K P — Digital Solutions Developer",
    description:
      "Building Automation Systems, Intelligent Web Applications, AI Solutions, and Digital Experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ribin K P — Digital Solutions Developer",
    description:
      "Building Automation Systems, Intelligent Web Applications, AI Solutions, and Digital Experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
