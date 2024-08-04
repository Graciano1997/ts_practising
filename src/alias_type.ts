type carYear=number;
type carType=string;
type carModel=string;

type car={
    type:carType,
    model:carModel,
    year:carYear
};

let CarYear: carYear=2000;
let CarModel: carModel="2000";
let CarType: carType="Ferrari";

const Car: car={
    type:CarType,
    model:CarModel,
    year:CarYear
} ;

console.log(Car);