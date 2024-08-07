interface Point {
    x:number,
    y:number
};

let pointPart:Partial <Point> = {};// `Partial` allows x and y to be optional

pointPart.x=500;
pointPart.y=500;

console.log(pointPart);

let pointPart1:Required <Point> = {x:20,y:100};

console.log(pointPart1);

interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  let myCar: Required <Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };

  console.log(myCar);


  const nameAgeMapping: Record <string,number>= {
    'age':27
}

console.log(nameAgeMapping);


interface Personn{
    name:string,
    age:number,
    location?:string
}

const gra:Omit <Personn, 'age' | 'location' >={
    name:"Graciano Manuel Henrique"
};

const Bob: Pick <Personn, 'name'>={
    name:"Bob Marley"
}


console.log(gra);
console.log(Bob);

type Primitive = string | number | boolean;
const values: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
