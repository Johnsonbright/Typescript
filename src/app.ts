import {Invoice} from './classes/Invoice.js'
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

let values: [string, string, number];
   values = [toFrom.value, details.value, amount.valueAsNumber];
    
    let docs: HardFormatter;
    if(type.value === 'invoice'){
        docs= new Invoice (...values)
    }
    else {
        docs = new Payment(...values)
    }

 list.render(docs, type.value, 'end')
});

// ENUMS
enum resoureceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

const addUID = <T extends {name:string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
let doc1 = addUID({name: 'yoshi', age: 67});
console.log(doc1.age)

// with Interfaces
interface Resource<T> {
    uid: number;
    resourceType: resoureceType;
    data: T;
} 

const doc3 : Resource<object> = {
    uid : 1,
    resourceType: resoureceType.AUTHOR,
    data: {name: 'shayo'}
}

const doc4: Resource<string[]> = {
    uid: 2,
    resourceType: resoureceType.BOOK,
    data: ['bread', 'milk', 'toilet roll']
}
console.log(doc3, doc4);

//tuples
let tup: [string, string, boolean, number] = ['yoshi', 'bolanle', false , 50];
// the position of that data type is constant. it can not be changed to a different data type.