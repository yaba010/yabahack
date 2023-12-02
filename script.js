document.addEventListener("DOMContentLoaded", function() {
    var countdown = document.getElementById("countdown");
    var blinkingBox = document.getElementById("闪烁方框");
    var countdownContainer = document.getElementById("countdown-container");
    var currentTime = 4;
    var interval = setInterval(function() {
        currentTime--;
        countdown.textContent = currentTime;
        if (currentTime <= 0) {
            clearInterval(interval);
            window.location.href = "0.html"; 
        } else {
            blinkingBox.classList.add("blinking-box"); // 启动闪烁效果
        }
    }, 1000); // 每秒更新一次时间，根据需要调整时间间隔（毫秒）
});

// 获取方框元素
const coder = document.getElementById('coder');
// 要显示的文本
const text = '$hostname=$hyour_server_hostnameusername=$your_username;password=$your_password;$connection= ssh2_connect($hostname, 22)';
// 字符数组
const chars = text.split('');
// 逐个字符显示
for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    coder.textContent += chars[i];
  }, i * 30); // 每秒显示一个字符
}