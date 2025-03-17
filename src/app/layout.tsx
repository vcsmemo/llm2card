import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LLM2Card - 将AI生成内容转换为精美知识卡片",
  description: "一键将LLM生成的Markdown内容转换为精美的知识卡片，让您的内容更加生动有吸引力。支持多种主题和自定义选项。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b px-4 py-2 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-purple-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h18"></path>
                <path d="M7 8h10"></path>
                <path d="M3 12h18"></path>
                <path d="M3 16h18"></path>
                <path d="M4 20h16"></path>
              </svg>
              LLM2Card
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm hover:text-purple-600 transition-colors">特点</Link>
              <Link href="#howItWorks" className="text-sm hover:text-purple-600 transition-colors">如何使用</Link>
              <Link href="#about" className="text-sm hover:text-purple-600 transition-colors">关于</Link>
              <Link href="#faq" className="text-sm hover:text-purple-600 transition-colors">常见问题</Link>
              <Link href="/blogs" className="text-sm hover:text-purple-600 transition-colors">博客</Link>
            </nav>
            <div className="flex items-center gap-2">
              <button className="rounded-full p-2 hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2"></path>
                  <path d="M12 21v2"></path>
                  <path d="M4.22 4.22l1.42 1.42"></path>
                  <path d="M18.36 18.36l1.42 1.42"></path>
                  <path d="M1 12h2"></path>
                  <path d="M21 12h2"></path>
                  <path d="M4.22 19.78l1.42-1.42"></path>
                  <path d="M18.36 5.64l1.42-1.42"></path>
                </svg>
              </button>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="py-6 md:py-12 border-t">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 font-bold text-xl text-purple-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 4h18"></path>
                  <path d="M7 8h10"></path>
                  <path d="M3 12h18"></path>
                  <path d="M3 16h18"></path>
                  <path d="M4 20h16"></path>
                </svg>
                LLM2Card
              </div>
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} LLM2Card
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900">Github</a>
                <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">Twitter</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
