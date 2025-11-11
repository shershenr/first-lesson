/*
let user = {
    "name": "John",
    "age": 32,
    "work": true,
};
for (let key in user) {
    console.log(key);
    console.log(user[key]);
};

let codes = {
    49:"Німечинна",
    41:"Великобританія",
    5:"США",
}
for (let code in codes){
    console.log(code);
}

let a = "132asd";
let b = "30qwd";
let c = "14.4qwefa";

console.log(typeof parseFloat(b));


const message = "Zaharlox"
console.log(message.toUpperCase())


let user = {};
user.username = "John";
user.city = "New York";
user.age = 7;
delete user.city;
user["like flovers"] = true;
for (key in user) {
    console.log(key);
    console.log(user[key]);
}

const value = prompt("Please enter a number!");
console.log(typeof value);
console.log(value);


value = false;
console.log(value);
const newValue = String(value);
console.log(typeof newValue);


value = "123";
console.log(typeof value);

const newValue = Number(value);
console.log( newValue);



const test = Number("qwe")
console.log( test)


console.log(Boolean(NaN));



if (5 + 5 === 10){
    console.log("Hello");
} else{
    console.log("2");
}


(2 + 4 === 6) ? console.log("1") : console.log("2");


5 * 5 === 24 ? console.log(true) : console.log(false);


if (5 + 5 === 7) {
    console.log("5 + 5 === 7");
} else if (2 + 1 === 4) {
    console.log("2 + 2 === 4");
} else {
    console.log("no");
}


let cost;
const sub = "free";

switch (sub) {
    case "free":
        cost = 0;
        break;

    case "pro":
        cost = 100;
        break;

    case "Pemium":
        cost = 200;
        break;

}
console.log(cost);

let cost;
const cheats = "pro";

 switch (cheats) {
     case "lite":
         cost = "5$";
         break;

     case "pro":
         cost = "7$";
         break;
 }
 console.log(cost);

const min = prompt("Ввeдіть хвилини");

if (min >=0 && min <= 14){
    console.log("Перша чверть");
} else if (min >= 15 &&  min <=29){
    console.log("Друга чверть");
} else if (min >= 30 && min <=44){
    console.log("Третя чверть");
} else if (min >= 45 && min <=59){
    console.log("Четверта чверть");
}

const value = prompt("Введыть назву товару").toLowerCase();
let cost;

switch (value) {
    case "телефон":
        cost = 60000;
        alert(`${value} коштує ${cost} гривень`)
        break;
    case "телевізор":
        cost = 40000;
        alert(`${value} коштує ${cost} гривень`)
        break;
    case "навушники":
        cost = 8000;
        alert(`${value} коштує ${cost} гривень`)
        break;
    case "мишка":
        cost = 3000;
        alert(`${value} коштує ${cost} гривень`)
        break;

    default: alert(`Toвару ${value},не має у наявності`)
}

let a = 0;

while (a  < 5) {
    a ++;
    console.log("a", a);
}

let a = 2;
do {
    console.log(a)
    a++
}   while(a < 5);


let a = 0;
for ( ;a < 3; a++) {
    console.log(a);
}

let summ = 0;

while (true) {
    let value = +prompt("Введіть число");
    if (!value) break;

    summ += value;

}
console.log("summ", summ);


for (let i= 0 ; i < 10; i++){
    if (i%2 === 0) continue
    console.log(i);
}

let arr =["Apple","Orange","Plum"];

arr [1] = "Lemon";

arr [3] = "Cherry";


arr.push("Tomat");



arr.pop();

arr.shift()

arr.unshift("Tomat");

console.log(arr);


let arr =["Apple","Orange","Plum"];

for (let item of arr){
    console.log(item);
}


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log(matrix[1][2]);


let a = 5;
let b = a;


a = 10;
console.log(a);
console.log(b);

let arr = [1,2,3];
let arr2 = arr;

arr.push(4);

console.log(arr);


let arr = ["a", "b", "c"];

arr.splice(1,2);

console.log(arr)


let arr = ["a", "b", "c"];

console.log(arr.includes ("b"));


const fruits = [
    { id: 0, name: "Apple"},
    { id: 1, name: "Cherry"},
    { id: 2, name: "Orange"},
];

//console.log(fruits.find((item) => item.id === 2));
console.log(fruits.filter((item)=> item.id > 1));


const fruits = [
    { id: 0, name: "Apple"},
    { id: 1, name: "Cherry"},
    { id: 2, name: "Orange"},
];

let result = fruits.map((item) => item.name.lenght);
console.log(result);



let names = "Оля, Юля, Аня, Петя";

let arr = names.split(", ");



let newString = arr.join(", ");
console.log(newString);

let arr = [1,2,3,4,5]

let red = arr.reduce((summ, item)=> summ+item)
console.log(red)

 */
let arr = [23, 12, 23];

let red = arr.reduce(( sum, item ) => sum + item) / arr.length;
console.log(red);