import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LLM2Card - 将AI生成内容转换为精美知识卡片',
  description: '一键将LLM生成的Markdown内容转换为精美的知识卡片，让您的内容更加生动有吸引力。支持多种主题和自定义选项。',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  themeColor: '#4f46e5',
  colorScheme: 'light dark',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
