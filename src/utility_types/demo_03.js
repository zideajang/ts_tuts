// interface Tut{
//     title:string;
//     isCompleted:boolean
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JohnsDrink;
JohnsDrink = 'coffee';
// let JanesDrink:Exclude<AvailableDrinks,DrinksJaneDesentLike>
var JanesDrink;
function Detetable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype["delete"] = function () { };
        return class_1;
    }(Base));
}
// class Car{
//     deleted:boolean;
//     delete(){}
//     constructor(public name:string){}
// }
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var User = /** @class */ (function () {
    // deleted:boolean;
    // delete(){}
    function User(name) {
        this.name = name;
    }
    return User;
}());
var DetetableCar = Detetable(Car);
var DetetableUser = Detetable(User);
var car = new DetetableCar("toyota");
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());
var profile = new Profile();
profile.user = new DetetableUser('mike');
// const A: string = null;
var A = null;
//
function setLevelTut(id, level) {
    return {
        id: id,
        level: level
    };
}
setLevelTut(1, null);
