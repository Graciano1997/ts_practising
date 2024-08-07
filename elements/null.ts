{
    let value: string | undefined | null=null;
    value='hello';
    value=undefined;
    console.log(value);
}

interface House{
    sqft:number;
    yard?:{
        sqft:number;
    };
}

function printHouseSize(house: House){
const yardSize=house.yard?.sqft;

if(yardSize==undefined){
console.log('No Yard');
}else{
    console.log(`The Yard Size is : ${yardSize}`);
}
}

let home: House ={
    sqft:500,
    yard:{
        sqft:20
    }
}

printHouseSize(home);

function printMiliage(miliage: number | null | undefined){
console.log(`Miliage: ${miliage??'Not Available'}`);
}

printMiliage(null);
printMiliage(undefined);
printMiliage(0);

function getValue(): string | undefined {
    return 'hello';
  }
  let valuee = getValue();
  console.log('value length: ' + valuee!.length);