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
var ClassesDemoTwo;
(function (ClassesDemoTwo) {
    var Tut = /** @class */ (function () {
        function Tut() {
        }
        Tut.prototype.description = function () {
            console.log(" hello , " + this.getName());
        };
        return Tut;
    }());
    //Cannot create an instance of an abstract class.
    // const tut = new Tut();
    var VideoTut = /** @class */ (function (_super) {
        __extends(VideoTut, _super);
        function VideoTut() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VideoTut.prototype.getName = function () {
            return "video tutorial";
        };
        return VideoTut;
    }(Tut));
    var Tensor1 = /** @class */ (function () {
        function Tensor1() {
            this.size = 0;
            this.arr = [];
        }
        return Tensor1;
    }());
    var Tensor2 = /** @class */ (function () {
        function Tensor2() {
            this.size = 0;
            this.arr = [];
        }
        return Tensor2;
    }());
    var tensor = new Tensor2();
    var Layer = /** @class */ (function () {
        function Layer() {
        }
        return Layer;
    }());
    var ConvLayer = /** @class */ (function () {
        function ConvLayer() {
        }
        return ConvLayer;
    }());
    var layer = new ConvLayer();
})(ClassesDemoTwo || (ClassesDemoTwo = {}));
