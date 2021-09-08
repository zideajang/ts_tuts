var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const arr:numArr = ['a']
// const last = (arr:Array<Number>) => {
//     return arr[arr.length - 1];
// }
// const l2 = last(['a','b','c'])
var last = function (arr) {
    return arr[arr.length - 1];
};
var l2 = last(['a', 'b', 'c']);
var l = last([1, 2, 3]);
var makeArry = function (x, y) {
    return [x, y];
};
var pnt1 = makeArry(2, 3);
var arr1 = makeArry("machine leanring", 12);
var arr2 = makeArry("a", 5);
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
var makeFullDescription = function (obj) {
    return __assign(__assign({}, obj), { description: obj.title + ' ' + obj.lesson });
};
var tutOne = makeFullDescription({
    title: "machine learning",
    lesson: 12,
    subTitle: "machine learning sub title"
});
