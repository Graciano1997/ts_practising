const car: {model:string,year:number,name:string}={
    model:"Corolla",year:2000,name:"Toyota"
};

console.log(car);

//optional properties

const volvo:{model:string,year?:number}={model:"Ferrari"}
volvo.year=2024;
console.log(volvo);

//Index signature...

const carro: {[index: string]: number}={};

carro.idade=25;

console.log(carro);