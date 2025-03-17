'use client'

import { useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { ColorPicker } from './ColorPicker'

export interface CustomizationOptions {
  fontFamily: string
  fontSize: number
  padding: number
  borderRadius: number
  textColor: string
  backgroundColor: string
  titleColor: string
}

const defaultOptions: CustomizationOptions = {
  fontFamily: 'sans-serif',
  fontSize: 16,
  padding: 24,
  borderRadius: 12,
  textColor: '#333333',
  backgroundColor: '#ffffff',
  titleColor: '#333333'
}

interface CustomizationPanelProps {
  options: CustomizationOptions
  onChange: (options: CustomizationOptions) => void
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  options,
  onChange
}) => {
  const [activeTab, setActiveTab] = useState('typography')

  const handleChange = (key: keyof CustomizationOptions, value: any) => {
    onChange({
      ...options,
      [key]: value
    })
  }

  const fonts = [
    { value: 'sans-serif', label: '无衬线字体 (Sans-serif)' },
    { value: 'serif', label: '衬线字体 (Serif)' },
    { value: 'monospace', label: '等宽字体 (Monospace)' },
    { value: 'cursive', label: '手写体 (Cursive)' },
    { value: 'fantasy', label: '装饰体 (Fantasy)' },
    { value: '"Source Han Sans SC", sans-serif', label: '思源黑体' },
    { value: '"Source Han Serif SC", serif', label: '思源宋体' },
  ]

  return (
    <div className="border rounded-lg p-4 bg-white">
      <Tabs defaultValue="typography" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="typography">排版</TabsTrigger>
          <TabsTrigger value="layout">布局</TabsTrigger>
          <TabsTrigger value="colors">颜色</TabsTrigger>
        </TabsList>

        <TabsContent value="typography" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fontFamily">字体</Label>
            <Select
              value={options.fontFamily}
              onValueChange={(value) => handleChange('fontFamily', value)}
            >
              <SelectTrigger id="fontFamily">
                <SelectValue placeholder="选择字体" />
              </SelectTrigger>
              <SelectContent>
                {fonts.map(font => (
                  <SelectItem key={font.value} value={font.value}>
                    <span style={{ fontFamily: font.value }}>{font.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fontSize">字体大小: {options.fontSize}px</Label>
            <Slider
              id="fontSize"
              value={[options.fontSize]}
              min={12}
              max={24}
              step={1}
              onValueChange={(value) => handleChange('fontSize', value[0])}
            />
          </div>
        </TabsContent>

        <TabsContent value="layout" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="padding">内边距: {options.padding}px</Label>
            <Slider
              id="padding"
              value={[options.padding]}
              min={8}
              max={48}
              step={2}
              onValueChange={(value) => handleChange('padding', value[0])}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="borderRadius">圆角: {options.borderRadius}px</Label>
            <Slider
              id="borderRadius"
              value={[options.borderRadius]}
              min={0}
              max={24}
              step={1}
              onValueChange={(value) => handleChange('borderRadius', value[0])}
            />
          </div>
        </TabsContent>

        <TabsContent value="colors" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="textColor">文字颜色</Label>
            <ColorPicker
              id="textColor"
              color={options.textColor}
              onChange={(color) => handleChange('textColor', color)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="titleColor">标题颜色</Label>
            <ColorPicker
              id="titleColor"
              color={options.titleColor}
              onChange={(color) => handleChange('titleColor', color)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="backgroundColor">背景颜色</Label>
            <ColorPicker
              id="backgroundColor"
              color={options.backgroundColor}
              onChange={(color) => handleChange('backgroundColor', color)}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export { defaultOptions }
