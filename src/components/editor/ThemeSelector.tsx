'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { getAvailableThemes } from '@/lib/themes'

interface ThemeSelectorProps {
  selectedTheme: string
  onSelectTheme: (theme: string) => void
}

export function ThemeSelector({ selectedTheme, onSelectTheme }: ThemeSelectorProps) {
  const themes = getAvailableThemes()
  const [activeCategory, setActiveCategory] = useState('all')

  // 按类别过滤主题
  const filteredThemes = activeCategory === 'all'
    ? themes
    : themes.filter(theme => theme.category === activeCategory)

  // 获取所有类别
  const categories = ['all', ...Array.from(new Set(themes.map(theme => theme.category)))]

  return (
    <div className="theme-selector">
      <label className="text-sm font-medium block mb-2">
        主题风格
      </label>

      {/* 主题类别选择 */}
      <div className="theme-categories flex flex-wrap gap-2 mb-3">
        {categories.map(category => (
          <button
            key={category}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'all' ? '全部' : category}
          </button>
        ))}
      </div>

      {/* 主题列表 */}
      <div className="theme-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredThemes.map(theme => (
          <Card
            key={theme.id}
            className={`cursor-pointer overflow-hidden p-1 transition-all ${
              selectedTheme === theme.id
                ? 'ring-2 ring-purple-600'
                : 'hover:shadow-md'
            }`}
            onClick={() => onSelectTheme(theme.id)}
          >
            <div
              className="theme-preview h-16 rounded"
              style={{
                background: theme.previewColor || '#f8f9fa',
                border: theme.id === 'default' ? '1px solid #e2e8f0' : 'none'
              }}
            >
              <div className="flex items-center justify-center h-full">
                <span
                  className="text-xs font-medium"
                  style={{ color: theme.previewTextColor || '#333' }}
                >
                  {theme.name}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
