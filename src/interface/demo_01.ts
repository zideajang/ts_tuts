interface Sendable{
    currentTime:Date;
    send(address:string,title:string):void
}
/**
 * 接口更多时候一种契约，通过这个契约可以行为接受者通过契约来调用实现了契约的类
 * 的方法，可想而知契约中是不会定义私有的属性和方法的
 */






class EMail implements Sendable{
    currentTime:Date = new Date();
    constructor(public title:string, public address:string){

    }
    send(address:string, title:string):void{
        console.log(`send ${this.title} email to ${this.address}`);
    }
}

interface EMailConstructor{
    new (title:string,address:string):EMailConstructor;
}

function print(str:string, fn:(str:string)=>void):void{
    fn(str);
}

function printToConsole(s: string) {
    console.log(s);
}

print("hello function",printToConsole);

