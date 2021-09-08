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
var MemberVisibility;
(function (MemberVisibility) {
    var Tut = /** @class */ (function () {
        function Tut() {
            // 
            this.title = "tutorial";
        }
        Tut.prototype.description = function () {
            console.log("description");
        };
        Tut.prototype.getName = function () {
            return "tut";
        };
        return Tut;
    }());
    var machine_learning_tut = new Tut();
    machine_learning_tut.description();
    var VideoTut = /** @class */ (function (_super) {
        __extends(VideoTut, _super);
        function VideoTut() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = "video tutorial";
            return _this;
        }
        VideoTut.prototype.upload = function () {
            console.log("upload " + this.getName());
        };
        return VideoTut;
    }(Tut));
    var videoTut = new VideoTut();
    console.log(videoTut.title); //video tutorial
    // videoTut.upload();
    // Property 'getName' is protected and only accessible within class 'Tut' and its subclasses.
    // videoTut.getName();
    var tut = new Tut();
    // tut.getName()
})(MemberVisibility || (MemberVisibility = {}));
var ClassesDemo;
(function (ClassesDemo) {
    var Tut = /** @class */ (function () {
        function Tut() {
            this.title = "title";
        }
        return Tut;
    }());
    var TextTut = /** @class */ (function (_super) {
        __extends(TextTut, _super);
        function TextTut() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = "image and text tut";
            return _this;
        }
        return TextTut;
    }(Tut));
    var VideoTut = /** @class */ (function (_super) {
        __extends(VideoTut, _super);
        function VideoTut() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VideoTut.prototype.fn1 = function (other) {
            other.title = "tutorial";
        };
        VideoTut.prototype.fn2 = function (other) {
            other.title = "vidoe tutorial";
        };
        return VideoTut;
    }(Tut));
})(ClassesDemo || (ClassesDemo = {}));
var ClassesDemoOne;
(function (ClassesDemoOne) {
    var Tut = /** @class */ (function () {
        function Tut() {
            this.title = "tutorial";
        }
        return Tut;
    }());
    var tut = new Tut();
    //Property 'title' is private and only accessible within class 'Tut'.ts(2341)
    // console.log(tut.title)
    console.log(tut['title']);
})(ClassesDemoOne || (ClassesDemoOne = {}));
