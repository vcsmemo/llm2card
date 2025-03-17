'use client'

import React, { forwardRef } from 'react'
import { Card } from '@/components/ui/card'
import Markdown from 'markdown-to-jsx'
import { getThemeStyles } from '@/lib/themes'
import { CustomizationOptions, defaultOptions } from './CustomizationPanel'

interface EditorPreviewProps {
  markdown: string
  theme: string
  width: number
  height: number
  customOptions?: CustomizationOptions
}

// 定义引用类型的预览组件
export const EditorPreview = forwardRef<HTMLDivElement, EditorPreviewProps>(
  ({ markdown, theme, width, height, customOptions }, ref) => {
    // 获取主题样式
    const themeStyles = getThemeStyles(theme)

    // 合并自定义选项和主题样式
    const options = customOptions || defaultOptions

    // 应用自定义样式
    const combinedStyles = {
      container: {
        ...themeStyles.container,
      },
      card: {
        ...themeStyles.card,
        backgroundColor: options.backgroundColor,
        borderRadius: `${options.borderRadius}px`,
      },
      content: {
        ...themeStyles.content,
        padding: `${options.padding}px`,
        color: options.textColor,
        fontFamily: options.fontFamily,
      },
      header: {
        ...themeStyles.header,
      },
      footer: {
        ...themeStyles.footer,
      },
      h1: {
        ...themeStyles.h1,
        color: options.titleColor,
        fontSize: `${options.fontSize * 1.5}px`,
        fontFamily: options.fontFamily,
      },
      h2: {
        ...themeStyles.h2,
        color: options.titleColor,
        fontSize: `${options.fontSize * 1.25}px`,
        fontFamily: options.fontFamily,
      },
      h3: {
        ...themeStyles.h3,
        color: options.titleColor,
        fontSize: `${options.fontSize * 1.1}px`,
        fontFamily: options.fontFamily,
      },
      p: {
        ...themeStyles.p,
        color: options.textColor,
        fontSize: `${options.fontSize}px`,
        fontFamily: options.fontFamily,
      },
      a: {
        ...themeStyles.a,
        fontFamily: options.fontFamily,
      },
      ul: {
        ...themeStyles.ul,
        color: options.textColor,
        fontFamily: options.fontFamily,
      },
      ol: {
        ...themeStyles.ol,
        color: options.textColor,
        fontFamily: options.fontFamily,
      },
      li: {
        ...themeStyles.li,
        fontSize: `${options.fontSize}px`,
        fontFamily: options.fontFamily,
      },
      blockquote: {
        ...themeStyles.blockquote,
        fontSize: `${options.fontSize}px`,
        fontFamily: options.fontFamily,
      },
    }

    return (
      <div
        ref={ref}
        className="card-preview"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          overflow: 'hidden',
          ...combinedStyles.container
        }}
      >
        <Card
          className="h-full overflow-hidden"
          style={{
            ...combinedStyles.card,
            padding: 0,
            margin: 0,
          }}
        >
          <div
            className="card-content h-full overflow-auto"
            style={{
              ...combinedStyles.content
            }}
          >
            {/* 卡片标题、标签等可以在这里添加 */}
            {combinedStyles.header && (
              <div className="card-header mb-4" style={combinedStyles.header}>
                {theme === 'default' && <div className="text-sm text-gray-500">LLM2Card</div>}
              </div>
            )}

            {/* Markdown 内容渲染 */}
            <div className="markdown-content" style={combinedStyles.content}>
              <Markdown
                options={{
                  overrides: {
                    h1: {
                      component: ({ children, ...props }) => (
                        <h1
                          {...props}
                          className="font-bold mb-4"
                          style={combinedStyles.h1}
                        >
                          {children}
                        </h1>
                      )
                    },
                    h2: {
                      component: ({ children, ...props }) => (
                        <h2
                          {...props}
                          className="font-bold mt-6 mb-3"
                          style={combinedStyles.h2}
                        >
                          {children}
                        </h2>
                      )
                    },
                    h3: {
                      component: ({ children, ...props }) => (
                        <h3
                          {...props}
                          className="font-bold mt-5 mb-2"
                          style={combinedStyles.h3}
                        >
                          {children}
                        </h3>
                      )
                    },
                    p: {
                      component: ({ children, ...props }) => (
                        <p
                          {...props}
                          className="mb-4 leading-relaxed"
                          style={combinedStyles.p}
                        >
                          {children}
                        </p>
                      )
                    },
                    a: {
                      component: ({ children, ...props }) => (
                        <a
                          {...props}
                          className="text-blue-600 hover:underline"
                          style={combinedStyles.a}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      )
                    },
                    ul: {
                      component: ({ children, ...props }) => (
                        <ul
                          {...props}
                          className="list-disc pl-5 mb-4"
                          style={combinedStyles.ul}
                        >
                          {children}
                        </ul>
                      )
                    },
                    ol: {
                      component: ({ children, ...props }) => (
                        <ol
                          {...props}
                          className="list-decimal pl-5 mb-4"
                          style={combinedStyles.ol}
                        >
                          {children}
                        </ol>
                      )
                    },
                    li: {
                      component: ({ children, ...props }) => (
                        <li
                          {...props}
                          className="mb-1"
                          style={combinedStyles.li}
                        >
                          {children}
                        </li>
                      )
                    },
                    blockquote: {
                      component: ({ children, ...props }) => (
                        <blockquote
                          {...props}
                          className="border-l-4 pl-4 italic my-4"
                          style={combinedStyles.blockquote}
                        >
                          {children}
                        </blockquote>
                      )
                    },
                    img: {
                      component: ({ src, alt, ...props }) => (
                        <div className="my-4">
                          <img
                            src={src}
                            alt={alt || ''}
                            className="max-w-full rounded-lg"
                            style={themeStyles.img}
                            {...props}
                          />
                          {alt && <div className="text-sm text-center text-gray-500 mt-1">{alt}</div>}
                        </div>
                      )
                    },
                    code: {
                      component: ({ children, ...props }) => (
                        <code
                          {...props}
                          className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
                          style={themeStyles.code}
                        >
                          {children}
                        </code>
                      )
                    },
                    pre: {
                      component: ({ children, ...props }) => (
                        <pre
                          {...props}
                          className="bg-gray-100 p-3 rounded-lg overflow-auto my-4 text-sm font-mono"
                          style={themeStyles.pre}
                        >
                          {children}
                        </pre>
                      )
                    },
                  }
                }}
              >
                {markdown}
              </Markdown>
            </div>

            {/* 卡片底部，如作者信息、时间等 */}
            {combinedStyles.footer && (
              <div
                className="card-footer mt-6 pt-4"
                style={combinedStyles.footer}
              >
                {theme === 'default' && <div className="text-xs text-gray-400">由 LLM2Card 生成</div>}
              </div>
            )}
          </div>
        </Card>
      </div>
    )
  }
)
