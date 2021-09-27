### 如何定义泛型

泛型，即“参数化类型”。 泛型的本质是为了参数化类型(将类型参数化传递)（在不创建新的类型的情况下，通过泛型指定的不同类型来控制形参具体限制的类型）。 也就是说在泛型使用过程中，操作的数据类型被指定为一个参数，这种参数类型可以用在类、接口和方法中，分别被称为泛型类、泛型接口、泛型方法。

介绍 TypeScript 的泛型

```ts
type numArray = Array<number>
```
上面定义一个类型 `numArray` 其中 `Array<number>` 一对尖角括号内部给出类型就是泛型的定义，定给定 `number` 就是 `number[]` 当给定 `string` 就是 `string[]`


```ts
const last = (nums:Array<number>)=>{
    return nums[nums.length - 1]
}

const l1 = last([1,2,3])
```
上面定义了一个函数 `last` 接受数组参数 `Array<number>` 这里数组元素为 number 类型，然后返回数组的最后一个元素所以当鼠标移动到 `l1` 提出类型 `const l1: number`。


为增强泛化能力，我们希望函数 last 可以接受任意元素类型的数组，例如可以接受一个有`string`类型元素组成的数组。

```ts
const l2 = last(['a','b','c'])
```

当然可以将数组元素类型定义为`any` 不过这样返回最后一个元素类型也变成了 `any` 其实这样是不推荐的

```ts
const last = (nums:Array<any>)=>{
    return nums[nums.length - 1]
}

const l1 = last([1,2,3])
const l2 = last(['a','b','c'])
```
定义 last 函数接受参数类型为 `Array<any>` 返回类型为 `const l2: any` 其实根据输入数组类型元素是 `string` 或者是 `number` 返回值类型其实确定而不应该再是 `any`，其实并不推荐使用 `any` 这样我们就失去了一些类型信息例如 `l1` 和 `l2` 给出类型提示都是 `any` 其实他们类型在给定类型元素组成数组后应该是确定的。也就是当输入数组是由类型为 `string` 元素组成数组，返回值类型就应该是 `string`。

解决上面问题好的方式是使用泛型

```ts
const last = <T>(nums:T[])=>{
    return nums[nums.length - 1]
}

const l1 = last([1,2,3])
const l2 = last(['a','b','c'])
```
这里通过在添加`<T>` 来定义泛型，这里`T` 表示泛型，`const l2: string`

```ts
const last = <T>(nums:T[]):T=>{
    return nums[nums.length - 1]
}

```
```ts
const l1 = last([1,2,3])
```

```
const last: <number>(nums: number[]) => number
```
其实 TS 编译器在编译过程进行类型推断，所以无需显式(如下)指定`T` 为 `string` 来指定类型，当然也可以显示指定类型

```ts
const l2 = <string>last(['a','b','c'])
```

### 定义两个泛型

```ts
const makeArr = (x:number)=>[x]

const arr1 = makeArr(5)
```
```ts
const arr2 = makeArr('a')
```

```ts
const makeArr = <T>(x:T)=>[x]

const arr1 = makeArr(5)
const arr2 = makeArr('a')
```
也可以定义多个泛型，例如下面实现一个有两个元素组成数组，为每个元素指定一个类型。

```ts
const makeArr = <T,U>(x:T,y:U)=>[x,y]

const arr1 = makeArr(5,3)
const arr2 = makeArr('a','b')
const arr3 = makeArr(3,'b')
```

```ts
const arr3 = makeArr<string|null,number>(null,5)
```
调用函数如何泛型指定不完全会报编译错误，这是可以在定义函数时给某一个泛型一个默认值

```ts
const arr3 = makeArr<string|null>(null,5)
```

也可以指定泛型 `U` 默认的类型为 `number`

```ts
const makeArr = <T,U=number>(x:T,y:U)=>[x,y]
```

### 泛型的约束

```ts
const makeFullTitle = (obj) =>{
    return{
        ...obj,
        fullTitle:obj.title + ' ' + obj.subTitle
    }
}
```

```ts
const makeFullTitle = (obj) =>{
    return{
        ...obj,
        fullTitle:obj.title + ' ' + obj.subTitle
    }
}

const tut = makeFullTitle({
    title:"machine learning",
    subTitle: "for beginer"
})

console.log(tut)
```

```ts
export const makeFullTitle = <T extends {title:string; subTitle:string;}>(obj:T) =>{
    return{
        ...obj,
        fullTitle:obj.title + ' ' + obj.subTitle
    }
}

const tut = makeFullTitle({
    title:"machine learning",
    subTitle:"hello world"
})

console.log(tut)
```

```ts
const tut1: {
    title: string;
    subTitle: string;
} & {
    fullTitle: string;
}
```

```ts
interface Tab<T> {
    id:string;
    position:number;
    data:T
}
```

