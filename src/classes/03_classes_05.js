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
var Demo5;
(function (Demo5) {
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Employee.prototype.intro = function () {
            console.log("I am employee");
        };
        return Employee;
    }());
    var Developer = /** @class */ (function (_super) {
        __extends(Developer, _super);
        function Developer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Developer.prototype.intro = function (name) {
            if (name == undefined) {
                _super.prototype.intro.call(this);
            }
            else {
                console.log("I'm a developer and my name is " + name);
            }
        };
        return Developer;
    }(Employee));
    var mike = new Developer();
    mike.intro("mike");
    // console.log("111")
    var Tut = /** @class */ (function () {
        function Tut() {
            this.level = "begin";
            console.log("level: " + this.level);
        }
        return Tut;
    }());
    var MachineLearningTut = /** @class */ (function (_super) {
        __extends(MachineLearningTut, _super);
        function MachineLearningTut() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.level = "advance";
            return _this;
        }
        return MachineLearningTut;
    }(Tut));
    var tut = new MachineLearningTut();
    // level: begin
})(Demo5 || (Demo5 = {}));
