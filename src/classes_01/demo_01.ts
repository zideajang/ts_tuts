class Tut {
    private static count = 0;
    constructor() {
        Tut.count++
    }
    static printCount() {
        console.log(`count: ${Tut.count}`)

    }
}

const machine_learning_tut = new Tut()
const deep_learning_tut = new Tut()
Tut.printCount()//2

class VideoTut extends Tut { }

const deep_learning_video_tut = new Tut()
Tut.printCount()//3

function doSomeTask() {
    console.log("do some task")
}

class Article<T>{
    // static defaultContent:T
    content: T
    constructor(content: T) {
        this.content = content
    }

    description() {
        console.log(`${this.content}`)
    }


    methodOfArticle() {
        doSomeTask()
    }

}

const article1 = new Article<String>("machine learning");
article1.description();

const article2 = new Article<number>(12);
article1.description();



class MyClass {
    name = "MyClass";
    getName = () => {
        return this.name;
    }
}
const c = new MyClass();
const obj = {
    name: "obj",
    getName: c.getName,
};

// Prints "obj", not "MyClass"
console.log(obj.getName());

class Car{
    model:string = ""
    set(model:string){
        this.model = model
        return this
    }
}

class Model3 extends Car{
    clear(){
        this.model = ""
    }
}

const model_3 = new Model3()
const modelType = model_3.set("model 3") // Model3

class Rect{
    width:number;
    height:number;

    constructor(w:number,h:number){
        this.width = w;
        this.height = h;
    }

    compareWith(other:this){
        return other.width == this.width && other.height == this.height
    }

}

class Square extends Rect{
    lenght:number = 0
}

const rect = new Rect(12,15)

const square = new Square(12,12)

// console.log(square.compareWith(rect))



class BaseComponent{
    private x = 0;
}

const component  = new BaseComponent()
// component.x

class CustomBaseComp extends BaseComponent{
    showSomething(){
        console.log(this.x)
    }
}
