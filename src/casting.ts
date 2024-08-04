let xx: string ="Hello";

let ss=(<string>xx);

console.log((xx as string).toUpperCase());
console.log(typeof(ss));

//force Casting ...
// console.log(((xx as unknown) as number).length);