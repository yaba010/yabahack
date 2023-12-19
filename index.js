// 混淆和加密源代码function obfuscateSourceCode(sourceCode) {
  // 将源代码转换为字符串
  const sourceCodeString = sourceCode.toString();
  // 创建一个混淆和加密的函数
  const obfuscatedCode = `
    (function() {
      var originalCode = "${sourceCodeString}";
      var obfuscatedCode = "";
      var charCode = originalCode.charCodeAt(0);
      while (charCode > 0) {
        var randomCharCode = Math.floor(Math.random() * 100) + 1;
        obfuscatedCode += String.fromCharCode(charCode % randomCharCode);
        charCode = Math.floor(charCode / randomCharCode);
      }
      eval(obfuscatedCode);
    })();
  `;
  // 返回混淆和加密后的函数
  return obfuscatedCode;
}
// 将源代码混淆和加密并插入到页面中const obfuscatedCode = obfuscateSourceCode(document.documentElement.innerHTML);
document.documentElement.innerHTML = obfuscatedCode;