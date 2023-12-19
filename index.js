document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.shiftKey && event.key === 'F') {
                event.preventDefault(); 
                var sourceCode = document.documentElement.innerHTML;
                sourceCode = sourceCode.replace(/./g, ' '); 
                alert('源代码已加密，显示为乱码:\n\n' + sourceCode);
            }
        });