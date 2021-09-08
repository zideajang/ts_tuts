## 泛型
有关泛型概念还是在开发 Android 时接触到，并广泛使用。泛型对于弱类型语言是一种限制，而对于静态语言是一种开发，所以有时候有些事物站在不同角度或者立场上来看并不相同—横看成岭侧成峰,远近高低各不同。


组件的一个好处就是重复使用，通常我们会把一些重复使用数据结构、UI 都可以用组件形式组织在一起，软件工程的一个主要部分是建立组件，这些组件可以提供一致的 API，

在像C#和Java这样的语言中，创建可重用组件的工具箱中的主要工具之一是泛型，也就是说，能够创建一个能够在各种类型上工作的组件，而不是单一的类型。这使得用户可以消费这些组件并使用他们自己的类型。



### 你好泛型

定义

```js
function greet(name:string):string{
    return `hello ${name}`
}

console.log(greet("mike"))
```



```js
function greet(name:any):any{
    return `hello ${name}`
}

console.log(greet("mike"))
```



虽然使用any当然是通用的，因为它将使函数接受arg类型的任何和所有的类型，但实际上我们在函数返回时失去了关于该类型的信息。如果我们传入一个数字，我们唯一的信息就是任何类型都可以被返回。

相反，我们需要一种方法来捕获参数的类型，以便我们也可以用它来表示返回的内容。在这里，我们将使用一个类型变量，这是一种特殊的变量，对类型而不是数值起作用。



```js
function greet<Type>(name:Type):Type{
    return name
}

let output =  `greet ${greet<string>("mike")}`
console.log(output)
```

