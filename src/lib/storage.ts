/**
 * 本地存储工具函数
 * 用于保存和恢复用户的工作状态
 */

import { CustomizationOptions } from "@/components/editor/CustomizationPanel";

// 定义存储的卡片项结构
export interface CardItem {
  id: string;
  content: string;
  theme: string;
  timestamp: number;
  title: string;
  customOptions?: CustomizationOptions;
}

// 定义编辑器状态结构
export interface EditorState {
  content: string;
  theme: string;
  width: number;
  height: number;
  customOptions?: CustomizationOptions;
}

// 本地存储键名
const STORAGE_KEYS = {
  HISTORY: 'llm2card_history',
  CURRENT_EDITOR: 'llm2card_editor_state',
};

// 最大历史记录数量
const MAX_HISTORY_ITEMS = 20;

/**
 * 保存编辑器当前状态
 */
export function saveEditorState(state: EditorState): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEYS.CURRENT_EDITOR, JSON.stringify(state));
  } catch (error) {
    console.error('保存编辑器状态失败:', error);
  }
}

/**
 * 获取保存的编辑器状态
 */
export function getEditorState(): EditorState | null {
  if (typeof window === 'undefined') return null;

  try {
    const savedState = localStorage.getItem(STORAGE_KEYS.CURRENT_EDITOR);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error('获取编辑器状态失败:', error);
  }
  return null;
}

/**
 * 添加卡片到历史记录
 */
export function addToHistory(card: Omit<CardItem, 'id' | 'timestamp'>): void {
  if (typeof window === 'undefined') return;

  try {
    // 生成唯一ID
    const id = `card_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // 提取标题
    let title = card.title;
    if (!title) {
      // 从内容中提取标题
      const match = card.content.match(/^#\s+(.+)$/m);
      title = match ? match[1].substring(0, 30) : '未命名卡片';
    }

    const newCard: CardItem = {
      ...card,
      id,
      title,
      timestamp: Date.now(),
    };

    // 获取现有历史记录
    const history = getHistory();

    // 将新卡片添加到历史记录的最前面
    const updatedHistory = [newCard, ...history].slice(0, MAX_HISTORY_ITEMS);

    // 保存更新后的历史记录
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('添加到历史记录失败:', error);
  }
}

/**
 * 获取历史记录
 */
export function getHistory(): CardItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const history = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('获取历史记录失败:', error);
    return [];
  }
}

/**
 * 删除指定的历史记录项
 */
export function removeFromHistory(id: string): void {
  if (typeof window === 'undefined') return;

  try {
    const history = getHistory();
    const updatedHistory = history.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('从历史记录中删除失败:', error);
  }
}

/**
 * 清空历史记录
 */
export function clearHistory(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  } catch (error) {
    console.error('清空历史记录失败:', error);
  }
}

/**
 * 清空所有本地存储数据
 */
export function clearAllStorage(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_EDITOR);
  } catch (error) {
    console.error('清空所有存储失败:', error);
  }
}
