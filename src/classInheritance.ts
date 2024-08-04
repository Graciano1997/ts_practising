interface Shape{
    getArea:()=>number;
}

class Rectangles implements Shape{
    public constructor(private width:number, private height:number){}

    public getArea(): number{
        return this.width*this.height;
}
}
const rectangl=new Rectangles(2,2);
console.log(`the Area ${rectangl.getArea()}`);