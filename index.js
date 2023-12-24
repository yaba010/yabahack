const spiderChecker = {
  // 检测函数
  isSpider: function() {
    const spiderRegex1 = /(bot|spider|crawl|slurp|curl|libwww|wget|http\d?check|python|java|ZmEu|adwords|yandex|rambler|mail\.ru|seznam|semager|NING|boitho|scooter|埃尔法|newspider|spidey|robot|disco|spiderman|new-spider|fresh-spider|spider-test)/i;
    const additionalSpiderRegex = /(additional-spider-pattern1|additional-spider-pattern2|html-parser)/i; // 添加HTML语言的爬虫标识符的正则表达式
    const ua = navigator.userAgent;
    return spiderRegex1.test(ua) || additionalSpiderRegex.test(ua); // 检测是否匹配新增的爬虫标识符
  },
  // 处理逻辑
  handleSpider: function() {
    try {
      if (this.isSpider()) {
   
        // 禁止移动
        document.getElementById("content").style.pointerEvents = "none"; // 禁止复制文本
        document.getElementById("content").oncontextmenu = function(e) { e.preventDefault(); }; // 禁止复制文本
        document.getElementById("content").oncopy = function(e) { e.preventDefault(); }; // 禁止复制文本
        document.getElementById("content").oncut = function(e) { e.preventDefault(); }; // 禁止复制文本
        // 禁止点击
        document.getElementById("content").ondblclick = function(e) { e.preventDefault(); }; // 禁止双击
        document.getElementById("content").onclick = function(e) { e.preventDefault(); }; // 禁止点击
        // 禁止获取源代码
        document.getElementById("content").onbeforecopy = function(e) { e.preventDefault(); }; // 禁止复制文本
        document.getElementById("content").onbeforecut = function(e) { e.preventDefault(); }; // 禁止剪切文本
        // 降低爬虫访问速度和生成垃圾内容
        const contentElement = document.getElementById("content");
        let delay = 0; // 设置延迟时间（毫秒）
        let delayIncrease = 500; // 延迟时间增加量（毫秒）
        let maxDelay = 5000; // 最大延迟时间（毫秒）
        let counter = 0; // 计数器，用于计算延迟时间增加的次数
        setInterval(() => {
          delay += delayIncrease; // 增加延迟时间
          if (delay > maxDelay) delay = maxDelay; // 限制最大延迟时间
          contentElement.innerHTML += "<!-- This is a dummy content to slow down the crawler -->"; // 生成垃圾内容
          counter++; // 计数器增加
          if (counter >= 3) clearInterval(setInterval); // 当计数器达到3时停止增加延迟时间，但继续生成垃圾内容
        }, delay); // 设置定时器，每一定时间执行一次回调函数
      }
    } catch (error) {
      console.error("Error in spiderChecker:", error);
    }
  }
};