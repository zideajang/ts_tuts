// type TutOptions = Partial<Tut>
// interface TutOptions{
//     title?:string;
//     lesson?:number;
// }
class Tut {
    update(tut) {
        Object.assign(this, tut);
    }
}
let machineLearningTut = new Tut();
machineLearningTut.title = "machine learning";
machineLearningTut.lesson = 12;
machineLearningTut.update({
    lesson: 16
});
console.log(machineLearningTut.lesson);
// logger.log("")
// Reacord behavior
//
// let myTitle:string = "Machine Learning tut";
let subTitle = "machine leanring subtitle";
// TypeScript is able to infer types from its context, so that you don't always need to explicitly state the tyep of everything.
//Think of TypeScript type inference as a helping friend trying to save you time and make you more productive
let myLesson = 12;
const myTitle = "Machine leairng"; //type Machine learning
const tutLesson = 12; //type 12
const isCompleted = true; //type true
const createAt = new Date(); // type Date
// TypeScript will use the information available and try to constraint types as much as it can. this is called type contraint
// Narrow is a good thing. Narrow types lead to more type safety and can be really useful
// 
let myName = "mike";
let attr;
// Type Alias
//# sourceMappingURL=demo_01.js.map