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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://benchmark-weekly-digest.nealchen811.chatgpt.site"),
  title: "Benchmark & Dataset 精选周刊",
  description: "每周精选新发布的 Benchmark 和 Dataset，提炼值得关注的评测设计与可借鉴方法。",
  openGraph: {
    title: "Benchmark Weekly",
    description: "Curate newly released benchmarks and datasets every week.",
    type: "website",
    images: [{ url: "/og.png", width: 1456, height: 1088, alt: "Benchmark Weekly" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benchmark Weekly",
    description: "Curate newly released benchmarks and datasets every week.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
