"use strict";
class Tut {
    constructor() {
        Tut.count++;
    }
    static printCount() {
        console.log(`count: ${Tut.count}`);
    }
}
Tut.count = 0;
const machine_learning_tut = new Tut();
const deep_learning_tut = new Tut();
Tut.printCount(); //2
class VideoTut extends Tut {
}
const deep_learning_video_tut = new Tut();
Tut.printCount(); //3
function doSomeTask() {
    console.log("do some task");
}
class Article {
    constructor(content) {
        this.content = content;
    }
    description() {
        console.log(`${this.content}`);
    }
    methodOfArticle() {
        doSomeTask();
    }
}
const article1 = new Article("machine learning");
article1.description();
const article2 = new Article(12);
article1.description();
class MyClass {
    constructor() {
        this.name = "MyClass";
        this.getName = () => {
            return this.name;
        };
    }
}
const c = new MyClass();
const obj = {
    name: "obj",
    getName: c.getName,
};
// Prints "obj", not "MyClass"
console.log(obj.getName());
class Car {
    constructor() {
        this.model = "";
    }
    set(model) {
        this.model = model;
        return this;
    }
}
class Model3 extends Car {
    clear() {
        this.model = "";
    }
}
const model_3 = new Model3();
const modelType = model_3.set("model 3"); // Model3
class Rect {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    compareWith(other) {
        return other.width == this.width && other.height == this.height;
    }
}
class Square extends Rect {
    constructor() {
        super(...arguments);
        this.lenght = 0;
    }
}
const rect = new Rect(12, 15);
const square = new Square(12, 12);
console.log(square.compareWith(rect));
//# sourceMappingURL=demo_01.js.map