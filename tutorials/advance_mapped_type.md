### Mapped Types are like functions that work on types



虽然 TypeScript 为我们 JavaScript 提供类型系统，可以定义类型来达到不同 developers 之间信息传递。但是我们不希望定义过多类型，还是希望能够适当控制类型产生。



> 有的时候我们发文章时候，总是想做到大而全，当然是好事，不过这还是需要时间，一个提升过程。当然不排除有些人上来就可以写的很好，但是我相信这样人毕竟是少数。自己现在回头看自己文章，错别字、不通顺、逻辑上问题比比皆是，今天写相对于自己是有进步，这是自己一点关于写作的一点心得而已。



```ts
type TutOptions = Partial<Tut>

class Tut{
    title:string;
    lesson:number;
    update(tut:TutOptions){
        Object.assign(this, tut)
    }
}

let machineLearningTut = new Tut();
machineLearningTut.title = "machine learning";
machineLearningTut.lesson = 12;

machineLearningTut.update({
    lesson:16
})

console.log(machineLearningTut.lesson)
```

- 定义一个类 Tut ，定义 2 个属性为 title 和 lesson 分别是 string 和 number 类型。其中定义方法用于更新 Tut。
- `update` 方法接收一个参数类型类型为`TutOptions` 也就是 `Tut` 部分属性，这是之前已经介绍过的内容
- 其实这里就是下面的简写

```ts
interface TutOptions{
    title?:string;
    lesson?:number;
}
```

接下来我们来具体实现一下，看看如何实现一个自己的 `Partial`



```ts
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

type TutOptions =  MyPartial<Tut>;
```



- `type MyPartial<T>` 创建一个新的类型(type)
- T 基于类型 T 
- `[P in keyof T]` 表示遍历类型 T 所有的属性
- `?:` 表示这些属性是可选的



接下里我们进一步来看一看，这里在原有 T 类型定义一个该 T 属性可选类型，然后在此类型上追加一个属性 `timestamp`。

```ts
type TimestampPartial<T> = {
    [P in keyof T]?: T[P];
}&{timestamp:Date}

type TutWithTimestamp = TimestampPartial<Tut>
```

通过 Nullable 操作符可以将类型 T 的每一个属性 P 添加一个 `null`可选类型

```ts
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
}
```

`Myreadonly` 这里 `MyReadonly<T>` 是一个生成类型的函数接受一个类型返回一个新的类型。`Writable<T>` 类型 

```ts
type MyReadonly<T> = {
    readonly[P in keyof T]:T[P];
}

type Writable<T> = {
    -readonly [P in keyof T]: T[P];
}
```



```ts
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type levelTut = MyPick<Tut, "title"|"description">
```



### Conditonal Types let you choose between types based on a condition



我们来认识一下什么是 TypeScript ，TypeScript 可以理解为 

- JavaScript + **latest features** +** syntactic sugar**
- JavaScript that scales

The Type system is what makes TypeScript **Type**Script

当然能够把 type 放到 script 前面说明这个语言中 type 多么重要，除了 type 还有一下有点

- Sub-second feedback 
- detailed error message 这个是让我们比较舒服，就是错误定位信息很详细，这是我个人比较喜欢 TypeScript 原因
-  smart completion，因为有了 type 信息，coding 时候自动补当然少不了
- Semantic code navigation
- smart refactoring
- automatic code fixes



#### 目标

Learn how to leverage the type system to be more awesome



Type Annotations extra bits of info to help TypeScript understand your code 

super fast feedback when you do something dumb



一切问题都在编译过程暴露，并且的得意解决。在 2017 年 TypeScript 正式成为 Google 官方语言之一。



- Tsickle - TS to closure
- clutz - closure to d.ts
- Tsetse - extend TSC with conformance checks

`.tscongfig`

common style guide Same Bias for strictness 

### Basic Type