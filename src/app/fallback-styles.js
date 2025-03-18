export const injectFallbackStyles = () => {
  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.5;
      color: #333;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      font-size: 28px;
      margin: 20px 0;
      color: #4f46e5;
    }
    
    h2 {
      font-size: 22px;
      margin: 15px 0;
      padding-top: 15px;
      border-top: 1px solid #eee;
    }
    
    p {
      margin-bottom: 15px;
    }
    
    a {
      color: #4f46e5;
      text-decoration: none;
    }
    
    ul, ol {
      margin-left: 20px;
      margin-bottom: 15px;
    }
    
    .container {
      display: block;
      width: 100%;
    }
    
    .card {
      border: 1px solid #eee;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    
    .language-selector {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    
    .button {
      display: inline-block;
      padding: 8px 16px;
      background-color: #4f46e5;
      color: white;
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `;

  // 创建样式标签并插入到head
  const style = document.createElement('style');
  style.innerHTML = styles;
  document.head.appendChild(style);
};
