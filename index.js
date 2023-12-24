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
        // 重定向到"index.html"
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
      }
    } catch (error) {
      console.error("Error in spiderChecker:", error);
    }
  }
};