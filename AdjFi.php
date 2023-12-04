
<?php
$filename = 'forum.txt'; // 要删除的文件名
if (file_exists($filename)) {
    // 读取文件内容
    $fileContent = file_get_contents($filename);
    echo "文件内容：\n";
    echo $fileContent;
    echo "\n\n";
    
    // 删除文件内容
    $newFileContent = '';
    if (file_put_contents($filename, $newFileContent)) {
        echo "文件内容删除成功！";
    } else {
        echo "文件内容删除失败：" . error_get_last()['message'];
    }
} else {
    echo "文件不存在！";
}
?>