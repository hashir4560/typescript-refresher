"use strict";
/* const anchor=document.querySelector('a')!;
 if(anchor){
    console.log(anchor.href);
    }
    
    console.log(anchor.href);*/
//Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes PKR${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on mario website", 40000);
const invTwo = new Invoice("luigi", "work on luigi website", 30000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoices);
// const form=document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const deatils = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, deatils.value, amount.valueAsNumber);
});
