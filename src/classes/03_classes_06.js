// function add(num1:number,num2:number):number{
//     return num1 + num2;
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
// add('abc',[])
var Greet = /** @class */ (function () {
    function Greet() {
        this.name = "name";
    }
    return Greet;
}());
var ClsDemo;
(function (ClsDemo) {
    var Tut = /** @class */ (function () {
        function Tut(title, lesson) {
            this.title = title;
            this._lesson = lesson;
        }
        Tut.prototype.description = function () {
            return "title:" + this.title + ", lesson:" + this._lesson;
        };
        Object.defineProperty(Tut.prototype, "lesson", {
            get: function () {
                return this._lesson;
            },
            set: function (newLesson) {
                this._lesson = newLesson;
            },
            enumerable: false,
            configurable: true
        });
        return Tut;
    }());
    var VideoTut = /** @class */ (function (_super) {
        __extends(VideoTut, _super);
        function VideoTut() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VideoTut.prototype.description = function () {
            return "video Tut " + _super.prototype.description.call(this);
        };
        return VideoTut;
    }(Tut));
    var tut = new VideoTut("machine learning", 12);
    console.log(tut.lesson);
    tut.lesson = 16;
    console.log(tut.lesson);
    // tut.lesson = 16
    console.log(tut.description());
})(ClsDemo || (ClsDemo = {}));
