import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
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
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    if (type.value === 'invoice') {
        docs = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        docs = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(docs, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: 'yoshi', age: 67 });
console.log(doc1.age);
const doc3 = {
    uid: 1,
    resourceName: 'Person',
    data: { name: 'shayo' }
};
const doc4 = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
};
console.log(doc3, doc4);
