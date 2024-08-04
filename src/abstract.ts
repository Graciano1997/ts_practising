abstract class Poligon{
    abstract getArea():number;
    public toString():string {
        return `The Poligon Area is [Area=${this.getArea()}]`;
    }
}

class triangle extends Poligon{
    public constructor(protected width:number, protected height:number){
        super();
    }

    public getArea(): number {
        return this.width*this.height/2;        
    }
}

const tri=new triangle(50,20);

console.log(tri.toString());