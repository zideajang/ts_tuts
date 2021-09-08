interface MyObject {
    sayHello():void;
}

interface MyObjectThis{
    helloWorld():string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello(){
        return this.helloWorld();
    }
}

myObject.sayHello = myObject.sayHello.bind({
    helloWorld(){
        return 'hello world'
    }
})

console.log(myObject.sayHello())