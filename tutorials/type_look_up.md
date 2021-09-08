今天介绍一下  look up 功能，翻译过来是搜索意思，也就是在现有类型通过搜索方式来得到一个新的类型。这样做的好处是什么，也就是我们为什么需要 look up  功能，

TypeScript 提供强大的类型系统，但是需要注意，有类型自然很好，有了类型，还需要合理利用类型，但是如果滥用类型可能导致更多的问题，所以需要合理使用类型，既需要类型又需要控制类型数量。类型复用性可以减少维护。所以引入 look up  查询方式来提升类型的复用。

简单总结一下 look up  出现解决什么样问题，也就是其存在的意义，很简单就是避免定义过多类型，提高类型复用率，同时便于维护，减少复用和易于维护是一个相辅相成的。

```tsx
'use strict'
type UserId = number;

```

通过 `type` 关键字可以定义一个类型，在 TypeScript 定义一个类型，例如 `UserId` 这个类型定义基本类型 number，当然也可以通过定义一个接口来表示类型。

```ts
interface Category {
    name:string;
    description:string;
}

```
其实` type` 和`interface` 大多数情况下是通用，但是在以下两种情况只能用` type` 而不能使用` interface`，有关这一点在最近面试中被问到
-` type` 可以声明基本类型别名，联合类型，元组等类型
-` type` 语句中还可以使用` typeof` 获取实例的 类型进行赋值

也可以通过接口来定义一个类型，`interface` 也就是定义一个契约，契约开看成动作接受者和动作的发起者之间调用之间一个契约。



```ts
// 
interface Tut{
    id:number;
    title:string;
    category:{
        name:string;
        description:string
    }
}
```

下面就是在现有类型基础上，通过 look up 方法来获取想要的类型赋值给新的` type`。

```ts
type CategoryName = Tut['category']['name']
type IdOrName = Tut['id' | 'title']
```
- 这里 `categoryName` 类型为 string 类型，使用从 Tut 类型搜索 category 中 name  而得到的
- IdOrName 表示可以是 `Tut['id']` 也可以是 `Tut['title']` 类型

下面这个函数 `updateCategory` 接受·`tut` 的 `id` 类型一个类别，这里没有重新来定义 `type` 而是在现有类型基础上通过 `look up` 得到类型作为参数类型。 

```ts
function updateCategory(id:Tut['id'],cate:Tut['category']){}
```


```ts
type TutProperties = keyof Tut
```
通过 `keyof`  将 `Tut` 的属性，作为类型

```ts
let tutProperty:TutProperties = 'id'
let someString:string = tutProperty
```



```ts
function getProperty<T, K extends keyof T>(obj:T,key:K){
    return obj[key];
}
```
`getProperty` 获取一个对象的指定属性的属性值，参数类型将对象类型限定为  `T` 类，将第 2 参数限制为该对象中所有属性，`K` 该 `T` 类型中出现属性的集合，` T`  表示类型，方法就是返回该对象的属性的值。

```ts
let tut = {
    title:'machine learning',
    lesson:12,
}
```

接下来介绍对 `document` 添加一个事件监听器，当监听事件类型为 `click` ，鼠标移动到` e` 上就会显示事件对象一些信息，这时当鼠标移动到 `e` 对象后得到 `mouseClick` ，而当事件监听类型`keyboardPress`，这时如果鼠标再次移动到 `e` 上，得到不同的提示。

```ts
const tutTitle = getProperty(tut,'title')
console.log(tutTitle) 

document.addEventListener('click',(e)=>{});
```

接下来自定义几个 `Event` 事件，`MyMouseEvent` 、`MyKeyboardEvent` 和 `MyEventObjects`。 

```ts
interface MyMouseEvent {
    x:number;
    y:number;
}
```
这里定义了 `MyMouseEvent` 事件类型，其中` x` 和 `y` 表示鼠标在浏览器上坐标。

```ts
interface MyKeyboardEvent{
    key:string;
}
```
这里定义接口 `MyKeyboardEvent` 键盘类型，这个键盘事件类型，其中 `key` 表示按的是哪个一个键。

定义 `MyEventObjects` 类型，定义 `MyEventObjects` 接口，接口中 `click` 属性对应于 `MyMouseEvent` 类型而 `keypress` 对应于 `MyKeyboardEvent` 类型

```ts
interface MyEventObjects {
    click: MyMouseEvent;
    keypress:MyKeyboardEvent;
}
```

定义一个方法 `handleEvent` 可以 `K` 为 `MyEventObjects` 的属性值也是范围是 `click` 或者 `keypress` 也就是事件名称取值范围。

```ts
function handleEvent<K extends keyof MyEventObjects>(eventName:K,callback:(e:MyEventObjects[K])=>void){

}
handleEvent('click',(e)=>{})
handleEvent('keypress',(e)=>{})
```
然后根据点击事件类型，是 `MyKeyboardEvent` 还是 `MyKeyboardEvent`，`e` 的类型提出不同提示，提示具体数据类型，这是一个 look up 的具体实现。

