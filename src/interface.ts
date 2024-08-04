// Interfaces are similar to type aliases, except they only apply to object types.

interface shape{
    width:number,height:number
}

interface Rectangle extends shape{
    color:string
}

const rectangle: Rectangle = {
    width:200,
    height:200,
    color:"red"
}

console.log(rectangle);

