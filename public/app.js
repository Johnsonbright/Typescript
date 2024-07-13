import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 456);
docTwo = new Payment('mario', 'plumbing work', 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// The DOM & Type Casting
const anchor = document.querySelector('a');
// if (anchor) {
//     console.log(anchor.href); 
// }
// console.log(anchor.href)
//classes
//form
const form = document.querySelector('.new-item-form');
console.log(form.children);
//input
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    if (type.value === 'invoice') {
        docs = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        docs = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(docs);
});
// // Interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(b: number): number;
// }
// const me:IsPerson = {
//     name: `shaun`,
//     age: 50,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('i spent ' , amount);
//         return amount;
//     }, 
// };
// console.log(me);
// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// };
// greetPerson(me);
// //class 
// const inOne = new Invoice('Mario', 'work on mario website ', 250 );
// const inTwo = new Invoice('Ife', 'work on ife website ', 300 );
// console.log(inOne, inTwo);
// let invoices: Invoice[] = [];
// invoices.push(inOne, inTwo);
// console.log(invoices);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
