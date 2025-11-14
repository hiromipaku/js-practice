// ① 受け取った数を3倍にして返す関数
function triple(num) {
    return num * 3;
}
console.log(triple(2));

const triple2 = (num) => num * 3;
console.log(triple2(4));

// ② 2つの文字列をくっつけて返す関数
function addWords(a,b) {
    return a + b
}
console.log(addWords('He','llo'));

const addWords2 = (a,b) => a + b;
console.log(addWords('kon','nichiwa'));

// ③ 名前を受け取って挨拶を表示する関数
function greet(name) {
    console.log(`こんにちは、${name}さん！`);
}
greet('博美');

const greet2 = (name) => {
    console.log(`こんばんは、${name}ちゃん！`);
};
greet2('花子');

// ④ 偶数かどうかを判定する関数
function isEven(num) {
    if(num % 2 === 0){
        console.log('true');
    } else {
        console.log('false');
    }
}

isEven('2');
isEven('3');