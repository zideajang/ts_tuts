### 类型成员可见性

#### public

如果类的成员变量，之前也叫做类的属性是 `public` 这可以任何位置都可以访问到该成员变量。



```js
namespace MemberVisibility{
    class Tut{
        public description(){
            console.log("description");
        }
    }

    const machine_learning_tut = new Tut();
    machine_learning_tut.description()
}

```



之前已经提及了如果一个类的成员变量默认是 `public` ，所以如果对于无需显式指定修饰符为`public`但是有时候出于风格或者可读性原因还是加上一个`public` 修饰符。



```js
	class Tut{
  	public description(){
    console.log("description");
        }
        protected getName(){
            return "tut";
        }
    }

    const machine_learning_tut = new Tut();
    machine_learning_tut.description()

    class VideoTut extends Tut{
        public upload(){
            console.log(`upload ${this.getName()}`)
        }
    }

    const videoTut = new VideoTut();
    videoTut.upload();
```



`protected` 的成员只对所声明的类的子类可见。无论是父类实例还是子类实例上都无法调用 `protected`，可见由 `protected` 所修饰的属性类和其子类内部可见。



```js
    videoTut.upload();
    // Property 'getName' is protected and only accessible within class 'Tut' and its subclasses.
    videoTut.getName();
```



子类需要遵循的基类一些约定，但可以选择 `public ` 来这包括将 `protected` 的成员设置为 `public`。



```js
    class Tut{
        // 
        protected title:string = "tutorial";

        public description(){
            console.log("description");
        }
        protected getName(){
            return "tut";
        }
    }

    const machine_learning_tut = new Tut();
    machine_learning_tut.description()

    class VideoTut extends Tut{
        title = "video tutorial"
        public upload(){
            console.log(`upload ${this.getName()}`)
        }
    }

    const videoTut = new VideoTut();
    console.log(videoTut.title) //video tutorial
```



像TypeScript类型系统的其他方面一样，private 和 protected 只在类型检查中被强制执行。其实在 JavaScript 的运行时结构，如in或简单的属性查询，仍然可以访问一个 `private` 或 `protected`成员。

```ts
    class Tut{
        private title = "tutorial"
    }

    const tut = new Tut()
    //Property 'title' is private and only accessible within class 'Tut'.ts(2341)
    console.log(tut.title)
```



```js
console.log(tut['title'])
```



```js
    class Tut {
        constructor() {
            this.title = "tutorial";
        }
    }
    const tut = new Tut();
    console.log(tut.title)
```



#### 类静态成员

我们都知道类的静态成员，包括变量和方法都属于类级别的成员变量和方法，而不属于该类的某一个实例，在类的具体实例是无法访问这些静态变量和静态方法的。

```ts
class Tut{
    static count = 0;
    constructor(){
        Tut.count++
    }
    static printCount(){
        console.log(`count: ${Tut.count}`)
        
    }
}
```

下面就来通过代码演示一下，这里分别实例化了 2 个 `Tut` 和一个 `Tut` 的子类 `VideoTut` ，要访问类的静态方法和静态属性，我们需要 `Tut` 类调用，在类具体实例上是无法访问到类的属性和方法

```ts
const machine_learning_tut = new Tut()
const deep_learning_tut = new Tut()
Tut.printCount()//2

class VideoTut extends Tut{}

const deep_learning_video_tut = new Tut()
Tut.printCount()//3

```



如果把类的静态变量或者方法调整为 `private`，则只有在类定义可以访问到该私有静态方法或者属性，在类定义以外也无法访问到 `count`这个属性。

因为自定义函数静态方法或者属性覆盖函数`prototype` 覆盖属性和名称是不安全的/不可能的。像`name`、`length`和`call`这样的函数属性都是保留字段，所以在对静态属性和方法进行命名需要避免使用这些保留名称。



#### 为什么 TypeScript 没有静态类

TypeScript中的类、方法和字段可以是抽象的。在抽象类至少需要一个没有实现的抽象方法或者抽象成员变量。因为有没有实现抽象方法或者抽象字段，所以抽象类不能实例化，抽象的作用是作为基类，要求继承这个抽象类的子类实现其中所有抽象方法。如果一个类中并不存在任何抽象成员，则这个类为实体类而非抽象类。

```ts
function doSomeTask(){
    console.log("do some task")
}

class Article{
    methodOfArticle(){
        doSomeTask()
    }
}
```



TypeScript（和JavaScript）没有像C#和Java那样有一个叫做静态类的结构。那么静态类通过只有一个实例的类，强制所有数据和方法都挂接在这个类上，但是在 TypeScript 可能并不需要，这是因为在 JavaScript/TypeScript 的普通对象就具有这样功能。所以在 JavaScript/TypeScript 并不需要静态类的结构。例如，不必提供`static class`语法来创建一个静态类，这是因为通常对于对象就可以实现静态类同等作用



#### 类泛型

类，和接口一样，可以是泛型的。当一个泛型类在 new 实例化时指定类型，其类型参数的推断方式与函数调用的方式相同。



```ts
class Article<T>{
    content:T
    constructor(content:T){
        this.content = content
    }

    description(){
        console.log(`${this.content}`)
    }
    
    
    methodOfArticle(){
        doSomeTask()
    }
    
}

const article = new Article<String>("machine learning");
article.description();
```



```ts
static defaultContent:T
```



>  请记住，为什么类的静态变量无法指定泛型，下面例子一看也就是为什么我们让静态成员变量接受一个泛型作为类型，因为类型在创建实例时动态指定， `Article.defaultValue`属性的类型只能够有一个。这意味着在创建一个实例时指定设置`Article<string>.defaultValue`（如果有可能的话）随后创建实例又会改变`Article<number>.defaultContent`,我们希望静态成员的类型是不变的。



```ts
const article1 = new Article<String>("machine learning");
article1.description();

const article2 = new Article<number>(12);
article1.description();
```



It’s important to remember that TypeScript doesn’t change the runtime behavior of JavaScript, and that JavaScript is somewhat famous for having some peculiar runtime behaviors.

重要的是要记住，TypeScript并没有改变 JavaScript 的运行时行为，而 JavaScript 因为有一些独特的运行时行为。



```ts
class MyClass {
    name = "MyClass";
    getName() {
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
```



长话短说，默认情况下，函数内`this` 具体表示什么值是取决于函数的调用方式。在这个例子中，因为函数是通过`obj` 引用调用的，所以 `this`值是`obj`而不是类实例。这很少是你希望发生的事情! TypeScript提供了一些方法来减轻或防止这种错误。



#### 箭头函数



如何经常会遇到这种情况，调用函数时丢失了函数的 ·`this` 这个上下文对象，为了 `this` 丢失可以通过箭头函数来代替普通函数来解决这个问题。



`call`、`apply`和 `bind`方法不适合箭头函数，因为它们被设计为允许方法在不同的作用域内执行。因为箭头函数根据箭头函数定义的作用域来定义 `this`。

```ts
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
```

需要做一些权衡

- 即使在没有 `TpyeScript` 对代码进行检测情况下，在运行时也需要保证`this`值保证正确地使用
- 这将占用更多的内存，因为类每一个实例都会拥有这种方式定义的方法的副本
- 无法在子类中使用`super.getName`，因为在原型链中没有条目可以获取基类方法



在类中，一个叫做`this`的特殊类型动态地指向当前类的类型。接下来，下面的例子中可以看到`modelType` 类型为 `Model3`。



```ts
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
```



`this` 也可以作为类方法的参数的类型使用



```ts
class Rect{
    width:number;
    height:number;

    constructor(w:number,h:number){
        this.width = w;
        this.height = h;
    }

    compareWith(other:this){
        
    }

}
```



这与写其他不同。Rect 的子类 Square 的 compareWith 方法现只接受的子类只是继承没否实现自己方法或定义自己的属性，例如`length:number = 0` 这是实例上调用 `compareWith` 方法就无法接受 `Rect` 的实例来作为参数

```ts
class Square extends Rect{
    length:number = 0
}

const rect = new Rect(12,15)

const square = new Square(12,12)

console.log(square.compareWith(rect))
```



#### 基于 `this` 类型检测















#### 抽象构造函数签名







#### 基于形状的继承

```ts
    class Tensor1{
        size = 0;
        arr = [];
    }
    class Tensor2{
        size = 0;
        arr = [];
    }

    const tensor:Tensor1 = new Tensor2()
```



