'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 检测当前语言
  const isEnglish = pathname.startsWith('/en')

  // 获取不带语言的路径
  const getPathWithoutLang = () => {
    if (isEnglish) {
      return pathname.replace(/^\/en/, '') || '/'
    }
    return pathname
  }

  // 获取相应语言的路径
  const getChinesePath = () => getPathWithoutLang()
  const getEnglishPath = () => {
    const pathWithoutLang = getPathWithoutLang()
    return `/en${pathWithoutLang === '/' ? '' : pathWithoutLang}`
  }

  // 导航链接
  const navLinks = [
    { title: isEnglish ? 'Home' : '首页', href: isEnglish ? '/en' : '/' },
    { title: isEnglish ? 'Editor' : '编辑器', href: isEnglish ? '/en/editor' : '/editor' },
    { title: isEnglish ? 'Blogs' : '博客', href: isEnglish ? '/en/blogs' : '/blogs' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href={isEnglish ? '/en' : '/'} className="flex items-center space-x-2">
            <span className="font-bold text-xl">LLM2Card</span>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* 语言切换按钮 */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild title={isEnglish ? '切换到中文' : 'Switch to English'}>
              <Link href={isEnglish ? getChinesePath() : getEnglishPath()}>
                <Globe className="h-5 w-5" />
                <span className="sr-only">
                  {isEnglish ? '切换到中文' : 'Switch to English'}
                </span>
              </Link>
            </Button>
            {/* 当前语言的标签 */}
            <span className="text-xs bg-gray-100 py-1 px-2 rounded hidden md:inline-block">
              {isEnglish ? 'EN' : '中'}
            </span>
          </div>

          {/* 移动端菜单按钮 */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isMenuOpen ? 'hidden' : 'block'}>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isMenuOpen ? 'block' : 'hidden'}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="container py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium block py-2 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
