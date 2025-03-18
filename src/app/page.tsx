'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { injectFallbackStyles } from '@/lib/fallback-styles'

// 添加类型声明
declare global {
  interface Document {
    body: HTMLElement & {
      classList: DOMTokenList;
    }
  }
}

// 添加 JSX 类型声明
declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      svg: React.SVGProps<SVGSVGElement>;
      path: React.SVGProps<SVGPathElement>;
      rect: React.SVGProps<SVGRectElement>;
      circle: React.SVGProps<SVGCircleElement>;
    }
  }
}

export default function Home() {
  // 检测是否有 JS 支持
  useEffect(() => {
    try {
      injectFallbackStyles();
      document.body.classList.add('js-loaded');
      document.body.classList.remove('no-js');
    } catch (error) {
      console.error('Failed to inject fallback styles:', error);
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-100">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">LLM2Card</h1>
          <p className="text-xl md:text-2xl text-purple-600 mb-8">
            <span className="text-purple-600">LLM</span>
            <span className="text-gray-700">转知识卡片工具</span>
          </p>
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <div className="relative p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full mb-2">Markdown</span>
                <p className="text-sm text-gray-600 mb-2">将你的 LLM 生成内容转换为精美的知识卡片...</p>
              </div>
            </div>
          </div>

          <Link href="/editor">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              开始使用
            </Button>
          </Link>

          <div className="flex justify-center gap-2 mt-6">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">100% 免费</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">不限制导出</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">多种主题</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">无水印</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-4 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4 bg-purple-50 rounded-lg w-full h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 mb-2">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                  <span className="text-sm text-purple-700 font-medium">一键内容转换示例</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">一键转换</h3>
              <p className="text-sm text-gray-600">
                将 LLM 生成的 Markdown 内容快速转换为精美的知识卡片，让内容更有吸引力。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-4 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4 bg-blue-50 rounded-lg w-full h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-2">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                  <span className="text-sm text-blue-700 font-medium">多种主题示例</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">多种主题</h3>
              <p className="text-sm text-gray-600">
                提供 15+ 种精美主题，满足不同平台和内容风格的需求。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-4 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4 bg-green-50 rounded-lg w-full h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mb-2">
                    <rect width="7" height="9" x="3" y="3" rx="1" />
                    <rect width="7" height="5" x="14" y="3" rx="1" />
                    <rect width="7" height="9" x="14" y="12" rx="1" />
                    <rect width="7" height="5" x="3" y="16" rx="1" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">自动拆分示例</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">自动拆分</h3>
              <p className="text-sm text-gray-600">
                长文自动拆分成多张卡片，一键导出图片集，方便发布到各个平台。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-4 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4 bg-amber-50 rounded-lg w-full h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mb-2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <span className="text-sm text-amber-700 font-medium">自定义样式示例</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">自定义样式</h3>
              <p className="text-sm text-gray-600">
                调整卡片尺寸、字体大小、颜色等，打造专属于你的知识卡片风格。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howItWorks" className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">如何使用</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">输入 Markdown 内容</h3>
              <p className="text-sm text-gray-600">
                在编辑器中直接输入或粘贴 LLM 生成的 Markdown 文本，支持标题、列表、图片等格式。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">选择主题样式</h3>
              <p className="text-sm text-gray-600">
                从多种精美主题中选择一款，调整样式和布局，打造个性化卡片。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">一键导出使用</h3>
              <p className="text-sm text-gray-600">
                预览效果满意后，一键导出为 PNG 或 SVG 格式图片，直接分享到社交媒体平台。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">关于 LLM2Card</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              LLM2Card 是一款专为内容创作者设计的工具，可以将大语言模型（LLM）生成的 Markdown 格式内容快速转换为精美的知识卡片。
              无论是发布到小红书、公众号、知乎还是其他社交平台，LLM2Card 都能帮助你打造专业、美观的内容排版。
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">精美主题</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">免费使用</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-sm text-gray-600">水印</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">LLM2Card 是免费的吗？</h3>
              <p className="text-gray-600">
                是的，LLM2Card 是完全免费的工具，没有任何隐藏费用。你可以无限制地使用所有功能，包括多种主题和无水印导出。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">我可以自定义卡片的样式吗？</h3>
              <p className="text-gray-600">
                可以。LLM2Card 提供了多种自定义选项，包括调整卡片尺寸、字体大小、颜色、间距等，让你打造专属于自己的卡片风格。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">如何处理长文本？</h3>
              <p className="text-gray-600">
                LLM2Card 支持长文本自动拆分功能，系统会智能地将内容分成多张卡片，你可以一键导出所有卡片或选择单独导出。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">导出的图片有水印吗？</h3>
              <p className="text-gray-600">
                没有。LLM2Card 导出的所有图片都是无水印的，你可以直接用于任何平台的内容发布，不会有任何品牌标识。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Switcher Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-medium mb-4">选择语言 / Language</h3>
          <div className="flex justify-center gap-4">
            <Link href="/zh" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              中文
            </Link>
            <Link href="/en" className="px-4 py-2 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-colors">
              English
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">立即开始使用 LLM2Card</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            将你的 LLM 生成内容转换为精美的知识卡片，让你的分享更专业、更有吸引力！
          </p>
          <Link href="/editor">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              免费使用
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
