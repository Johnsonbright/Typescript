"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = require("../classes/invoice");
//class 
const inOne = new invoice_1.Invoice('Mario', 'work on mario website ', 250);
const inTwo = new invoice_1.Invoice('Ife', 'work on ife website ', 300);
console.log(inOne, inTwo);
let invoices = [];
invoices.push(inOne, inTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// The DOM & Type Casting
// const anchor = document.querySelector('a')!;
// // if (anchor) {
// //     console.log(anchor.href); 
// // }
// // console.log(anchor.href)
// //classes
// //form
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// //input
// const type = document.querySelector('#type')! as HTMLSelectElement;
// const toForm = document.querySelector('#tofrom')! as HTMLInputElement;
// const details = document.querySelector('#details')! as HTMLInputElement;
// const amount = document.querySelector('#amount')! as HTMLInputElement;
// form.addEventListener('submit', (e:Event)=> {
//     e.preventDefault();
//     console.log(
//         type.value,
//         toForm.value,
//         details.value,
//         amount.valueAsNumber
//     );
// })
