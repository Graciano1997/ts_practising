import { div, mult, sub, sum } from "./operation";

const first:any = document.querySelector('#first');
const second:any = document.querySelector('#second');

const calcForm=document.querySelector('#calcForm');
const plusBtn=document.querySelector('#plus');
const subBtn=document.querySelector('#minus');
const multBtn=document.querySelector('#time');
const divBtn=document.querySelector('#devide');
const result: any=document.querySelector('#result');

plusBtn?.addEventListener('click',()=>{
    if((first!==null) && (second!==null)){
        let n1:number=first.value;
        let n2:number=second.value;
        const resul:number=sum(n1,n2);
        result.textContent=resul;
    }
})

subBtn?.addEventListener('click',()=>{
    if((first!==null) && (second!==null)){
        let n1:number=first.value;
        let n2:number=second.value;
        const resul:number=sub(n1,n2);
        result.textContent=resul;
    }
})

multBtn?.addEventListener('click',()=>{
    if((first!==null) && (second!==null)){
        let n1:number=first.value;
        let n2:number=second.value;
        
        const resul:number=mult(n1,n2);
        result.textContent=resul;
    }
})

divBtn?.addEventListener('click',()=>{
    if((first!==null) && (second!==null)){
        let n1:number=first.value;
        let n2:number=second.value;
        const resul:number | string =div(n1,n2);
        result.textContent=resul;
    }
})

calcForm?.addEventListener('submit',(el)=>{
el.preventDefault();
});