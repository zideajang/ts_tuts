class Foo {};
class Bar {};
class Baz {};

// function create<T>(model: T): T{
//     return new model();
// }

function create<T>(model: new()=>T): T{
    return new model();
}

interface Point {
    x:number;
    y:number;
    new (x:number,y:number):Point
}

class MyPoint implements Point{
    x:number;
    y:number;
    constructor(x:number,y:number)=>{
        this.x = x;
        this.y = y;
        return this;
    }
}