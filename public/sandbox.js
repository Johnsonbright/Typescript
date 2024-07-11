"use strict";
// // let character = 'mario';
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
// Function Signature 
let greeT;
greeT = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
