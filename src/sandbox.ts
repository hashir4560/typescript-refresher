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


//Dynamic Types (Any)

let age1:any=36;
age1=true;
console.log(age1);
age1="hello";
console.log(age1);
age1={name:"hashir"}
console.log(age1);


let mixed1:any[]=[]
mixed1.push(5)
mixed1.push("hashir");
mixed1.push(true);
console.log(mixed1);

let object2:{name:any,age:any};
object2={name:"ypshi",age:34}
console.log(object2)

object2={name:25,age:"ypshi"}
console.log(object2)

//it should be used when you have  avariable but you dont know its datatype what will be in future But It can lead to many errors and mistakes in the code3

//Functions &n void

let greet=()=>{
    console.log("hello World")
}
//cannot change the vale
let greet1:Function;
greet1=()=>{
    console.log("Hello,again")
}

const add=(a:number,b:number, c:number|string=10)=>{
    console.log(a+b);
    console.log(c);
}
add(5,10,33)

const minus=(a:number,b:number):number=>{
  return a - b;

}
let result=minus(10,7)
console.log(result);

//Aliases in Ts
type StringOrNum=string|number;
type objWithName={
    name:string,
    uid:string|number
}

const logDetails=(uid:StringOrNum,item:string)=>{
    console.log(`${item} has a uid of ${uid}`)
}

const greeting=(user:objWithName)=>{
    console.log(`${user.name} says hello`)
}
const greetingAgain=(user:objWithName)=>{
    console.log(`${user.name} says hello`)
}


// let greet2:Function;

//Example 1
let greet2:(a:string,b:string)=> void;
greet2=(name:string,greeting:string)=>{
    console.log(`${name} says ${greeting}`)
}


//Example 2 

let calc:(a:number,b:number,c:string)=>number;
calc=(numberOne:number,numberTwo:number,action:string)=>{
    if(action === 'add'){
        return numberOne + numberTwo ;
    }
    else{
        return numberOne - numberTwo
    }


}


//Example 3
 let logDeatils2:(obj:{name:string,age:number})=>void;
 logDeatils2=(ninja:{name:string ,age:number})=>{
    console.log(`${ninja.name} is ${ninja.age} years Old.`)
 }

 //Interface 
 //Inrterfaces
interface IsPerson {
    name: string;
    age?: number;
    speak(a: string): void;
    spend(a: number): number;
  }
  
  const me: IsPerson = {
    name: 'shaun',
    //age: 30,
    speak(text: string): void {
      console.log(text);
    },
    spend(amount: number): number {
      console.log('I spent ', amount);
      return amount;
    },
  };
  
  console.log(me);
  me.speak('hello, world');
  
  const greetPerson = (person: IsPerson): void => {
    console.log('hello ', person.name);
  }
  
  greetPerson(me);
  //greetPerson({name: 'shaun'});