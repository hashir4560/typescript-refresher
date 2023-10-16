/* const anchor=document.querySelector('a')!;
 if(anchor){
    console.log(anchor.href);
    }
    
    console.log(anchor.href);*/

//Classes
class Invoice{
    readonly client:string;
    private details:string;
    public amount:number;
    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }   
    format(){
        return `${this.client} owes PKR${this.amount} for ${this.details}`
    }
}

const invOne=new Invoice ("mario","work on mario website", 40000);
const invTwo=new Invoice ("luigi","work on luigi website", 30000);

let invoices:Invoice[]=[]
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv=>{
    console.log(inv.client,inv.amount,inv.format())
})

console.log(invoices);



// const form=document.querySelector('form')!;
const form =document.querySelector('.new-item-form')! as HTMLFormElement;
// console.log(form.children);

//inputs
const type=document.querySelector('#type') as HTMLSelectElement;
const toFrom=document.querySelector('#tofrom') as HTMLInputElement;
const deatils=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    console.log(
      type.value,
      toFrom.value,
      deatils.value,
      amount.valueAsNumber

    )
})