// 配列の準備
const numbers = [1, 2, 3, 4, 5];

// console.log("元の配列:", numbers);

// 1️⃣ forEach で合計を計算
let sum = 0;
numbers.forEach(num => {
  sum += num;
})
// console.log(sum);

// 2️⃣ map で2倍に変換
const doubled = numbers.map((num) => num * 2);
// console.log(doubled);
// console.log(numbers);

// 3️⃣ filter で偶数だけ抽出
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// 4️⃣ 小課題：配列 [2,4,6,8] の合計を計算する関数
const numbers1 = [2,4,6,8];
let sum1 = 0;
numbers1.forEach(num1 => {
  sum1 += num1;
})
// console.log(sum1);

// 小課題1：forEachで合計を出す


// 小課題2：mapで2倍の配列を作る


// 小課題3：filterで偶数だけ抽出


// 小課題4：まとめて関数にする
const n = processNumbers(arr);
