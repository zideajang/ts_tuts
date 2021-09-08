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
class Employee {
    constructor(name, otherPosition) {
        this.position = "employee";
        if (otherPosition !== undefined) {
            this.position = otherPosition;
            this.name = name;
        }
    }
    intro() {
        //Cannot assign to 'name' because it is a read-only property.ts(2540)
        this.position = "overide name field value";
    }
}
const mike = new Employee("mike");
//Cannot assign to 'position' because it is a read-only property.ts(2540)
mike.position = "overide name field valu";
//# sourceMappingURL=03_classes.js.map