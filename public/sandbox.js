"use strict";
// const character="haBhhxg"
// console.log(character)
// const inputs=document.querySelectorAll('input')
// console.log(inputs);
// inputs.forEach(input =>{
//     console.log(input)
// })
let character = "hashir";
let age = 12;
let isBlackelt = false;
//
character = "raja";
age = 40;
isBlackelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//Arrays 
let names = ['hashir', 'abdullah', 'dhamir'];
names.push('audi');
let numbers = [20, 45, 67, 1];
numbers.push(89);
console.log(numbers);
//Mixed Arrays
let mixed = ['ken', 4, 5, 'jennx'];
mixed.push(3);
mixed.push("pass");
mixed[0] = 3;
//Objects
let hashir = {
    name: "hashir",
    color: "white",
    age: 22
};
hashir.age = 90;
console.log(hashir);
//we can change the objects but with all the properties with same type but can have different values
//Explicit Types
let char;
let ages;
let isLoggedIn;
//age="alldax"
age = 30;
isLoggedIn = true;
//Arrays
let ninjas = [];
ninjas.push("saaB");
//Union
let mixedArray = [];
mixedArray.push("hello");
mixedArray.push(34);
mixedArray.push(false);
console.log(mixedArray);
let uid;
uid = "1233";
uid = 98878;
console.log(uid);
//Obbjects
let strk;
strk = ({ name: 'yoshu', age: 30 });
strk = [];
let strk2;
strk2 = { name: "mario", age: 20, beltColour: "blue" };
console.log(strk2);
//Dynamic Types (Any)
let age1 = 36;
age1 = true;
console.log(age1);
age1 = "hello";
console.log(age1);
age1 = { name: "hashir" };
console.log(age1);
let mixed1 = [];
mixed1.push(5);
mixed1.push("hashir");
mixed1.push(true);
console.log(mixed1);
let object2;
object2 = { name: "ypshi", age: 34 };
console.log(object2);
object2 = { name: 25, age: "ypshi" };
console.log(object2);
//it should be used when you have  avariable but you dont know its datatype what will be in future But It can lead to many errors and mistakes in the code3
//Functions &n void
let greet = () => {
    console.log("hello World");
};
//cannot change the vale
let greet1;
greet1 = () => {
    console.log("Hello,again");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 33);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
const greetingAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// let greet2:Function;
//Example 1
let greet2;
greet2 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Example 2 
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
//Example 3
let logDeatils2;
logDeatils2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years Old.`);
};
const me = {
    name: 'shaun',
    //age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
console.log(me);
me.speak('hello, world');
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
//greetPerson({name: 'shaun'});
