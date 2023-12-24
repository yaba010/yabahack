// 定义一个数组，包含一些常见的爬虫字符串const commonSpiderStrings = [
  'bot',
  'spider',
  'Google',
  'Baidu',
  'WebCrawler',
  'crawler',
  'scraper'
];
// 获取页面上的所有输入框元素const inputElements = document.getElementsByTagName('input');
// 为每个输入框元素添加事件监听器for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener('input', function(event) {
    // 检查输入框的值是否包含爬虫字符串
    for (let j = 0; j < commonSpiderStrings.length; j++) {
      if (event.target.value.includes(commonSpiderStrings[j])) {
        // 如果检测到爬虫字符串，阻止默认行为并显示警告消息
        event.preventDefault();
        alert('检测到爬虫字符串，禁止进行下一步操作！');
        break;
      }
    }
  });
}
// 每秒检查一次页面源代码中是否包含爬虫字符串setInterval(() => {
  const sourceCode = document.documentElement.outerHTML;
  for (let j = 0; j < commonSpiderStrings.length; j++) {
    if (sourceCode.includes(commonSpiderStrings[j])) {
      // 如果检测到爬虫字符串，使用垃圾延迟来阻止爬虫行为
      while (true) {
        // 制造大量垃圾延迟，以阻止爬虫继续执行其他操作
        const x = new Array(1000000).fill('x'); // 创建一个包含一百万个字符'x'的数组
      }
    }
  }
}, 1000);