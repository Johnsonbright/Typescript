import { Invoice } from '../classes/invoice.js';
const me = {
    name: `shaun`,
    age: 50,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('i spent ', amount);
        return amount;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
//class 
const inOne = new Invoice('Mario', 'work on mario website ', 250);
const inTwo = new Invoice('Ife', 'work on ife website ', 300);
console.log(inOne, inTwo);
let invoices = [];
invoices.push(inOne, inTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
