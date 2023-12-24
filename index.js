// 创建一个对象来封装爬虫检测和处理逻辑const spiderChecker = {
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
        window.location.href = 'index.html'; // 重定向到"index.html"
        // 禁止移动
        document.getElementById("content").style.pointerEvents = "none"; // 禁止复制文本
        document.getElementById("content").oncontextmenu = function(e) { e.preventDefault(); }; // 禁止复制文本
        document.getElementById("content").oncopy = function(e) { e.preventDefault(); }; // 禁止复制文本
        document.getElementById("content").oncut = function(e) { e.preventDefault(); }; // 禁止复制文本
        // 禁止点击
        document.getElementById("content").onclick = function(e) { e.preventDefault(); }; // 永久封闭在安全界面
        window.onload = function() {
          setTimeout(function() {
            window.location.href = "no.html"; // 重定向到"no.html"
          }, 2000); // 2秒后重定向到"no.html"
        }; // 设置定时器，每隔一段时间执行一次检测函数和处理逻辑的更新
        setInterval(function() {
          spiderChecker.handleSpider(); // 执行检测函数和处理逻辑的更新
        }, 6000); // 每6秒更新一次（可根据需求进行调整）}; 
    } catch (error) { // 网络延迟导致的错误处理，稍后再次尝试执行检测 
      setTimeout(function() { window.onload(); // 重新执行检测函数和处理逻辑 }, 2000); // 2秒后再次尝试执行检测函数和处理逻辑 
    } // 设置定时器，每隔一段时间执行一次检测函数和处理逻辑的更新 
    setInterval(function() { spiderChecker.handleSpider(); // 执行检测函数和处理逻辑的更新 }, 6000); // 每6秒更新一次（可根据需求进行调整）};
  }
};