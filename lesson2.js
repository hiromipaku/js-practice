// 配列の準備
const numbers = [1, 2, 3, 4, 5];
console.log("元の配列:", numbers);

// 1️⃣ forEach で合計を計算
let sum = 0;
numbers.forEach((num) => {
    sum += num;
})
console.log(sum);

// 2️⃣ map で2倍に変換
const double = numbers.map((num) => num * 2);
console.log(double);

// 3️⃣ filter で偶数だけ抽出
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// 4️⃣ 小課題：配列 [2,4,6,8] の合計を計算する関数
const numbersTest = [2,4,6,8];
let sumTest = 0;
numbersTest.forEach((numTest) => {
  sumTest += numTest;
})
console.log(sumTest);
