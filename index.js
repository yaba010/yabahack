window.onload = function() {
    // 正常显示页面内容
    var content = document.body.innerHTML;
    document.body.innerHTML = content;

    // 当用户尝试获取源代码时显示乱码
    window.oncontextmenu = function(e) {
        e.preventDefault();
        alert('您正在尝试查看源代码，但源代码已被加密。请不要尝试获取或复制此页面的内容。');
        return false;
    };
};