import { toPng, toSvg } from 'html-to-image'

export const exportToImage = async (node: HTMLElement, filename: string) => {
  if (!node) {
    throw new Error('导出元素不存在')
  }

  try {
    const dataUrl = await toPng(node, {
      quality: 0.95,
      pixelRatio: 2,
      skipFonts: false,
      backgroundColor: 'white',
    })

    // 创建下载链接
    const link = document.createElement('a')
    link.download = `${filename}-${Date.now()}.png`
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    return dataUrl
  } catch (error) {
    console.error('导出图片失败:', error)
    throw error
  }
}

export const exportToSvg = async (node: HTMLElement, filename: string) => {
  if (!node) {
    throw new Error('导出元素不存在')
  }

  try {
    const dataUrl = await toSvg(node, {
      quality: 0.95,
      pixelRatio: 2,
      skipFonts: false,
      backgroundColor: 'white',
    })

    // 创建下载链接
    const link = document.createElement('a')
    link.download = `${filename}-${Date.now()}.svg`
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    return dataUrl
  } catch (error) {
    console.error('导出SVG失败:', error)
    throw error
  }
}
