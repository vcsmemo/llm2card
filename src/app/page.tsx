'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [noJs, setNoJs] = useState(true)

  // 检测是否有JS支持
  useEffect(() => {
    setNoJs(false)
    document.body.classList.remove('no-js')
  }, [])

  return (
    <>
      {/* 为静态渲染添加初始CSS类 */}
      <script dangerouslySetInnerHTML={{
        __html: `document.body.classList.add('no-js');`
      }} />

      <div className="container mx-auto px-4 py-8">
        <header className="border-b px-4 py-4 mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 4h18"></path>
              <path d="M7 8h10"></path>
              <path d="M3 12h18"></path>
              <path d="M3 16h18"></path>
              <path d="M4 20h16"></path>
            </svg>
            LLM2Card
          </Link>
          <div className="language-selector">
            <Link href="/en" className="text-sm px-3 py-1 rounded-full hover:bg-gray-100">
              <span className="hidden md:inline">English</span>
              <span className="md:hidden">EN</span>
            </Link>
            <Link href="/" className="text-sm px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
              <span className="hidden md:inline">中文</span>
              <span className="md:hidden">中</span>
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="py-12 md:py-16 text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">LLM2Card</h1>
            <p className="text-xl text-gray-600 mb-8">LLM转知识卡片工具</p>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              将你的LLM生成内容转换为精美的知识卡片，让内容更有吸引力。
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/editor" className="llm2card-button llm2card-button-primary px-5 py-2.5 text-base">
                立即开始使用
              </Link>
              <a href="#features" className="llm2card-button llm2card-button-outline px-5 py-2.5 text-base">
                核心功能
              </a>
            </div>
          </section>

          <section id="features" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-10 text-center">核心功能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path>
                    <path d="M9 9h1"></path>
                    <path d="M9 13h6"></path>
                    <path d="M9 17h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">一键转换</h3>
                <p className="text-gray-600">将LLM生成的Markdown内容快速转换为精美知识卡片，无需繁琐设计。</p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">多种主题</h3>
                <p className="text-gray-600">提供15+精美主题，满足不同平台和内容风格的需求。</p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="2" x2="9" y2="4"></line>
                    <line x1="15" y1="2" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="22"></line>
                    <line x1="15" y1="20" x2="15" y2="22"></line>
                    <line x1="20" y1="9" x2="22" y2="9"></line>
                    <line x1="20" y1="14" x2="22" y2="14"></line>
                    <line x1="2" y1="9" x2="4" y2="9"></line>
                    <line x1="2" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">自动拆分</h3>
                <p className="text-gray-600">长文自动分割成多张卡片，一键导出所有卡片，方便在多个平台分享。</p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M12 3v12"></path>
                    <path d="m8 11 4 4 4-4"></path>
                    <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">一键导出</h3>
                <p className="text-gray-600">支持导出为PNG或SVG格式图片，无水印，随时分享到社交媒体。</p>
              </div>
            </div>
          </section>

          <section id="howItWorks" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-10 text-center">如何使用</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 md:mt-2">
                  <span className="text-xl font-bold text-indigo-600">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">输入 Markdown 内容</h3>
                  <p className="text-gray-600 mb-4">在编辑器中直接输入或粘贴LLM生成的Markdown文本，支持标题、列表、图片等格式。</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 md:mt-2">
                  <span className="text-xl font-bold text-indigo-600">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">选择主题样式</h3>
                  <p className="text-gray-600 mb-4">从多种精美主题中选择一款，调整样式和颜色，打造个性化卡片。</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 md:mt-2">
                  <span className="text-xl font-bold text-indigo-600">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">一键导出使用</h3>
                  <p className="text-gray-600 mb-4">预览效果后，一键导出为PNG或SVG格式图片，直接分享到社交媒体平台。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-6 text-center">关于 LLM2Card</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              LLM2Card 是一款专为内容创作者设计的工具，可以将大语言模型（LLM）生成的Markdown格式内容转换为精美的知识卡片，让您的内容更加生动有吸引力。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-2xl font-bold text-indigo-600">15+</p>
                <p className="text-gray-600">精美主题</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-indigo-600">100%</p>
                <p className="text-gray-600">免费使用</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-indigo-600">0</p>
                <p className="text-gray-600">使用限制</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-indigo-600">0</p>
                <p className="text-gray-600">水印</p>
              </div>
            </div>
          </section>

          <section id="faq" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-10 text-center">常见问题</h2>
            <div className="space-y-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">LLM2Card 是免费的吗?</h3>
                <p className="text-gray-600">是的，LLM2Card 是完全免费的工具，没有任何隐藏费用。你可以无限制地使用所有功能，包括多种主题和无水印导出。</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">我可以自定义卡片的样式吗?</h3>
                <p className="text-gray-600">可以，LLM2Card 提供了多种自定义选项，包括卡片尺寸、字体大小、颜色、间距等，让你对生成的卡片风格有更多控制权。</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">如何处理长文本?</h3>
                <p className="text-gray-600">LLM2Card 支持长文本自动分段功能，系统会智能地将内容分为多张卡片，你可以一键导出所有卡片或单张导出。</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">导出的图片有水印吗?</h3>
                <p className="text-gray-600">没有，LLM2Card 导出的图片完全没有水印和版权限制，你可以直接用于任何内容发布，不会有任何版权问题。</p>
              </div>
            </div>
          </section>

          <section id="language" className="py-12 border-t text-center">
            <h2 className="text-3xl font-bold mb-6">选择语言 / Language</h2>
            <div className="flex justify-center gap-4">
              <Link href="/zh" className="px-6 py-3 border rounded-lg hover:bg-gray-50">
                中文版
              </Link>
              <Link href="/en" className="px-6 py-3 border rounded-lg hover:bg-gray-50">
                English
              </Link>
            </div>
          </section>

          <section className="py-12 border-t text-center">
            <h2 className="text-3xl font-bold mb-6">立即开始使用 LLM2Card</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              将你的LLM生成内容转换为精美的知识卡片，让你的分享更专业、更吸引力!
            </p>
            <Link href="/editor" className="llm2card-button llm2card-button-primary px-8 py-3 text-lg">
              免费使用
            </Link>
          </section>
        </main>

        <footer className="py-8 border-t mt-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
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
    </>
  )
}
