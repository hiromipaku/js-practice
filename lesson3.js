const person = {name: 'Alice', age: 25};

// プロパティの取得
console.log(person.name);

// プロパティの追加
person.country = 'NZ';
console.log(person);
console.log(person.country);

// プロパティの削除
delete person.age;
console.log(person);

// 小課題：特定の値を取得する関数
function getCountry(obj) {
    return obj.country;
}
console.log('小課題:', getCountry(person));