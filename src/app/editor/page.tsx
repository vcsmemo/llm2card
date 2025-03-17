'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { EditorPreview } from '@/components/editor/EditorPreview'
import { ThemeSelector } from '@/components/editor/ThemeSelector'
import { HistoryPanel } from '@/components/editor/HistoryPanel'
import { CustomizationPanel, defaultOptions, CustomizationOptions } from '@/components/editor/CustomizationPanel'

import { exportToImage, exportToSvg } from '@/lib/export'
import { smartSplitMarkdown } from '@/lib/split-text'
import { saveEditorState, getEditorState, addToHistory, CardItem } from '@/lib/storage'

import { History, Settings, Save, Image, Smartphone, Monitor } from 'lucide-react'

const defaultMarkdown = `# LLM2Card

LLM2Card 是一个免费的 LLM生成内容转知识卡片工具，支持一键生成小红书风格海报、社交媒体文案排版。

## 核心功能

1. **支持 Markdown 语法**
2. **多种主题样式**
3. **自动生成卡片**
4. **一键导出图片**
`

export default function EditorPage() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [theme, setTheme] = useState('default')
  const [width, setWidth] = useState(360)
  const [height, setHeight] = useState(640)
  const [scale, setScale] = useState(100)
  const [splitCards, setSplitCards] = useState<string[]>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [autoSplitEnabled, setAutoSplitEnabled] = useState(false)
  const [isMobilePreview, setIsMobilePreview] = useState(false)
  const [customOptions, setCustomOptions] = useState<CustomizationOptions>(defaultOptions)
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false)
  const [customizeDialogOpen, setCustomizeDialogOpen] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  // 检测移动设备
  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
    }
    return false
  }, [])

  // 从本地存储加载状态
  useEffect(() => {
    const savedState = getEditorState()
    if (savedState) {
      setMarkdown(savedState.content)
      setTheme(savedState.theme)
      setWidth(savedState.width)
      setHeight(savedState.height)
      if (savedState.customOptions) {
        setCustomOptions(savedState.customOptions)
      }
    }
  }, [])

  // 保存编辑器状态到本地存储
  useEffect(() => {
    saveEditorState({
      content: markdown,
      theme,
      width,
      height,
      customOptions,
    })
  }, [markdown, theme, width, height, customOptions])

  // 当Markdown文本变化或自动拆分开关状态变化时，更新卡片
  useEffect(() => {
    if (autoSplitEnabled) {
      const cards = smartSplitMarkdown(markdown)
      setSplitCards(cards)
      setCurrentCardIndex(0) // 重置到第一张卡片
    } else {
      setSplitCards([markdown])
      setCurrentCardIndex(0)
    }
  }, [markdown, autoSplitEnabled])

  // 保存当前卡片到历史记录
  const saveToHistory = () => {
    addToHistory({
      content: markdown,
      theme,
      title: '',
      customOptions,
    })
    // 显示保存成功提示
    alert('已保存到历史记录')
  }

  // 从历史记录加载
  const loadFromHistory = (item: CardItem) => {
    setMarkdown(item.content)
    setTheme(item.theme)
    if (item.customOptions) {
      setCustomOptions(item.customOptions)
    }
    setHistoryDialogOpen(false)
  }

  const handleExport = async () => {
    if (previewRef.current) {
      try {
        await exportToImage(previewRef.current, 'llm2card-export')
      } catch (error) {
        console.error('导出失败', error)
        alert('导出失败，请重试')
      }
    }
  }

  const handleExportAll = async () => {
    if (!previewRef.current || splitCards.length <= 1) return

    try {
      for (let i = 0; i < splitCards.length; i++) {
        setCurrentCardIndex(i)
        // 等待DOM更新
        await new Promise(resolve => setTimeout(resolve, 300))
        if (previewRef.current) {
          await exportToImage(previewRef.current, `llm2card-export-${i+1}`)
        }
      }
      // 导出完成后恢复到第一张卡片
      setCurrentCardIndex(0)
    } catch (error) {
      console.error('批量导出失败', error)
      alert('批量导出失败，请重试')
    }
  }

  const handleScaleChange = (newScale: number) => {
    setScale(newScale)
  }

  const nextCard = () => {
    if (currentCardIndex < splitCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    }
  }

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
    }
  }

  // 当前预览的Markdown内容
  const currentMarkdown = splitCards[currentCardIndex] || markdown

  return (
    <div className="container mx-auto py-4 px-2 md:py-6 md:px-4">
      {/* 顶部工具栏 - 移动端适配 */}
      {isMobile && (
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid grid-cols-2 mb-2">
              <TabsTrigger value="edit">编辑</TabsTrigger>
              <TabsTrigger value="preview">预览</TabsTrigger>
            </TabsList>

            <TabsContent value="edit" className="mt-0">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="markdown-mobile" className="text-sm font-medium">
                    Markdown 内容
                  </label>
                  <div className="flex space-x-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setHistoryDialogOpen(true)}
                      title="历史记录"
                    >
                      <History className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setCustomizeDialogOpen(true)}
                      title="自定义设置"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={saveToHistory}
                      title="保存"
                    >
                      <Save className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Textarea
                  id="markdown-mobile"
                  className="font-mono h-[70vh] resize-none"
                  placeholder="输入 Markdown 内容..."
                  value={markdown}
                  onChange={(e) => setMarkdown(e.target.value)}
                />
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="autoSplit-mobile"
                    checked={autoSplitEnabled}
                    onChange={() => setAutoSplitEnabled(!autoSplitEnabled)}
                    className="mr-2"
                  />
                  <label htmlFor="autoSplit-mobile" className="text-sm">
                    启用自动拆分
                  </label>
                  {autoSplitEnabled && splitCards.length > 1 && (
                    <span className="ml-4 text-sm text-gray-500">
                      共 {splitCards.length} 张卡片，当前第 {currentCardIndex + 1} 张
                    </span>
                  )}
                </div>
                {autoSplitEnabled && splitCards.length > 1 && (
                  <div className="flex gap-2 mt-2">
                    <Button
                      onClick={prevCard}
                      disabled={currentCardIndex === 0}
                      className="flex-1"
                      variant="outline"
                      size="sm"
                    >
                      上一张
                    </Button>
                    <Button
                      onClick={nextCard}
                      disabled={currentCardIndex === splitCards.length - 1}
                      className="flex-1"
                      variant="outline"
                      size="sm"
                    >
                      下一张
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="preview" className="mt-0">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-md font-medium">预览</h2>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" onClick={() => setIsMobilePreview(!isMobilePreview)}>
                      {isMobilePreview ? <Monitor className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setTheme('xiaohongshu')}>
                      小红书
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setTheme('fresh-nature')}>
                      清新
                    </Button>
                  </div>
                </div>
                <div className="overflow-auto bg-gray-100 p-4 rounded-lg flex justify-center">
                  <div style={{ transform: `scale(${scale / 100})`, transformOrigin: 'top center' }}>
                    <EditorPreview
                      ref={previewRef}
                      markdown={currentMarkdown}
                      theme={theme}
                      width={isMobilePreview ? 320 : width}
                      height={isMobilePreview ? 568 : height}
                      customOptions={customOptions}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleExport}
                  className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Image className="mr-2 h-4 w-4" />
                  导出当前卡片
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* 桌面版布局 */}
      {!isMobile && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 编辑器面板 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="markdown" className="text-sm font-medium">
                Markdown 内容
              </label>
              <div className="flex space-x-1">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setHistoryDialogOpen(true)}
                  title="历史记录"
                >
                  <History className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setCustomizeDialogOpen(true)}
                  title="自定义设置"
                >
                  <Settings className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={saveToHistory}
                  title="保存"
                >
                  <Save className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Textarea
                id="markdown"
                className="font-mono h-[70vh] resize-none"
                placeholder="输入 Markdown 内容..."
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              />

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="autoSplit"
                  checked={autoSplitEnabled}
                  onChange={() => setAutoSplitEnabled(!autoSplitEnabled)}
                  className="mr-2"
                />
                <label htmlFor="autoSplit" className="text-sm">
                  启用自动拆分
                </label>
                {autoSplitEnabled && splitCards.length > 1 && (
                  <span className="ml-4 text-sm text-gray-500">
                    共 {splitCards.length} 张卡片，当前第 {currentCardIndex + 1} 张
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* 预览和控制面板 */}
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">卡片预览与设置</h2>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => setIsMobilePreview(!isMobilePreview)}>
                    {isMobilePreview ? <Monitor className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* 主题选择 */}
              <div className="mb-4">
                <ThemeSelector selectedTheme={theme} onSelectTheme={setTheme} />
              </div>

              {/* 尺寸调整 */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="width" className="text-sm font-medium block mb-1">
                    宽度
                  </label>
                  <div className="flex items-center">
                    <Input
                      id="width"
                      type="number"
                      min={200}
                      max={1200}
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-2">px</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="height" className="text-sm font-medium block mb-1">
                    高度
                  </label>
                  <div className="flex items-center">
                    <Input
                      id="height"
                      type="number"
                      min={200}
                      max={2000}
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-2">px</span>
                  </div>
                </div>
              </div>

              {/* 缩放控制 */}
              <div className="mb-4">
                <label htmlFor="scale" className="text-sm font-medium block mb-1">
                  缩放: {scale}%
                </label>
                <input
                  id="scale"
                  type="range"
                  min={50}
                  max={150}
                  value={scale}
                  onChange={(e) => handleScaleChange(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* 导出和卡片切换按钮 */}
              <div className="grid grid-cols-1 gap-2">
                <Button
                  onClick={handleExport}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Image className="mr-2 h-4 w-4" />
                  导出当前卡片
                </Button>

                {autoSplitEnabled && splitCards.length > 1 && (
                  <>
                    <Button
                      onClick={handleExportAll}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      批量导出所有卡片
                    </Button>

                    <div className="flex gap-2 mt-2">
                      <Button
                        onClick={prevCard}
                        disabled={currentCardIndex === 0}
                        className="flex-1"
                        variant="outline"
                      >
                        上一张
                      </Button>
                      <Button
                        onClick={nextCard}
                        disabled={currentCardIndex === splitCards.length - 1}
                        className="flex-1"
                        variant="outline"
                      >
                        下一张
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 卡片预览 */}
            <div className="overflow-auto bg-gray-100 p-4 rounded-lg flex justify-center">
              <div style={{ transform: `scale(${scale / 100})`, transformOrigin: 'top center' }}>
                <EditorPreview
                  ref={previewRef}
                  markdown={currentMarkdown}
                  theme={theme}
                  width={isMobilePreview ? 320 : width}
                  height={isMobilePreview ? 568 : height}
                  customOptions={customOptions}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 历史记录对话框 */}
      <Dialog open={historyDialogOpen} onOpenChange={setHistoryDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>历史记录</DialogTitle>
          </DialogHeader>
          <HistoryPanel onSelectItem={loadFromHistory} />
        </DialogContent>
      </Dialog>

      {/* 自定义设置对话框 */}
      <Dialog open={customizeDialogOpen} onOpenChange={setCustomizeDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>自定义设置</DialogTitle>
          </DialogHeader>
          <CustomizationPanel
            options={customOptions}
            onChange={setCustomOptions}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
