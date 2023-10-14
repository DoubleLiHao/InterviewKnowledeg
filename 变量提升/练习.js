// 1、
// console.log(a);
// var a = 1;
// console.log(a);

// 2、
// var a = 1;
// function b(c) {
//   console.log(c);
//   var c = 2;
//   console.log(c);
// }
// function d() {
//   console.log(c);
//   var c = 1;
//   console.log(c);
// }
// b(a);
// d();

// 3、
// console.log(a);
// var a = 1;
// function a() {}
// console.log(a);

// 4、
// var a = 1;
// function fn() {
//   a = 1;
//   console.log(a);
// }
// fn();
// function fn() {
//   a = 2;
//   console.log(a);
// }
// fn();
// function fn() {
//   a = 3;
//   console.log(a);
// }
// fn();

// 5、 字节
// let a = 0,
//   b = 0;
// function fn(a) {
//   fn = function fn2(b) {
//     console.log(a, b);
//     console.log(++a + b);
//   };
//   console.log('a',a++);
// }
// fn(1);
// fn(2);

// 6、字节
// var a = 5;
// (function () {
//   console.log(a);
//   a = 10;
//   console.log(a);
//   var a = 20;
//   console.log(a);
// })();
// var b = {
//   a,
//   c: b,
// };
// console.log(b);
