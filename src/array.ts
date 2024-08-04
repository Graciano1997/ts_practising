let names: string[]=[];

names.push("Graciano Manuel Henrique");
names.push("Maria Prata");
names.push("Hosana");
names.push("Worm");
names.pop();
console.log(names);

let pai: readonly string[]=["Graciano Henrique"];
// pai.push("Adilson");

console.log(pai);

//Infered type

let escolas: string[]=[];
escolas.push("Dom Jaca");
escolas.push("Dom Jaca");
escolas.push("Iba");
// escolas.push(15);

console.log(escolas);

