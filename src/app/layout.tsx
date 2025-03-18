import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LLM2Card - 将AI生成内容转换为精美知识卡片',
  description: '一键将LLM生成的Markdown内容转换为精美的知识卡片，让您的内容更加生动有吸引力。支持多种主题和自定义选项。',
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
        
        {/* 内联CSS，确保基本样式即使在JS加载失败时也会显示 */}
        <style dangerouslySetInnerHTML={{ __html: `
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: system-ui, -apple-system, sans-serif; 
            line-height: 1.5; color: #333; 
            padding: 20px; max-width: 1200px; margin: 0 auto; 
          }
          h1 { font-size: 28px; margin: 20px 0; color: #4f46e5; }
          h2 { font-size: 22px; margin: 15px 0; padding-top: 15px; border-top: 1px solid #eee; }
          p { margin-bottom: 15px; }
          a { color: #4f46e5; text-decoration: none; }
          header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; margin-bottom: 20px; border-bottom: 1px solid #eee; }
          .flex { display: flex; }
          .grid { display: grid; }
          .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
          .button, .btn { display: inline-block; padding: 8px 16px; background-color: #4f46e5; color: white !important; border-radius: 4px; margin-right: 8px; margin-bottom: 8px; text-decoration: none; }
          .border-t { border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px; }
          .text-center { text-align: center; }
          footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; }
        ` }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
