// type numArray Array<number>
var last = function (nums) { return nums[nums.length - 1]; };
// const last = <T>(nums:T[]):T=>{
//     return nums[nums.length - 1]
// }
// const l1 = last([1,2,3])
// const l2 = <string>last(['a','b','c'])
// const makeArr = <T,U=number>(x:T,y:U)=>[x,y]
// const arr1 = makeArr(5,3)
// const arr2 = makeArr('a','b')
// const arr3 = makeArr<string|null>(null,5)
// export const makeFullTitle = <T extends {title:string; subTitle:string;}>(obj:T) =>{
//     return{
//         ...obj,
//         fullTitle:obj.title + ' ' + obj.subTitle
//     }
// }
// const tut1 = makeFullTitle({
//     title:"machine learning",
//     subTitle:"hello world"
// })
// console.log(tut1)
// interface Tab<T> {
//     id:string;
//     position:number;
//     data:T
// }
// type HomeTab = Tab<number>;
// const homeTab:HomeTab = {
//     id:'home',
//     position:1,
//     data:1
// }
// const addUID = (obj:object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}
// }
// let tutOne = addUID({title:'machine learning',lesson:12});
// console.log(tutOne)
