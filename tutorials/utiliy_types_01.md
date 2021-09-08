TypeScript 提供了几个实用类型，对原有类型进行变换从而得到新的类型，有点类似特定功能函数，接收一个类型或者多个类型作为输入，输出一个新的类型。



> 感觉 Typescript 提供深度，而且你可以在了解 JavaScript 基础上，由浅入深地去了解 TypeScript 



大家可能都认为 `JavaScript` 过于简单，闭包、原型链以及高阶函数什么什么玩起来，没啥难度，不够过瘾。现在有了 TypeScript，可以满足你的要求了。可能我是肤浅了，不过暂时我看了一些 Typescript ，感觉有些内容还真的无法一下理解，可能 JavaScript 对我太熟悉了吧。设计复杂并不等于合理，我们来看一看 TypeScript 给我们提供这套 Type 解决方案是否可行有效，是不是针对一些大规模开发的痛点而设计的。



### Type 实用方法

在 TypeScript 提供多种多样的对于类型进行操作的方法，或者可以说是对类型进行转换的方法。在现有类型基础上通过操作提供一个新的类型。



### `Partial<Type>`

基于现有的类型来创建一个类型，将将原有类型的所有属性设置为可选。也可以理解为现有类型的所有子集的类型，通过一个例子来解释一下帮助大家理解。



```ts
interface Tut{
    title:string;
    content:string;
}

const updateTut = (tut:Tut,updatedTut:Tut)=>{
    return {...tut,...updatedTut}
}

const tut_1:Tut = {
    title : "machine learning",
    content : "machine learning content",
}

const update_tut:Tut = {
    title:"update machine learning",
    content:"update machine leanring content"
}

const updated_tut = updateTut(tut_1,update_tut)
console.log(updated_tut)
```



上面代码我们用`interface` 定义了接口 `Tut` ，可以为类型，接下来定义一个函数`updateTut` 接受两个`Tut` 类型的参数，函数要做的事就是用第二参数来更新第一个参数。因为如果两个参数类型如果都是接口 `Tut` 那么每一个参数都需要实现接口的所有属性和方法。

```js
{
  title: 'update machine learning',
  content: 'update machine leanring content'
}
```



如果我们仅想用第 2 参数某一个属性来更新第一个参数，但是因为都需要是 `Tut` 类型，接口具有一定约束，需要实现接口或者说是接口类型的变量需要实现一下接口定义属性，接下来就可以用这个 `Partial<Type>`，`Partial<Type>`类型表示第 2 参数可以仅实现接口 Tut 一部分，只要给出要更新的属性即可。



```ts
const updateTut = (tut:Tut,updatedTut:Partial<Tut>)=>{
    return {...tut,...updatedTut}
}
```



这里 `...` 解构符号，这样就可以用 `updatedTut` 来更新 `tut`

```ts
const updated_tut = updateTut(tut_1,{
    content:"update machine leanring content"
})
console.log(updated_tut)
```





```js
{
  title: 'machine learning',
  content: 'update machine leanring content'
}
```



### `Required<Type>`

上面介绍的 `Partial` 可以是说先严后款，不过和其相反的操作也就是这个 `Required` 这是一个先宽后严的操作。情况是定义接口时，接口的属性和方法是可选的。其实有时候感觉 TypeScript 提供很多方法来实现同一个功能，有时候需要放开一点，有时候又要严谨一些，对于类型控制是一张一弛，提供了对类型丰富的控制。



```ts
interface Article{
    title?:string;
    text?:string;
}

const machine_learning_article:Article = {title:"machine leanring"}
// Property 'text' is missing in type '{ title: string; }' but required in type 'Required<Article>'.ts(2741)
// demo_02.ts(3, 5): 'text' is declared here.
const deep_learning_article:Required<Article> = {title:"deep learning",text:"deep learning"}
```



### `Readonly<Type>`

使用 `Readonly<Type>`  对类型进行转换时，可以发现该类类型属性一旦赋值后，就无法改变了。

```ts
const machine_learning_article:Readonly<Article> = {title:"machine leanring"}
```



```ts
// Cannot assign to 'title' because it is a read-only property.ts(2540)
machine_learning_article.title = "updated machine learning"
```



Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

定义一个对象类型，其属性键类型是 `Keys`，其属性值类型是 `Type`。这个工具可以用来将一个类型的属性映射到另一个类型。

```ts
interface TutInfo{
    title:string;
    lesson:number;
}

type TutCategoryName = "programming" | "machineleanring" | "codetools"

const tuts: Record<TutCategoryName, TutInfo> = {
    programming:{title:"basic python programming", lesson:12},
    machineleanring:{title:"basic python programming", lesson:12},
    codetools:{title:"basic python programming", lesson:12},
}
```



### `Pick<Type, Keys>`

`Pick` 类型就是在现有的类型上选择几个属性来得到一个新类型，这个新的类型是现有类型的一个子集。这个操作类似从一个限定。

```ts
interface Tut{
    title:string;
    lesson:number;
    completed:boolean;
    description:string;
}

type TutPreview = Pick<Tut, "title" | "description" | "completed" >;

const tut:TutPreview = {
    title:"machine learning",
    description:"machine leanring",
    completed:false,
}
```





### `Omit<Type, Keys>`

这个操作可以理解为 ·`Pick`  的逆操作，也就是从现有类型中排除 Keys 得到新的类型。

```ts
type TutPreview2 = Omit<Tut, "lesson">;

const tut2:TutPreview2 = {
    title:"deep learning",
    description:"deep leanring",
    completed:false,
}
```



### `Record<Keys,Type>`

Keys 是键值，Type 是键值对应的类型。

```ts
const rec:Record<string,number> = {
    machineLearningTut:12,
    deepLearningTut:16,
}

const tuts: Record<string,Tut> ={
    MachineLearningTut:{
        title:"machine learning tut",
        isCompleted:true
    },
    DeeplearningTut:{
        title:"deep leanring tut",
        isCompleted:false
    }
}
```





### `NonNullable<Type>`

```ts
const A: string = null;
```



```ts
const A: NonNullable<string | number | null> = null;
```



### `ReturnType<Type>`

```ts
function setLevelTut(id: number, level: NonNullable<TutProperties['level']>){
    return{
        id,
        level
    }
}
```



下面定义了 2 类分别是 Car 和· User ，这两个类都有 `deleted` 属性和 `deleted()` 方法，在重构代码时候，就是要发现这些可以改进的方面，就是从这些有改进余地的方面下手。



```ts
class Car{
    deleted:boolean;
    delete(){}
    constructor(public name:string){}
}
```



```ts
class User {
    deleted:boolean;
    delete(){}
    constructor(public name:string){}
}
```



```ts
type Constructable<ClassInstance> = new (...args:any[])=> ClassInstance;
```



```ts
function Detetable<BaseClass extends Constructable<{}>>(Base:BaseClass){
    return class extends Base{
        deleted:boolean;
        delete(){}
    }
}
```





因此，让我们想象一下，你有几个班。比方说，它只是一些像



你想创建一个函数，接受一个类作为参数，并在此基础上返回类的实例。 最好的方法是使用  `typescript` 泛型。





如果我们这样使用它，我们会得到一个错误，即类型没有构造签名。

为什么会这样呢？

这是因为，当你定义某个变量或参数为某个类的类型时，你的意思实际上是这个变量必须是给定类的实例。

那么，我们怎样才能告诉typescript我们需要类的构造函数呢？

我们可以用new () => Type或者{ new(): 类型 }
