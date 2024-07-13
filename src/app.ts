import {Invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HardFormatter } from './Interfaces/HardFormatter.js';

let docOne: HardFormatter;
let docTwo: HardFormatter;

docOne = new Invoice('yoshi', 'web work', 456);
docTwo = new Payment('mario', 'plumbing work', 300);

let docs: HardFormatter[] = [];
docs.push(docOne)
docs.push(docTwo)
console.log(docs)

// The DOM & Type Casting
const anchor = document.querySelector('a')!;

// if (anchor) {
//     console.log(anchor.href); 
// }
// console.log(anchor.href)
//classes



//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

//input
const type = document.querySelector('#type')! as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault();
    
    let docs: HardFormatter;
    if(type.value === 'invoice'){
        docs= new Invoice (toFrom.value, details.value, amount.valueAsNumber)
    }
    else {
        docs = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

 list.render(docs, type.value, 'end')
});

