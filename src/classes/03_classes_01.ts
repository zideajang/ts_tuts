/**
 * 

// class Tut{}
class Tut{
    title = "";
    lesson = 0;
}

const machine_learning_tut = new Tut();
machine_learning_tut.title = "machine leaerning tut";
//error TS2322: Type 'string' is not assignable to type 'number'.
machine_learning_tut.lesson = "12";

console.log(machine_learning_tut) //Tut { title: 'machine leaerning tut', lesson: 12 }

**/




/**
class Employee{
    readonly position:string = "employee"
    name!:string;
    constructor(name:string,otherPosition?:string){
        if(otherPosition !== undefined){
            this.position = otherPosition;
            this.name = name;
        }
    }
    intro(){
        //Cannot assign to 'name' because it is a read-only property.ts(2540)
        // this.position = "overide name field value"
    }
}

const mike = new Employee("mike");
//Cannot assign to 'position' because it is a read-only property.ts(2540)
// mike.position = "overide name field valu"
**/

interface CanDoSomethingInterface{
    canDoSomething():void;
    lang:string;
}

class Employee{
    private _name:string
    constructor(name:string,public age:number){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName:string){
        this._name = newName;
    }
}

class Team{
    public members:Developer[];

}

class Developer extends Employee implements CanDoSomethingInterface{
    public lang = "java"
    
    canDoSomething():void{
        console.log(`${this.name} can write some code`)
    }
}

const mike = new Developer("mike",28)
// mike.name = "tony"
// console.log(mike.name)
mike.canDoSomething() //mike can write some code

function work(developer:CanDoSomethingInterface):void{
    developer.canDoSomething();
}

work(mike)

interface Sendable{
    send(msg:string):boolean;
}

interface Receivable{
    receive():void;
}

class EMail implements Sendable,Receivable{
    send(msg:any){
        return true;
    }
    receive():void{

    }
}

const eMail = new EMail();
eMail.send("a email")
