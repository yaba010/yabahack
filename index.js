const spiderChecker = {
  // 检测函数
  isSpider: function() {
    const spiderRegex1 = /(bot|spider|crawl|slurp|curl|libwww|wget|http\d?check|python|java|ZmEu|adwords|yandex|rambler|mail\.ru|seznam|semager|NING|boitho|scooter|埃尔法|newspider|spidey|robot|disco|spiderman|new-spider|fresh-spider|spider-test)/i;
    const additionalSpiderRegex = /[more-spider-patterns]/i; // 替换为实际的爬虫标识符
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
      }
    } catch (error) {
      console.log('Error occurred:', error); // 输出错误信息
      // 网络延迟导致的错误处理，稍后再次尝试执行检测
      setTimeout(function() {
        spiderChecker.handleSpider(); // 执行检测函数和处理逻辑的更新
      }, 2000); // 2秒后再次尝试执行检测函数和处理逻辑
    } finally {
      // 在finally块中清除setInterval定时器（如果有的话）
      const timerId = setInterval(function() {
        spiderChecker.handleSpider(); // 执行检测函数和处理逻辑的更新
      }, 6000); // 每6秒更新一次（可根据需求进行调整）
      // 如果需要清除定时器，可以使用clearInterval(timerId)来清除它。
    }
  }
};