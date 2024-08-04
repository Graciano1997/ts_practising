class Person{
   private readonly name: string;
    constructor(name:string){
        this.name=name;
    }

    getName(): string {
        return this.name;
    }
}

const uchia= new Person("Graciano Manuel Henrique");

console.log(uchia.getName());

class Persons {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person = new Persons("Jane");
console.log(person.getName());