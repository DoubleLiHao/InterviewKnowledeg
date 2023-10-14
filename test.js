function test(fn) {
  fn(1);
}
let res = 0;
const result = test((e) => {
  res = e;
});
console.log(res);
