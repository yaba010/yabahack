<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>哑巴教论坛</title>
</head>
<body>
    <h1>匿名论坛</h1>
    <form method="post" action="">
        <label for="title">标题:</label>
        <input type="text" id="title" name="title" required autocomplete="off">
        <label for="author">作者:</label>
        <input type="text" id="author" name="author" required autocomplete="off">
        <label for="content">内容:</label>
        <textarea id="content" name="content" rows="4" cols="50" required autocomplete="off"></textarea>
        <input type="submit" value="发表">
        <input type="hidden" name="postId" value=""> <!-- 新增的帖子ID字段 -->
    </form>
    <h2>论坛内容</h2>
    <?php
    // 读取内容并显示在页面上
    $file = fopen("forum.txt", "r") or die("无法打开文件");
    while (!feof($file)) {
        $line = fgets($file);
        echo "<p>$line</p>";
    }
    fclose($file);
    // 处理表单提交并写入文件
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $title = $_POST["title"];
        $author = $_POST["author"]; // 新增的作者字段
        $content = $_POST["content"];
        $postTime = date("Y-m-d H:i:s"); // 获取当前时间并格式化为年-月-日 时:分:秒
        $file = fopen("forum.txt", "a") or die("无法写入文件");
        fwrite($file, "<p><b>$title</b> by <b>$author</b> - $postTime</p>\n"); // 在每一行后面添加发帖时间，并使用mb_convert_encoding函数进行编码转换
        fwrite($file, "$content\n");
        fclose($file);
        // 重置表单字段值
        echo '<script>document.getElementById("title").value = ""; document.getElementById("author").value = ""; document.getElementById("content").value = "";</script>';
    } 
    ?>
</body>
</html>