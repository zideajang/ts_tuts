function someFunction(value) {
    // type A = T extends boolean ? 'TYPE A' : T extends string ? 'TYPE B' : T extends number ? 'TYPE C' :     
    var someOtherFunction = function (someArg) {
        var a = someArg;
    };
    return someOtherFunction;
}
var result = someFunction(true);
console.log(result);
