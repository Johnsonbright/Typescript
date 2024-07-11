// // let character = 'mario';

// // let age = 30;

// // let isBlackbelt = false;

// // isBlackbelt = true;

// // let num = 8;

// // const circ = (diameter : number) => diameter * Math.PI
// // console.log(circ(5))

// // let names = ['lois', 'mike', 'james'];
// // // names.push('vicky');
// // // names.push(3);

// // console.log(names);

// // let mixed = ['ken' , 6, 9, 'chun', true];
// // mixed.push('ryu');
// // mixed.push(89);
// // mixed[0] = 5;
// // console.log(mixed);

// // objects

// // let ninja = {
// //     name: 'mario',
// //     belt: 'belt',
// //     age: 45
// // };

// // ninja.age = 70;
// // ninja.name = 'rya';
// // // explicit types

// // let character : string;
// // let age: number;
// // let isLogged: boolean;

// // age = 30;
// // isLogged = false;
// // character = 'johnson';

// // // arrays
// // let ninjas: string[]= ['clerk'];
// // ninjas.push('Bob', 'femi')
// // console.log(ninjas);

// // union types
// // let mixed: (string|number|boolean)[] = [];
// // mixed.push('hello');
// // mixed.push(20);
// // mixed.push(false);
// // console.log(mixed);

// // let ninjaTwo: {
// //     name: string,
// //     age: number,
// //     approved: boolean,
// // }
// // ninjaTwo = {
// //     name: 'bolu',
// //     age: 5,
// //     approved: true
// // }

// // Dynamic (any);
// let age: any = 25;
// age = 'seun';
// console.log(age);
// age = {
//     name: 'peter',
//     car : 23,
// }
// console.log (age);

// let ninja : {name: any, age: any, car: boolean};
// ninja = {
//     name: 'deut',
//     age: 59,
//     car: true
// };
// console.log(ninja)
// // use ANY discreetly.

// console.log('test');
// console.log('drake jade')

// Function basics & void
// let greet : Function;
// greet = () => {
//     console.log('hello world')
// };

// let add = (a: number, b: number, c: number|string = 13) => {
// console.log (a + b )
// console.log(c)
// }
// add(4, 8, 'jude');

// const minus = (a: number, b:number, c: number|string ) => {
//     return a - b 
// };
// let result = minus(50, 9, 'oranges')
// console.log(result)

// Type Aliases
type StringorNum = string| number;
type objectWithName = {name: string, uid: string|number}

const logDetails = (uid: StringorNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greet = ( user: objectWithName) => {
    console.log(`${user.name} says hello`)
}
// Function Signature 
let greeT : (a: string, b: string) => void;

greeT = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
};

let calc : (a: number, b:number, c:string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
if(action === 'add'){
return numOne + numTwo;
}
else{
    return numOne - numTwo;
}
};

let logDetail: (obj:{name: string, age: number}) => void;

type person = {name:string, age: number};

logDetail = (ninja:person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}