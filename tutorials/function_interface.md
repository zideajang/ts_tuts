

程序中 Functions 感觉应该翻译功能或者方法而不是函数。函数是构成应用程序的主要部分，具有实现一定功能或者认为可以在一起执行个指令集合，具有自己一个执行的上下文，也就是有自己的作用域。在 javascript 可以用一个变量接受一个函数，那么也就是说明函数也是具有一定结构的，TypeScript有很多方法来描述如何调用函数。让我们来学习一下如何编写描述函数的类型。



```ts
function print(str:string, fn:(str:string)=>void):void{
    fn(str);
}

function printToConsole(s: string) {
    console.log(s);
}

print("hello function",printToConsole);
```

这里`(str:string)=>void` 这里定义了一个类型有点类似函数的声明。函数接受一个 string 类型参数，`=>void` 表示没有返回值。如果参数类型每特别指定就是 `any` 类型。



#### 调用签名(Call Signatures)

调用签名这个东东对于我来说是新词，之前没有接触过，所以想要了解了解，理解的可能偏差，希望大家指正批评。在 JavaScript 中 ，函数除了可调用还可以有属性。但是上面函数类型表达式的语法不允许声明属性，只有函数参数列表和返回值类型。想用属性来描述可调用的东西，可以在一个对象类型中写一个**调用签名**，这就是函数签名。

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```



注意，与函数类型表达式相比，语法略有不同--在参数列表和返回类型之间使用:而不是=>。

构造签名

JavaScript functions can also be invoked with the `new` operator. TypeScript refers to these as *constructors* because they usually create a new object. You can write a *construct signature* by adding the `new` keyword in front of a call signature:

JavaScript 函数也可以用 new 操作符来调用函数返回。TypeScript将这些称为构造函数，因为它们通常会创建一个新的对象。你可以通过在一个调用签名前面添加 new 关键字来编写一个构造签名。

```js
function Tut(title,lesson){
    console.log("do something");
    this.title = title;
    this.lesson = lesson
    this.methodOfTut = ()=>{
        console.log(this.lesson)
    }
}

const tut1 = new Tut("machine leanring",12);
console.log(tut1)
```





```ts
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```





Interfaces are capable of describing the wide range of shapes that JavaScript objects can take. In addition to describing an object with properties, interfaces are also capable of describing function types.

接口能够描述 JavaScript 对象可能的形状一个范围。接口除了通过具有什么属性来描述对象，接口还能用来描述函数类型，或者说函数的形状。

To describe a function type with an interface, we give the interface a call signature. This is like a function declaration with only the parameter list and return type given. Each parameter in the parameter list requires both name and type.

为了用接口来描述一个函数类型，我们给这个接口一个**调用签名**(call signature)。通过参数列表和返回类型来声明函数。参数列表中的每个参数都需要名称和类型。

```tsx
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

接口描述的是类的公共部分，而不是公共和私有部分。这就禁止你用它们来检查一个类是否也有特定的类型用于类实例的私有面。



类的静态侧和实例侧的区别

When working with classes and interfaces, it helps to keep in mind that a class has two types: the type of the static side and the type of the instance side. You may notice that if you create an interface with a construct signature and try to create a class that implements this interface you get an error:

在处理类和接口之间的关系时，有一点需要明确，那就是一个类有两种类型：静态的类型和实例的类型。可能已经注意到，如果你创建了一个带有**构造签名**的接口，并试图创建一个类来实现该接口的类，这样操作就会报错。这是因为当一个类实现了一个接口时，是检查该类是否已经实现了该接口的属性和方法，因为构造函数是静态的类型不在检查范围内，所以报错。



This is because when a class implements an interface, only the instance side of the class is checked. Since the constructor sits in the static side, it is not included in this check.

这是因为当一个类实现了一个接口时，只有该类的实例端被检查。由于构造函数位于静态侧，所以它不包括在这个检查中。

Instead, you would need to work with the static side of the class directly. In this example, we define two interfaces, ClockConstructor for the constructor and ClockInterface for the instance methods. Then, for convenience, we define a constructor function createClock that creates instances of the type that is passed to it:

相反，你需要直接处理类的静态部分。在这个例子中，我们定义了两个接口：用于构造函数的ClockConstructor和用于实例方法的ClockInterface。然后，为了方便起见，我们定义了一个构造函数createClock，用来创建传递给它的类型的实例。