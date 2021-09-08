var myObject = {
    sayHello: function () {
        return this.helloWorld();
    }
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld: function () {
        return 'hello world';
    }
});
console.log(myObject.sayHello());
