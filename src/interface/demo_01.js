/**
 * 接口更多时候一种契约，通过这个契约可以行为接受者通过契约来调用实现了契约的类
 * 的方法，可想而知契约中是不会定义私有的属性和方法的
 */
var EMail = /** @class */ (function () {
    function EMail(title, address) {
        this.title = title;
        this.address = address;
        this.currentTime = new Date();
    }
    EMail.prototype.send = function (address, title) {
        console.log("send " + this.title + " email to " + this.address);
    };
    return EMail;
}());
function print(str, fn) {
    fn(str);
}
function printToConsole(s) {
    console.log(s);
}
print("hello function", printToConsole);
