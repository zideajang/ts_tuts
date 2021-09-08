type numArr = Array<number>;
// const arr:numArr = ['a']

// const last = (arr:Array<Number>) => {
//     return arr[arr.length - 1];
// }

// const l2 = last(['a','b','c'])

const last = (arr:Array<any>) => {
    return arr[arr.length - 1];
}

const l2 = last(['a','b','c'])
const l = last([1,2,3]);

const makeArry = <T,Y = number>(x:T, y:Y)=>{
    return [x,y]
}

const pnt1 = makeArry(2,3)
const arr1 = makeArry("machine leanring",12);
const arr2 = makeArry<string | null>("a",5);

// const makeFullDescription = (obj:{title:string; lesson:number}) => {
//     return {
//         ...obj,
//         description: obj.title + ' ' + obj.lesson
//     }
// }

// const bob = makeFullDescription({
//     title:"machine learning",
//     lesson:12,
// });

const makeFullDescription = <T extends {title:string; lesson:number}>(obj:T) => {
    return {
        ...obj,
        description: obj.title + ' ' + obj.lesson
    }
}

const tutOne = makeFullDescription({
    title:"machine learning",
    lesson:12,
    subTitle:"machine learning sub title"
});

// tutOne
interface Tab <T>{
    id: string;
    position: number;
    data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<String>;


