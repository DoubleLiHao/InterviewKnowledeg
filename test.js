var isPalindrome = function (x) {
  const Arr = x.toString().split("");
  let preArr = new Array(Arr.length);
  preArr = preArr.fill(Arr, 0, 1).flat();
  Arr.reverse();
  console.log(Arr, preArr);
  let result = true;
  Arr.forEach((item, index) => {
    if (item !== preArr[index]) {
      result = false;
      return;
    }
  });
  return result;
};
console.log(isPalindrome(-121));
