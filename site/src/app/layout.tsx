import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import { SiteHeader } from "@/components/site-header";
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
  title: "MultiWebLLM - 统一管理你的 AI 订阅",
  description:
    "将 ChatGPT、Claude、Gemini、Grok、DeepSeek、Kimi 等网页订阅转为 OpenAI 兼容 API，支持多密钥分发、用量统计、配额管理",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <RootProvider>
          <main className="flex-1">{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}
