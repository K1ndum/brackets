module.exports = function check(str, bracketsConfig) {
  let queue = [];
  const brackets = {};
  const arr = str.split("");

  bracketsConfig.forEach((a) => (brackets[a[0]] = a[1]));

  for (let i = 0; i < arr.length; i++) {
      if (brackets[queue[queue.length - 1]] === arr[i]) {
          queue.pop();
      } else if (brackets.hasOwnProperty(arr[i])) {
          queue.push(arr[i]);
      } else {
          return false;
      }
  }

  if (queue.length == 0) {
      return true;
  } else {
      return false;
  }
}
