const person = {name:'Arice', age:18};

// プロパティの取得
console.log(person.name);

// プロパティの追加
person.country = 'NZ';

// プロパティの削除
delete person.age;
console.log(person);

// 小課題：特定の値を取得する関数
function getCountry(obj){
    return obj.country;
}
console.log(getCountry(person));

function getName(obj){
    return obj.name;
}
console.log(getName(person));