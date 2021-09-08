/**
 *

// class Tut{}
class Tut{
    title = "";
    lesson = 0;
}

const machine_learning_tut = new Tut();
machine_learning_tut.title = "machine leaerning tut";
//error TS2322: Type 'string' is not assignable to type 'number'.
machine_learning_tut.lesson = "12";

console.log(machine_learning_tut) //Tut { title: 'machine leaerning tut', lesson: 12 }

**/
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
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.age = age;
        this._name = name;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var Team = /** @class */ (function () {
    function Team() {
    }
    return Team;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lang = "java";
        return _this;
    }
    Developer.prototype.canDoSomething = function () {
        console.log(this.name + " can write some code");
    };
    return Developer;
}(Employee));
var mike = new Developer("mike", 28);
// mike.name = "tony"
// console.log(mike.name)
mike.canDoSomething(); //mike can write some code
function work(developer) {
    developer.canDoSomething();
}
work(mike);
var EMail = /** @class */ (function () {
    function EMail() {
    }
    EMail.prototype.send = function (msg) {
        return true;
    };
    EMail.prototype.receive = function () {
    };
    return EMail;
}());
var eMail = new EMail();
eMail.send("a email");
