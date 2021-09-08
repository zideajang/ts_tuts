class User{
    name:string
}

// function greet(name:any):any{
//     return `hello ${name}`
// }

// console.log(greet("mike"))

function greet<Type>(name:Type):Type{
    return name
}

let output =  `greet ${greet<string>("mike")}`
console.log(output)