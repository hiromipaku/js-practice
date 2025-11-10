// 小課題1：forEachで合計を出す
const myNumbers = [3, 7, 2, 8, 4];
let sum = 0;
myNumbers.forEach((Num) => {
    sum += Num;
})
console.log(sum);

// 小課題2：mapで2倍の配列を作る
const myNumbers1 = [1, 2, 3, 4, 5];
const double = myNumbers1.map((Num) => Num * 2);
console.log(double); 

// 小課題3：filterで偶数だけ抽出
const myNumbers2 = [10, 15, 20, 25, 30];
const evenNumbers = myNumbers2.filter((Num) => Num % 2 === 0);
console.log(evenNumbers);

// 小課題4：まとめて関数にする
function processNumbers(arr) {
    // 合計
    let sum = 0;
    arr.forEach(n => sum += n);
  
    // 2倍配列
    const doubled = arr.map(n => n * 2);
  
    // 偶数抽出
    const evens = arr.filter(n => n % 2 === 0);
  
    console.log("合計:", sum);
    console.log("2倍配列:", doubled);
    console.log("偶数配列:", evens);
  }
  
  // 関数を使う
  processNumbers([1,2,3,4,5]);