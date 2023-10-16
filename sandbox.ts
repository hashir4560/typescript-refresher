// const character="haBhhxg"
// console.log(character)

// const inputs=document.querySelectorAll('input')
// console.log(inputs);
// inputs.forEach(input =>{
//     console.log(input)
// })
let character="hashir"
let age =12
let isBlackelt=false
//
 character="raja"

 age=40;

 isBlackelt=true;

 const circ= (diameter:number)=>{
    return diameter*Math.PI

 }
console.log(circ(7.5))



//Arrays 

let names=['hashir','abdullah','dhamir']
names.push('audi');


let numbers=[20,45,67,1]
numbers.push(89);
console.log(numbers);


//Mixed Arrays
let mixed=['ken',4,5,'jennx']
mixed.push(3);
mixed.push("pass")
mixed[0]=3;

//Objects
let hashir={
    name:"hashir",
    color:"white",
    age:22


}

hashir.age=90;

console.log(hashir)
//we can change the objects but with all the properties with same type but can have different values


//Explicit Types
let char:string;
let ages:number;
let isLoggedIn:boolean;

//age="alldax"
age=30;

isLoggedIn=true;

//Arrays
let ninjas:string [ ]=[ ];
ninjas.push("saaB")


//Union
let mixedArray:(string|number|boolean)[]=[]
mixedArray.push("hello")
mixedArray.push(34)
mixedArray.push(false);
console.log(mixedArray);

let uid:string|number;
uid="1233"
uid=98878;
console.log(uid);


//Obbjects
let strk:object;
strk=({name:'yoshu',age:30})
strk=[]


let strk2:{
    name:string,
    age:number,
    beltColour:string

}
strk2={name:"mario",age:20,beltColour:"blue"}
console.log(strk2);
