export interface Theme {
  id: string
  name: string
  category: string
  previewColor: string
  previewTextColor: string
  styles: ThemeStyles
}

export interface ThemeStyles {
  container?: React.CSSProperties
  card?: React.CSSProperties
  borderRadius?: string
  content?: React.CSSProperties
  header?: React.CSSProperties
  footer?: React.CSSProperties
  markdown?: React.CSSProperties
  h1?: React.CSSProperties
  h2?: React.CSSProperties
  h3?: React.CSSProperties
  p?: React.CSSProperties
  a?: React.CSSProperties
  ul?: React.CSSProperties
  ol?: React.CSSProperties
  li?: React.CSSProperties
  blockquote?: React.CSSProperties
  img?: React.CSSProperties
  code?: React.CSSProperties
  pre?: React.CSSProperties
  [key: string]: React.CSSProperties | undefined
}

// 定义基础主题
const themes: Theme[] = [
  {
    id: 'default',
    name: '默认主题',
    category: '简约',
    previewColor: '#ffffff',
    previewTextColor: '#333333',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
      },
      content: {
        padding: '24px',
        color: '#333333',
      },
      header: {
        borderBottom: '1px solid #f1f1f1',
        paddingBottom: '12px',
      },
      footer: {
        borderTop: '1px solid #f1f1f1',
        paddingTop: '12px',
      },
      h1: {
        color: '#333333',
        fontSize: '24px',
      },
      h2: {
        color: '#444444',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
      },
      blockquote: {
        borderLeftColor: '#e2e8f0',
      },
    },
  },
  {
    id: 'xiaohongshu',
    name: '小红书风格',
    category: '社交媒体',
    previewColor: '#fee2e2',
    previewTextColor: '#9f1239',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
      },
      content: {
        padding: '24px',
        color: '#333333',
      },
      header: {
        paddingBottom: '12px',
      },
      footer: {
        paddingTop: '12px',
        borderTop: '1px solid #f7e2e1',
      },
      h1: {
        color: '#9f1239',
        fontSize: '24px',
        borderBottom: '2px solid #fee2e2',
        paddingBottom: '8px',
      },
      h2: {
        color: '#881337',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
      },
      blockquote: {
        borderLeftColor: '#fecaca',
        backgroundColor: '#fef2f2',
      },
    },
  },
  {
    id: 'fresh-nature',
    name: '清新自然',
    category: '简约',
    previewColor: '#dcfce7',
    previewTextColor: '#166534',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        background: 'linear-gradient(120deg, #dcfce7 0%, #f0fdf4 100%)',
      },
      card: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '16px',
        border: '1px solid #d1fae5',
      },
      content: {
        padding: '24px',
        color: '#166534',
      },
      header: {
        paddingBottom: '12px',
        color: '#166534',
      },
      footer: {
        paddingTop: '12px',
        borderTop: '1px solid #dcfce7',
        color: '#16a34a',
      },
      h1: {
        color: '#166534',
        fontSize: '24px',
        borderBottom: '2px solid #86efac',
        paddingBottom: '8px',
        fontFamily: 'cursive, sans-serif',
      },
      h2: {
        color: '#16a34a',
        fontSize: '20px',
        fontFamily: 'cursive, sans-serif',
      },
      h3: {
        color: '#15803d',
        fontSize: '18px',
        fontFamily: 'cursive, sans-serif',
      },
      p: {
        lineHeight: '1.8',
        color: '#365314',
      },
      a: {
        color: '#16a34a',
        textDecoration: 'underline',
      },
      blockquote: {
        borderLeftColor: '#86efac',
        backgroundColor: '#f0fdf4',
        fontStyle: 'italic',
        padding: '10px 15px',
      },
      ul: {
        color: '#365314',
      },
      ol: {
        color: '#365314',
      },
      li: {
        marginBottom: '8px',
      },
      code: {
        backgroundColor: '#f0fdf4',
        color: '#166534',
        padding: '2px 4px',
        borderRadius: '4px',
      },
      pre: {
        backgroundColor: '#f0fdf4',
        borderRadius: '8px',
        padding: '16px',
      },
      img: {
        borderRadius: '8px',
        border: '1px solid #d1fae5',
      },
    },
  },
  {
    id: 'dark',
    name: '深色主题',
    category: '简约',
    previewColor: '#1f2937',
    previewTextColor: '#e5e7eb',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      },
      card: {
        backgroundColor: '#1f2937',
        borderRadius: '12px',
      },
      content: {
        padding: '24px',
        color: '#e5e7eb',
      },
      header: {
        borderBottom: '1px solid #374151',
        paddingBottom: '12px',
      },
      footer: {
        borderTop: '1px solid #374151',
        paddingTop: '12px',
      },
      h1: {
        color: '#f3f4f6',
        fontSize: '24px',
      },
      h2: {
        color: '#d1d5db',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
        color: '#9ca3af',
      },
      blockquote: {
        borderLeftColor: '#4b5563',
        backgroundColor: '#111827',
      },
      code: {
        backgroundColor: '#111827',
        color: '#e5e7eb',
      },
      pre: {
        backgroundColor: '#111827',
        color: '#e5e7eb',
      },
    },
  },
  {
    id: 'gradient',
    name: '渐变色',
    category: '现代',
    previewColor: 'linear-gradient(to right, #667eea, #764ba2)',
    previewTextColor: '#ffffff',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      card: {
        background: 'linear-gradient(to right, #667eea, #764ba2)',
        borderRadius: '12px',
      },
      content: {
        padding: '24px',
        color: '#ffffff',
      },
      header: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        paddingBottom: '12px',
      },
      footer: {
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        paddingTop: '12px',
      },
      h1: {
        color: '#ffffff',
        fontSize: '24px',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      h2: {
        color: '#f3f4f6',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
      },
      blockquote: {
        borderLeftColor: 'rgba(255, 255, 255, 0.5)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  {
    id: 'tech-light',
    name: '科技风浅色',
    category: '技术',
    previewColor: '#ecfdf5',
    previewTextColor: '#047857',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #d1fae5',
      },
      content: {
        padding: '24px',
        color: '#333333',
      },
      header: {
        paddingBottom: '12px',
      },
      footer: {
        paddingTop: '12px',
      },
      h1: {
        color: '#047857',
        fontSize: '24px',
        borderBottom: '2px solid #a7f3d0',
        paddingBottom: '8px',
      },
      h2: {
        color: '#059669',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
      },
      blockquote: {
        borderLeftColor: '#a7f3d0',
        backgroundColor: '#ecfdf5',
      },
      code: {
        backgroundColor: '#ecfdf5',
        color: '#047857',
      },
      pre: {
        backgroundColor: '#ecfdf5',
        color: '#1f2937',
      },
    },
  },
  {
    id: 'tech-dark',
    name: '科技风深色',
    category: '技术',
    previewColor: '#064e3b',
    previewTextColor: '#d1fae5',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      },
      card: {
        backgroundColor: '#064e3b',
        borderRadius: '8px',
      },
      content: {
        padding: '24px',
        color: '#d1fae5',
      },
      header: {
        paddingBottom: '12px',
        borderBottom: '1px solid #065f46',
      },
      footer: {
        paddingTop: '12px',
        borderTop: '1px solid #065f46',
      },
      h1: {
        color: '#ecfdf5',
        fontSize: '24px',
      },
      h2: {
        color: '#a7f3d0',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
        color: '#6ee7b7',
      },
      blockquote: {
        borderLeftColor: '#10b981',
        backgroundColor: '#065f46',
      },
      code: {
        backgroundColor: '#065f46',
        color: '#ecfdf5',
      },
      pre: {
        backgroundColor: '#065f46',
        color: '#ecfdf5',
      },
    },
  },
  {
    id: 'elegant',
    name: '优雅黑金',
    category: '商务',
    previewColor: '#1c1917',
    previewTextColor: '#fcd34d',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      },
      card: {
        backgroundColor: '#1c1917',
        borderRadius: '4px',
        border: '1px solid #fcd34d',
      },
      content: {
        padding: '24px',
        color: '#e5e7eb',
      },
      header: {
        borderBottom: '1px solid #44403c',
        paddingBottom: '12px',
      },
      footer: {
        borderTop: '1px solid #44403c',
        paddingTop: '12px',
      },
      h1: {
        color: '#fcd34d',
        fontSize: '24px',
        fontWeight: 'bold',
      },
      h2: {
        color: '#fbbf24',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
        color: '#d6d3d1',
      },
      blockquote: {
        borderLeftColor: '#fcd34d',
        backgroundColor: '#292524',
      },
    },
  },
  {
    id: 'pastel',
    name: '柔和色',
    category: '简约',
    previewColor: '#fbcfe8',
    previewTextColor: '#831843',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#fbcfe8',
        borderRadius: '16px',
      },
      content: {
        padding: '24px',
        color: '#831843',
      },
      header: {
        paddingBottom: '12px',
      },
      footer: {
        paddingTop: '12px',
      },
      h1: {
        color: '#831843',
        fontSize: '24px',
      },
      h2: {
        color: '#9d174d',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
        color: '#be185d',
      },
      blockquote: {
        borderLeftColor: '#db2777',
        backgroundColor: '#fdf2f8',
      },
    },
  },
  {
    id: 'minimalist',
    name: '极简风格',
    category: '简约',
    previewColor: '#f9fafb',
    previewTextColor: '#111827',
    styles: {
      container: {
        boxShadow: 'none',
      },
      card: {
        backgroundColor: '#f9fafb',
        borderRadius: '0',
      },
      content: {
        padding: '24px',
        color: '#111827',
      },
      header: {
        paddingBottom: '12px',
      },
      footer: {
        paddingTop: '12px',
      },
      h1: {
        color: '#111827',
        fontSize: '24px',
        fontWeight: '600',
      },
      h2: {
        color: '#374151',
        fontSize: '20px',
        fontWeight: '600',
      },
      p: {
        lineHeight: '1.6',
        color: '#4b5563',
      },
      blockquote: {
        borderLeftColor: '#e5e7eb',
        backgroundColor: '#f3f4f6',
      },
    },
  },
  {
    id: 'professional',
    name: '专业蓝',
    category: '商务',
    previewColor: '#eff6ff',
    previewTextColor: '#1e40af',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #dbeafe',
      },
      content: {
        padding: '24px',
        color: '#1e3a8a',
      },
      header: {
        borderBottom: '1px solid #dbeafe',
        paddingBottom: '12px',
      },
      footer: {
        borderTop: '1px solid #dbeafe',
        paddingTop: '12px',
      },
      h1: {
        color: '#1e40af',
        fontSize: '24px',
      },
      h2: {
        color: '#1d4ed8',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
        color: '#1e3a8a',
      },
      blockquote: {
        borderLeftColor: '#93c5fd',
        backgroundColor: '#eff6ff',
      },
    },
  },
  {
    id: 'zhihu',
    name: '知乎风格',
    category: '社交媒体',
    previewColor: '#ffffff',
    previewTextColor: '#0a66c2',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: '4px',
        border: '1px solid #f0f2f5',
      },
      content: {
        padding: '24px',
        color: '#121212',
      },
      header: {
        paddingBottom: '12px',
      },
      footer: {
        paddingTop: '12px',
        borderTop: '1px solid #f0f2f5',
      },
      h1: {
        color: '#121212',
        fontSize: '24px',
        fontWeight: 'bold',
      },
      h2: {
        color: '#121212',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      p: {
        lineHeight: '1.6',
        color: '#333333',
      },
      blockquote: {
        borderLeftColor: '#ebebeb',
        backgroundColor: '#f6f6f6',
        color: '#555555',
      },
      a: {
        color: '#0a66c2',
      },
    },
  },
  {
    id: 'wechat',
    name: '微信风格',
    category: '社交媒体',
    previewColor: '#ffffff',
    previewTextColor: '#07c160',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
      },
      content: {
        padding: '24px',
        color: '#333333',
      },
      header: {
        paddingBottom: '12px',
      },
      footer: {
        paddingTop: '12px',
      },
      h1: {
        color: '#333333',
        fontSize: '24px',
        fontWeight: 'bold',
      },
      h2: {
        color: '#333333',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      p: {
        lineHeight: '1.6',
        color: '#333333',
      },
      blockquote: {
        borderLeftColor: '#07c160',
        backgroundColor: '#f2f2f2',
      },
      a: {
        color: '#07c160',
      },
    },
  },
  {
    id: 'juejin',
    name: '掘金风格',
    category: '技术',
    previewColor: '#1e1e1e',
    previewTextColor: '#1e80ff',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: '4px',
      },
      content: {
        padding: '24px',
        color: '#333333',
      },
      header: {
        paddingBottom: '12px',
        borderBottom: '1px solid #f2f2f2',
      },
      footer: {
        paddingTop: '12px',
        borderTop: '1px solid #f2f2f2',
      },
      h1: {
        color: '#1d2129',
        fontSize: '24px',
        fontWeight: 'bold',
      },
      h2: {
        color: '#1d2129',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      p: {
        lineHeight: '1.6',
        color: '#333333',
      },
      blockquote: {
        borderLeftColor: '#dcdfe6',
        backgroundColor: '#f7f8fa',
        color: '#666666',
      },
      a: {
        color: '#1e80ff',
      },
      code: {
        backgroundColor: '#f6f8fa',
        color: '#1e80ff',
      },
      pre: {
        backgroundColor: '#f6f8fa',
        color: '#333333',
      },
    },
  },
  {
    id: 'notes',
    name: '手记风格',
    category: '简约',
    previewColor: '#fef3c7',
    previewTextColor: '#92400e',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      card: {
        backgroundColor: '#fef3c7',
        borderRadius: '8px',
        border: '1px solid #fde68a',
      },
      content: {
        padding: '24px',
        color: '#92400e',
      },
      header: {
        paddingBottom: '12px',
      },
      footer: {
        paddingTop: '12px',
      },
      h1: {
        color: '#92400e',
        fontSize: '24px',
        textDecoration: 'underline',
        textDecorationColor: '#fbbf24',
        textUnderlineOffset: '4px',
      },
      h2: {
        color: '#92400e',
        fontSize: '20px',
      },
      p: {
        lineHeight: '1.6',
        color: '#92400e',
      },
      blockquote: {
        borderLeftColor: '#fbbf24',
        backgroundColor: '#fffbeb',
      },
    },
  },
  {
    id: 'terminal',
    name: '终端风格',
    category: '技术',
    previewColor: '#000000',
    previewTextColor: '#00ff00',
    styles: {
      container: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      },
      card: {
        backgroundColor: '#000000',
        borderRadius: '4px',
        border: '1px solid #00ff00',
      },
      content: {
        padding: '24px',
        color: '#00ff00',
        fontFamily: 'monospace',
      },
      header: {
        borderBottom: '1px solid #00ff00',
        paddingBottom: '12px',
      },
      footer: {
        borderTop: '1px solid #00ff00',
        paddingTop: '12px',
      },
      h1: {
        color: '#00ff00',
        fontSize: '24px',
        fontFamily: 'monospace',
      },
      h2: {
        color: '#00ff00',
        fontSize: '20px',
        fontFamily: 'monospace',
      },
      p: {
        lineHeight: '1.6',
        color: '#00ff00',
        fontFamily: 'monospace',
      },
      blockquote: {
        borderLeftColor: '#00ff00',
        backgroundColor: '#002200',
      },
      code: {
        backgroundColor: '#002200',
        color: '#00ff00',
        fontFamily: 'monospace',
      },
      pre: {
        backgroundColor: '#002200',
        color: '#00ff00',
        fontFamily: 'monospace',
      },
    },
  },
];

// 获取所有可用主题
export function getAvailableThemes(): Theme[] {
  return themes;
}

// 根据主题ID获取主题样式
export function getThemeStyles(themeId: string): ThemeStyles {
  const theme = themes.find(t => t.id === themeId);
  return theme?.styles || themes[0].styles;
}
