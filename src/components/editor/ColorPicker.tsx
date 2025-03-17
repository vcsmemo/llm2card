'use client'

import { useState, useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface ColorPickerProps {
  id: string
  color: string
  onChange: (color: string) => void
}

// 预定义的颜色列表
const presetColors = [
  '#000000', '#ffffff', '#f43f5e', '#8b5cf6', '#3b82f6',
  '#10b981', '#eab308', '#f97316', '#6b7280', '#831843',
  '#1e3a8a', '#365314', '#7c2d12', '#1c1917', '#fef3c7'
]

export function ColorPicker({ id, color, onChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputColor, setInputColor] = useState(color)

  // 同步外部颜色变化
  useEffect(() => {
    setInputColor(color)
  }, [color])

  // 当输入框颜色改变时
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setInputColor(newColor)

    // 确保颜色格式正确
    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      onChange(newColor)
    }
  }

  // 选择预定义颜色
  const selectPresetColor = (presetColor: string) => {
    setInputColor(presetColor)
    onChange(presetColor)
    setIsOpen(false)
  }

  return (
    <div className="flex items-center space-x-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            id={id}
            className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center"
            style={{ backgroundColor: inputColor }}
            aria-label="选择颜色"
          />
        </PopoverTrigger>
        <PopoverContent className="w-64 p-3">
          <div className="grid grid-cols-5 gap-2 mb-2">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                type="button"
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
                style={{ backgroundColor: presetColor }}
                onClick={() => selectPresetColor(presetColor)}
                aria-label={`选择颜色 ${presetColor}`}
              />
            ))}
          </div>
          <div className="flex items-center">
            <div
              className="w-8 h-8 rounded-full border border-gray-200 mr-2"
              style={{ backgroundColor: inputColor }}
            />
            <Input
              type="text"
              value={inputColor}
              onChange={handleInputChange}
              className="w-full"
              placeholder="#000000"
            />
          </div>
        </PopoverContent>
      </Popover>
      <Input
        type="text"
        value={inputColor}
        onChange={handleInputChange}
        className="w-28"
        placeholder="#000000"
      />
    </div>
  )
}
