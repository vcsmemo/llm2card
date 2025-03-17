import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">博客列表</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 示例博客文章 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>
              <Link href="/blogs/1" className="hover:text-purple-600 transition-colors">
                如何使用 LLM2Card 让你的社媒内容更加专业
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              在这篇文章中，我们将探讨如何利用 LLM2Card 工具将大语言模型生成的内容转换为精美的知识卡片，提升你的社交媒体内容质量。
            </p>
            <div className="text-sm text-gray-500">2025-03-15</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>
              <Link href="/blogs/2" className="hover:text-purple-600 transition-colors">
                从 LLM 到精美卡片：内容创作者的效率工具
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              大语言模型(LLM)已经成为内容创作的重要工具，但如何让生成的内容更加视觉化？LLM2Card提供了完美的解决方案。
            </p>
            <div className="text-sm text-gray-500">2025-03-10</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>
              <Link href="/blogs/3" className="hover:text-purple-600 transition-colors">
                15+主题风格：为不同平台打造最适合的知识卡片
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              每个社交媒体平台都有其独特的内容风格，了解如何使用LLM2Card的多种主题风格，为不同平台创建最适合的知识卡片。
            </p>
            <div className="text-sm text-gray-500">2025-03-05</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>
              <Link href="/blogs/4" className="hover:text-purple-600 transition-colors">
                LLM2Card进阶技巧：自定义样式与批量导出
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              探索LLM2Card的高级功能，包括自定义样式、长文自动拆分、批量导出等，让你的内容创作更加高效。
            </p>
            <div className="text-sm text-gray-500">2025-03-01</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
