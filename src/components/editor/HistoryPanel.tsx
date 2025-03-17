'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CardItem, getHistory, removeFromHistory } from '@/lib/storage'
import { formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { Trash2, Clock } from 'lucide-react'

interface HistoryPanelProps {
  onSelectItem: (item: CardItem) => void
}

export function HistoryPanel({ onSelectItem }: HistoryPanelProps) {
  const [historyItems, setHistoryItems] = useState<CardItem[]>([])

  // 加载历史记录
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const items = getHistory()
      setHistoryItems(items)
    }
  }, [])

  // 删除历史记录项
  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    removeFromHistory(id)
    setHistoryItems(prev => prev.filter(item => item.id !== id))
  }

  // 选择历史记录项
  const handleSelect = (item: CardItem) => {
    onSelectItem(item)
  }

  // 格式化时间
  const formatTime = (timestamp: number) => {
    try {
      return formatDistanceToNow(new Date(timestamp), {
        addSuffix: true,
        locale: zhCN
      })
    } catch (error) {
      return '未知时间'
    }
  }

  if (historyItems.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        <Clock className="mx-auto mb-2 h-12 w-12 text-gray-300" />
        <p>暂无历史记录</p>
        <p className="text-sm mt-1">您创建的卡片将显示在这里</p>
      </div>
    )
  }

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4">
        {historyItems.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleSelect(item)}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-base line-clamp-1">{item.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => handleDelete(item.id, e)}
                className="h-6 w-6 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">删除</span>
              </Button>
            </div>

            <div className="mt-1 text-sm text-gray-500 line-clamp-2">
              {item.content.replace(/[#*_`]/g, '').substring(0, 100)}...
            </div>

            <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
              <span>主题: {item.theme}</span>
              <span>{formatTime(item.timestamp)}</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
