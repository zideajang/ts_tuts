var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// function greet(name:any):any{
//     return `hello ${name}`
// }
// console.log(greet("mike"))
function greet(name) {
    return name;
}
var output = "greet " + greet("mike");
console.log(output);
