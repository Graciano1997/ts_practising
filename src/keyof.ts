// keyof is a keyword in TypeScript which is used to extract the key type from an object type.

interface Persons{
    names: string;
    age: number;
}

function printPersonProperty(person: Persons, property: keyof Persons){
    console.log(`The Person ${ property} is ${person[property]}`);
}

let persons ={
    names:"Graciano Henrique",
    age:27
}

printPersonProperty(persons,"age");