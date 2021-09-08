// look up type in TypeScript
'use strict'
type UserId = number;
interface Category {
    name:string;
    description:string;
}

type customType = {
    name:string;
    doSomething:()=>{}
}

// const customer:customType = {
//     name:"machine learning"
//     // doSomething: ()=>{console.log("hello world")}
// }

// 
interface Tut{
    id:number;
    title:string;
    category:{
        name:string;
        description:string
    }
}

// look up type

type CategoryName = Tut['category']['name']
type IdOrName = Tut['id' | 'title']

function updateCategory(id:Tut['id'],cate:Tut['category']){}


type TutProperties = keyof Tut

let tutProperty:TutProperties = 'id'
let someString:string = tutProperty
// tutProperty = someString

function getProperty<T, K extends keyof T>(obj:T,key:K){
    return obj[key];
}

let tut = {
    title:'machine learning',
    lesson:12,
}

const tutTitle = getProperty(tut,'title')
console.log(tutTitle) 

document.addEventListener('click',(e)=>{

})

interface MyMouseEvent {
    x:number;
    y:number;
}

interface MyKeyboardEvent{
    key:string;
}

interface MyEventObjects {
    click: MyMouseEvent;
    keypress:MyKeyboardEvent;
}

function handleEvent<K extends keyof MyEventObjects>(eventName:K,callback:(e:MyEventObjects[K])=>void){

}

handleEvent('click',(e)=>{})
handleEvent('keypress',(e)=>{})