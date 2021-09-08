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
var Tut = /** @class */ (function () {
    function Tut() {
        this.category = "programming";
    }
    return Tut;
}());
var VideoTut = /** @class */ (function (_super) {
    __extends(VideoTut, _super);
    function VideoTut(title) {
        var _this = 
        //'super' must be called before accessing 'this' in the constructor of a derived class.ts(17009)
        // console.log(this.category)
        _super.call(this) || this;
        _this.title = title;
        return _this;
    }
    VideoTut.prototype.description = function () {
        return "title: " + this.title;
    };
    return VideoTut;
}(Tut));
var videoTut = new VideoTut("machine learning");
videoTut.description(); //title: machine learning
// Property 'title' is private and only accessible within class 'VideoTut'
// console.log(videoTut.title)
