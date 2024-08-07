function getTime(): number {
    return new Date().getFullYear();
};

console.log(getTime());

//void

function greeting(): void{
    console.log("hello TS");
}

greeting();

function mult(a: number, b: number): number {
    return a*b;
};

function multi(a: number, b: number,c:number=4): number {
    return a*b* (c || 1);
};

console.log(`the Result is ${mult(2,4)}`);
console.log(`the Result is ${multi(2,2)}`);
console.log(`the Result is ${multi(2,2,2)}`);

// function devide({dividend, divisor}: {dividend: number, divisor: number}){
//     return dividend / divisor;

// }
// console.log(`the Result of /  is ${devide(10,2)}`);

//rest params

const sum  =(a:number,b:number,...rest:number[]): number=>{
    return a + b + rest.reduce((a,b)=>a+b,0);
};

console.log(sum(1,1,1));

//Function Aliases

type Negate=(value:number)=> number;

const modules: Negate=(value: number) => value*-1;
console.log(modules(5));