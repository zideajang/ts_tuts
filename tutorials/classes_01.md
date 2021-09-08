#### 阅读提示

- 对 Typescript 中类继承(extends)和实现(implement)的区分给出解释和说明



在面向对象编程中，最核心的就是 class 概念，在 ES2015 中，javascript 已经引入的 class 关键词。不过今天我们来看一看 typescript 中如何对 JavaScript 的类的补充。



TypeScript 提供了对 ES2015 中引入的 class 关键词的完全支持。与其他 JavaScript 语言功能一样，TypeScript 增加了类型注释和其他语法，允许你表达类和其他类型之间的关系。



### 定义类

类是将**数据结构**和一些可以操作和访问数据的行为组织在一起，具有一定封闭性。并且提供方法供用户访问和操作数据。

应用程序是数据结构加算法组织一起，例如数据结构时数组，遍历数组，数组求和，数据结构和操作数据的方法组织起来就是类。

#### 定义一个类

下面我们定义一个类 `class` 并不含任何内容。虽然会涉及到用 TypeScript 创建类的一些基本方面，但其语法大多与用 JavaScript 创建类时相同。所以本将重点放在介绍 TypeScript 中的一些与 JavaScript 不同之处。

```js
class Tut{}
```



#### 类的属性

在类里面可以声明属性并指定类型，默认属性为 `public` 也就是可读写的属性。

```ts
// class Tut{}
class Tut{
    title:string;
    lesson:number;
}

const machine_learning_tut = new Tut();
machine_learning_tut.title = "machine leaerning tut";
machine_learning_tut.lesson = 12;

console.log(machine_learning_tut) //Tut { title: 'machine leaerning tut', lesson: 12 }

```

属性声明时为属性指定类型是可选的，如果没有指定类型属性类型为 `any`

```ts
class Tut{
    title = "";
    lesson = 0;
}

const machine_learning_tut = new Tut();
machine_learning_tut.title = "machine leaerning tut";
//error TS2322: Type 'string' is not assignable to type 'number'.
machine_learning_tut.lesson = "12";
```

这里给属性进行进行了初始化，编译器会根据属性的初始值推断该属性类型，如果随后对该属性赋值不同于初始化值类型的值就会包编译错误，无法通过编译。

> 如果在编译时指定 `strictPropertyInitialization` 为 `true` 这需要在构造函数初始化变量时给出初值。

```json
{
    "compilerOptions": {
      ...
      "strictNullChecks":true,
      "strictPropertyInitialization":true,
    }
}
```


```ts
class Greeter{
    name:string
}
```
因为 `"strictPropertyInitialization":true` 而没有定义 `Greeter` 对于 `name` 属性给出初值编译时则会抛出下面错误信息。

```tsx

Property 'name' has no initializer and is not definitely assigned in the constructor.
```



请注意， 因为`"strictPropertyInitialization":true`该字段需要在构造函数本身中初始化。TypeScript 不会分析你从构造函数中调用的方法来检测初始化，因为子类类可能会覆盖这些方法而无法初始化成员。

如果打算在构造函数以外为属性赋值，可以使用确定的赋值断言操作符(definite assignment assertion operator)！。



```ts
class Greeter{
    name!:string
}
```



```ts
class Employee{
    name:string
    constructor(name:string,public age:number){
        this.name = name;
    }
}

const mike = new Employee("mike",28)
console.log(mike.age)
```





#### 私有属性

```ts
class VideoTut extends Tut{
    private title:string
    constructor(title:string){
        //'super' must be called before accessing 'this' in the constructor of a derived class.ts(17009)
        // console.log(this.category)
        super()
        this.title = title
    }
}

const videoTut = new VideoTut("machine learning");
// Property 'title' is private and only accessible within class 'VideoTut'
console.log(videoTut.title)
```

当将 `title` 用 `private` 修饰符修饰后该属性就成为了私有属性，外界无法访问。当试图访问时，就会抛出`Property 'title' is private and only accessible within class 'VideoTut'`错误。



#### 只读属性(readonly)

如果类中属性前面有 `readonly` 修饰符，该属性值就只能在类的构造函数里进行修改。

```js
class Employee{
    readonly position:string = "employee"
    name!:string;
    constructor(name:string,otherPosition?:string){
        if(otherPosition !== undefined){
            this.position = otherPosition;
            this.name = name;
        }
    }
    intro(){
        //Cannot assign to 'name' because it is a read-only property.ts(2540)
        this.position = "overide name field value"
    }
}

const mike = new Employee("mike");
//Cannot assign to 'position' because it is a read-only property.ts(2540)
mike.position = "overide name field valu"
```

#### 构造函数(Constructors)

类构造函数与函数非常相似。可以添加带有类型注释的参数、默认值和重载。

```ts
class Tut{
    title:string;
    subTitle:string;

    constructor(title:string,subTitle:string){
        this.title = title;
        this.subTitle = subTitle
    }
}
```



构造函数重载，虽然构造函数也是函数，所以构造函数的重载也就是复合函数的重载。

```ts
class Tut{
    public title:string;
    public subTitle:string;

    constructor();
    constructor(title:string);
    constructor(title:any,subTitle?:any);
    constructor(title?:string,subTitle?:string){
        this.title = title;
        this.subTitle = subTitle;
    }
}
```



类的构造函数签名和函数签名之间只有一些区别。

- 构造函数不能有类型参数--这属于外层类的声明，有关这部分内容将在后面介绍。
- 构造函数不能有返回类型注释，构造函数将返回类的实例类型。



#### Super 调用

```ts
class Tut {
    category:string ="programming"
}

class VideoTut extends Tut{
    constructor(){
        //'super' must be called before accessing 'this' in the constructor of a derived class.ts(17009)
        console.log(this.category)
        super()
    }
}
```

这里`VideoTut` 继承了



#### 类的方法

在类内部定义函数被称为方法，方法可以使用与函数相同，并无明显区别。

```ts
class VideoTut extends Tut{
    private title:string;
    constructor(title:string){
        //'super' must be called before accessing 'this' in the constructor of a derived class.ts(17009)
        // console.log(this.category)
        super();
        this.title = title;
    }

    description():string{
        return `title: ${this.title}`
    }
}


const videoTut = new VideoTut("machine learning");
videoTut.description()//title: machine learning
```



#### getters/setters

通过定义 set/get 方法我们可以设置一个属性访问设置，通过 set/get 外界可以访问或者修改一些类私有属性，但是无法修改修饰为 `readonly` 的属性。

```ts
class Employee{
    private _name:string
    constructor(name:string,public age:number){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName:string){
        this._name = newName;
    }
}

const mike = new Employee("mike",28)
console.log(mike.name)//mike
```



TypeScript 对访问器有一些特殊的推理规则。

- 如果存在get，但没有set，则该属性自动是 readonly，如果在定义属性值已经指定了 `readonly` 则只有 `set` 方法
- 如果没有指定`setter`参数的类型，将从`getter`的返回类型中推断出来
- 获取器和设置器必须有相同的成员可见性

#### 索引签名
类可以声明索引签名；这些签名的作用与其他对象类型的索引签名相同。

### 继承和实现

#### extends

在大多数基于类的面向对象语言中，继承是一种机制，其中一个对象获得了父对象的所有属性和行为。继承允许程序员：创建建立在现有类之上的类

#### 实现(implements)

可以用 `implements` 语句去实现一个类，编译过程会检查实现了 `CanDoSomethingInterface` 接口的类 `Developer` 是否满足实现接口要求。如果没有实现接口定义的内容，编译过程就会提示错误。



```ts
interface CanDoSomethingInterface{
    canDoSomething():void;
}

class Employee{
    private _name:string
    constructor(name:string,public age:number){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName:string){
        this._name = newName;
    }
}

class Developer extends Employee implements CanDoSomethingInterface{

    canDoSomething():void{
        console.log(`${this.name} can write some code`)
    }
}

const mike = new Developer("mike",28)
// mike.name = "tony"
// console.log(mike.name)
mike.canDoSomething() //mike can write some code
```



通过继承，子类拥有其父类的所有属性和方法，可以覆写(实现)父类方法，也可以在父类基础扩展一些属性和方法。

#### 可以实现多个接口

```js
interface Sendable{
    send():void;
}

interface Receivable{
    receive():void;
}

class EMail implements Sendable,Receivable{
    send():void{

    }
    receive():void{
        
    }
}
```

对于一个类可以实现多个接口，上面 `EMail` 实现了 `Sendable`和`Receivable` 接口。看似接口实现和类继承很相似，但是这是两个不同的东西，首先接口更加抽象，很多语言将接口用 `contract` ，也是可以理解为类型，是一种基于行为或者数据的类型约束，或者契约，这个契约可以便于不同事物联系起来。



重要的是要明白， `implements` 子句只是检查类是否可以被当作接口类型，也就是检查该类是否实现了接口的方法。但不会改变类的类型或其方法。一个常见的错误来源是认为 `implements` 子句会改变类的类型。



在这个例子中，我们也许期望`s`的类型会受到 `check`的`name: string`参数的影响。其实不然--实现子句并没有改变类主体的检查方式或其类型的推断。

同样地，实现一个带有可选属性的接口并不能创建该属性。



#### 覆写方法

子类也可以覆写基类的一个字段或属性。可以使用 super.语法来调用基类的方法。`TypeScript`要求子类始终是其基类的一个子类型。

```js
class Employee{
  intro(){
    console.log("I am employee");
  }
}

class Developer extends Employee{
  intro(){
    super.intro();
    console.log("I'm a developer")
  }
}

const mike = new Developer()
mike.intro()
```



子类需要准寻其基类契约，所以子类可以作为基类类型来使用。

```js
    class Employee{
        intro(){
            console.log("I am employee");
        }
    }

    class Developer extends Employee{
        intro(name?:string){
            if(name == undefined){
                super.intro();
            }else{
                console.log(`I'm a developer and my name is ${name}`)
            }
            
            
        }
    }

    const mike:Developer = new Developer()
    mike.intro("mike")
```

如果在子类实现 `intro` 方法时没有遵循父类对 `intro`方法定义就是抛出错误。

```ts
intro(name:string)
```



```ts
Property 'intro' in type 'Developer' is not assignable to the same property in base type 'Employee'.
  Type '(name: string) => void' is not assignable to type '() => void'.ts(2416)
```



#### 初始化顺序



```js
    class Tut{
        level = "begin"
        constructor(){
            console.log(`level: ${this.level}`)
        }
    }

    class MachineLearningTut extends Tut{
        level = "advance" 
    }

    const tut = new MachineLearningTut()
    // level: begin
```



这里发生了什么？

按照 JavaScript的定义，类初始化的顺序是。

- 初始化基类的字段被
- 执行基类构造函数
- 初始化子类的字段
- 执行子类构造函数
这意味着基类构造函数在自己的构造函数中看到了基类的 name 值而不是子类的 name，因为子类的字段初始化还没有运行。

#### 继承内建类型

> 如果你不打算继承 Array、Error、Map 等内置类型，或者你的编译目标明确设置为 ES6/ES2015或以上，可以不去跳过下面内容。

在 ES2015 中，返回对象的构造函数隐含地替代了`super(...)`的任何调用者的this的值。生成的构造函
数代码有必要捕获super(...)的任何潜在返回值并将其替换为this。

因此，子类化Error、Array等可能不再像预期那样工作。这是由于Error、Array等的构造函数使用ECMAScript 6的new.target来调整原型链；然而，在ECMAScript 5中调用构造函数时，没有办法确保new.target的值。其他的下级编译器一般默认有同样的限制。

对于一个像下面这样的子类。



