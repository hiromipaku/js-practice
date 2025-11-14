// 関数宣言 Hello + Hiromi!
console.log(greet('Yama'))
function greet(name) {
    return `Hello, + ${name}!`;
}
console.log(greet('Hiromi'));
  
// 関数式
const add = function(a, b) {
    return (a + b);
}
console.log(add(8,7));
  
// 配列やオブジェクトを扱う関数
function sumArray(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumArray([1,2,3,4]));