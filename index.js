// 模拟用户访问
const userId = 'user123';
// 获取用户访问次数的函数
function getVisitCount(userId) {
  let count = sessionStorage.getItem(userId);
  if (count === null) {
    count = 0;
  } else {
    count = parseInt(count, 10);
  }
  return count;
}
// 更新用户访问次数的函数
function updateVisitCount(userId) {
  const count = getVisitCount(userId);
  sessionStorage.setItem(userId, count + 1);
}
// 检查用户是否被禁止访问的函数
function isAllowed(userId) {
  const count = getVisitCount(userId);
  const lastVisit = sessionStorage.getItem(userId + '_lastVisit');
  const now = new Date().getTime();
  if (count >= 5 && (now - lastVisit) < 1000) {
    // 禁止访问，设置最后访问时间为当前时间加上15秒
    sessionStorage.setItem(userId + '_lastVisit', now + 15000);
    return false;
  } else {
    updateVisitCount(userId);
    return true;
  }
}
if (isAllowed(userId)) {
  console.log('欢迎访问！');
} else {
  console.log('您已经被禁止访问。请15秒后再尝试访问。');
}
