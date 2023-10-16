const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
// 1、at
// console.log(a.at(2));
// console.log(a.at(-2));
// 2、concat 拼接返回新数组
// console.log(a.concat(b));
// 3、every 测试数组每一项是否满足要求
// const fn = (item) => {
//   return item < 5;
// };
// console.log(a.every(fn));
// 4、fill 填充某个值 从start到end 会直接修改数组
// console.log(a.fill(5));
// 5、filter 返回所有回调为真值的数组
// console.log(
//   a.filter((item) => {
//     return item < 3;
//   })
// );
// 6、find 找满足测试函数的第一个值 findIndex 找满足测试函数的第一个值的索引 indexOf 找值相等的第一个索引 includes 找是否有值相等的数 some 找是否有满足测试函数的数
// console.log(
//   a.find((item) => {
//     return item > 2;
//   })
// );
// console.log(
//   a.findIndex((item) => {
//     return item > 2;
//   })
// );
// console.log(a.indexOf(3));
// console.log(a.includes(3));
// console.log(
//   a.some((item) => {
//     return item > 2;
//   })
// );
// 7、forEach
a.forEach((element, index) => {
  return element < 3;
});
console.log(a);
// 8、join
// console.log(a.join('-'));
// 9、map
// a.map((element, index) => {
//   console.log(element, index);
// });
// 10、reduce
// console.log(
//   a.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   })
// );
