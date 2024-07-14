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
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let docs;
    if (type.value === 'invoice') {
        docs = new Invoice(...values);
    }
    else {
        docs = new Payment(...values);
    }
    list.render(docs, type.value, 'end');
});
// ENUMS
var resoureceType;
(function (resoureceType) {
    resoureceType[resoureceType["BOOK"] = 0] = "BOOK";
    resoureceType[resoureceType["AUTHOR"] = 1] = "AUTHOR";
    resoureceType[resoureceType["FILM"] = 2] = "FILM";
    resoureceType[resoureceType["DIRECTOR"] = 3] = "DIRECTOR";
    resoureceType[resoureceType["PERSON"] = 4] = "PERSON";
})(resoureceType || (resoureceType = {}));
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: 'yoshi', age: 67 });
console.log(doc1.age);
const doc3 = {
    uid: 1,
    resourceType: resoureceType.AUTHOR,
    data: { name: 'shayo' }
};
const doc4 = {
    uid: 2,
    resourceType: resoureceType.BOOK,
    data: ['bread', 'milk', 'toilet roll']
};
console.log(doc3, doc4);
//tuples
let tup = ['yoshi', 'bolanle', false, 50];
// the position of that data type is constant. it can not be changed to a different data type.
