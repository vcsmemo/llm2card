/**
 * 将Markdown文本按照标题自动拆分成多个卡片
 * @param markdownText 原始Markdown文本
 * @returns 拆分后的Markdown文本数组
 */
export function splitMarkdownByHeadings(markdownText: string): string[] {
  if (!markdownText || markdownText.trim() === '') {
    return [];
  }

  // 按行分割文本
  const lines = markdownText.split('\n');

  // 查找所有一级标题(# )和二级标题(## )的行号
  const headingIndices: number[] = [];

  lines.forEach((line, index) => {
    // 匹配以#或##或###开头的行，这些是我们要作为分割点的标题
    if (line.trim().match(/^#{1,3}\s/)) {
      headingIndices.push(index);
    }
  });

  // 如果没有找到任何标题，或只有一个标题，则整体作为一个卡片
  if (headingIndices.length <= 1) {
    return [markdownText];
  }

  // 根据标题位置拆分文本
  const cards: string[] = [];

  for (let i = 0; i < headingIndices.length; i++) {
    const startIdx = headingIndices[i];
    const endIdx = i < headingIndices.length - 1 ? headingIndices[i + 1] : lines.length;

    // 提取出这一段标题下的内容
    const cardContent = lines.slice(startIdx, endIdx).join('\n');
    cards.push(cardContent);
  }

  return cards;
}

/**
 * 将Markdown文本按照分隔符(---)拆分成多个卡片
 * @param markdownText 原始Markdown文本
 * @returns 拆分后的Markdown文本数组
 */
export function splitMarkdownByDelimiter(markdownText: string): string[] {
  if (!markdownText || markdownText.trim() === '') {
    return [];
  }

  // 使用分隔符 "---" 分割文本
  const parts = markdownText.split(/\n---\n/);

  // 确保每个部分都有内容
  return parts.filter(part => part.trim() !== '');
}

/**
 * 将Markdown按照段落拆分成多个卡片
 * @param markdownText 原始Markdown文本
 * @param maxParagraphs 每张卡片最大段落数
 * @returns 拆分后的Markdown文本数组
 */
export function splitMarkdownByParagraphs(markdownText: string, maxParagraphs: number = 3): string[] {
  if (!markdownText || markdownText.trim() === '') {
    return [];
  }

  // 以空行为界分割段落
  const paragraphs = markdownText.split(/\n\s*\n/).filter(p => p.trim() !== '');

  if (paragraphs.length <= maxParagraphs) {
    return [markdownText];
  }

  const cards: string[] = [];
  let currentCard: string[] = [];
  let headingFound = false;
  let headingText = '';

  // 检查第一个段落是否为标题
  if (paragraphs[0].trim().startsWith('#')) {
    headingFound = true;
    headingText = paragraphs[0];
  }

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];

    // 如果这是一个标题，且不是第一个段落，则从这里开始一个新卡片
    if (i > 0 && paragraph.trim().startsWith('#')) {
      cards.push(currentCard.join('\n\n'));
      currentCard = [paragraph];
      headingFound = true;
      continue;
    }

    // 如果当前卡片已达到最大段落数，创建新卡片
    if (currentCard.length >= maxParagraphs) {
      cards.push(currentCard.join('\n\n'));
      currentCard = [];

      // 如果之前找到过标题，在新卡片中添加这个标题作为上下文
      if (headingFound) {
        currentCard.push(headingText);
      }
    }

    currentCard.push(paragraph);
  }

  // 添加最后一个卡片
  if (currentCard.length > 0) {
    cards.push(currentCard.join('\n\n'));
  }

  return cards;
}

/**
 * 智能拆分Markdown文本，首先尝试按标题拆分，如果只有一个卡片则按段落或字符数量拆分
 * @param markdownText 原始Markdown文本
 * @param maxLength 单个卡片的最大字符数，降低为更合理的长度
 * @returns 拆分后的Markdown文本数组
 */
export function smartSplitMarkdown(markdownText: string, maxLength: number = 1000): string[] {
  // 首先尝试按标题拆分
  let cards = splitMarkdownByHeadings(markdownText);

  // 如果已经拆分成多个卡片，则直接返回
  if (cards.length > 1) {
    // 进一步检查每张卡片是否过长
    const result: string[] = [];
    for (const card of cards) {
      if (card.length > maxLength) {
        // 如果单张卡片过长，进一步拆分
        const subCards = splitMarkdownByParagraphs(card);
        result.push(...subCards);
      } else {
        result.push(card);
      }
    }
    return result;
  }

  // 尝试按分隔符拆分
  cards = splitMarkdownByDelimiter(markdownText);

  // 如果已经拆分成多个卡片，则直接返回
  if (cards.length > 1) {
    return cards;
  }

  // 尝试按段落拆分
  cards = splitMarkdownByParagraphs(markdownText);

  // 如果已经拆分成多个卡片，则直接返回
  if (cards.length > 1) {
    return cards;
  }

  // 如果前三种方式都只有一个卡片，且内容超过最大长度，则按字符数量拆分
  if (markdownText.length > maxLength) {
    cards = [];
    const lines = markdownText.split('\n');
    let currentCard = '';

    for (const line of lines) {
      // 如果加上当前行会超过最大长度，且当前卡片已有内容，则创建新卡片
      if (currentCard.length + line.length > maxLength && currentCard.trim() !== '') {
        cards.push(currentCard);
        currentCard = line + '\n';
      } else {
        currentCard += line + '\n';
      }
    }

    // 添加最后一个卡片
    if (currentCard.trim() !== '') {
      cards.push(currentCard);
    }

    return cards;
  }

  // 如果内容不长，直接返回原始内容作为一个卡片
  return [markdownText];
}
