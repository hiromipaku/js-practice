// 小課題1：forEachで合計を出す
const myNumbers = [3, 7, 2, 8, 4];
let sum = 0;
myNumbers.forEach((num) => {
    sum += num;
})

// 小課題2：mapで2倍の配列を作る
const myNumbers1 = [1, 2, 3, 4, 5];
const double = myNumbers1.map((num) => num * 2);

// 小課題3：filterで偶数だけ抽出
const myNumbers2 = [10, 15, 20, 25, 30];
const evenNumbers = myNumbers2.filter((num) => num % 2 === 0);

// 小課題4：まとめて関数にする
function processNumbers(arr) {
    // 合計
    let sum = 0;
    arr.forEach((num) => {
        sum += num
    })
    console.log(sum);
  
    // 2倍配列
    const double = arr.map((num) => num * 2);
    console.log(double);
  
    // 偶数抽出
    const evenNumbers = arr.filter((num) => num % 2 === 0);
    console.log(evenNumbers);
}
// 関数を使う    
  processNumbers([6,3,8,1,5]);