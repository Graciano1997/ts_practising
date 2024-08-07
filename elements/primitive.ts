let nome: string;
let idade: number;
let adulto: boolean;
let tel: number;
let dinheiro: any;
let morada: unknown;
let casado: undefined;
let cor: null = null;

nome="Graciano Manuel Henrique";
idade=20;
adulto=true;
tel=935636086;
dinheiro=2000;
casado=undefined;


console.log("Typeof morada:",typeof(morada));

morada="Luanda Cacuaco";
console.log(`Nome:${nome} Idade: ${idade}, Adulto: ${adulto} Tel.: ${tel} Estado Civil: ${casado}`);
console.log(`Type of Dinheiro:${typeof(dinheiro)}`);
console.log(`Dinheiro:${dinheiro}`);
dinheiro="Zerado";
console.log(`Dinheiro Actual:${dinheiro}`);
console.log(`Type of Dinheiro:${typeof(dinheiro)}`);
console.log(`Morada: ${morada}`);
console.log("Typeof morada:",typeof(morada));
console.log(`Cor: ${cor}`);