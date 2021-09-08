// type TutOptions = Partial<Tut>
// interface TutOptions{
//     title?:string;
//     lesson?:number;
// }

type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

type TutOptions =  MyPartial<Tut>;

class Tut{
    title:string;
    lesson:number;
    description:string;
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

type TimestampPartial<T> = {
    [P in keyof T]?: T[P];
}&{timestamp:Date}

type TutWithTimestamp = TimestampPartial<Tut>

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
}

type MyReadonly<T> = {
    readonly[P in keyof T]:T[P];
}

type Writable<T> = {
    -readonly [P in keyof T]: T[P];
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type levelTut = MyPick<Tut, "title"|"description">

// logger.log("")
// Reacord behavior
//

// let myTitle:string = "Machine Learning tut";
let subTitle = "machine leanring subtitle"

// TypeScript is able to infer types from its context, so that you don't always need to explicitly state the tyep of everything.
//Think of TypeScript type inference as a helping friend trying to save you time and make you more productive

let myLesson = 12;
const myTitle = "Machine leairng" //type Machine learning
const tutLesson = 12; //type 12
const isCompleted = true; //type true
const createAt = new Date(); // type Date

// TypeScript will use the information available and try to constraint types as much as it can. this is called type contraint
// Narrow is a good thing. Narrow types lead to more type safety and can be really useful


// 

let myName:"mike" = "mike"
let attr:"height"|"width"

// Type Alias
