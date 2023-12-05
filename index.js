function generateRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function generateRandomElement() {
  var element = document.createElement('div');
  element.id = generateRandomString(10);
  element.className = generateRandomString(10);
  element.innerHTML = generateRandomString(100);
  element.style.display = "none"; 
  element.setAttribute("data-random", generateRandomString(20)); 
  document.body.appendChild(element);
}
setInterval(function() {
  generateRandomElement();
}, 100); 