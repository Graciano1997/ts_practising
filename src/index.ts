import { sum } from "./operation";

const first: any =document.querySelector('#first');
const second: any=document.querySelector('#second');

const calcForm=document.querySelector('#calcForm');
const plusBtn=document.querySelector('#plus');
const subBtn=document.querySelector('#minus');
const multBtn=document.querySelector('#time');
const divBtn=document.querySelector('#devide');
const result: any=document.querySelector('#result');

plusBtn?.addEventListener('click',()=>{

    if((<number>first.value) && (<number>second.value)){
        const resul:number=sum(<number>first.value,<number>second.value);
        result.textContent=resul;
        console.log(resul);

    }
})

calcForm?.addEventListener('submit',(el)=>{
el.preventDefault();
});