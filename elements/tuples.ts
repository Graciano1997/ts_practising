const pessoaTuple: [string,number,string]=["Graciano",1,"Hosana"];

pessoaTuple[0]="Graciano Manuel Henrique";
pessoaTuple.push("Madara Uchia");
pessoaTuple.push("Gra Sama");
console.log(pessoaTuple);

//Readonly

let director: readonly [string,number,string]=["Gra",12,"Madara"];
console.log(director);

// director[0]="Madara";


// Named tuple 
const graph: [x: number, y:number]=[20,12];

//Descructing tuple.....

const [x,y]=graph;
console.log(x);
console.log(y);