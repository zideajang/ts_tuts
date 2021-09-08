namespace Demo5{
    class Employee{
        
        intro(){
            console.log("I am employee");
        }
    }

    class Developer extends Employee{
        intro(name?:string){
            if(name == undefined){
                super.intro();
            }else{
                console.log(`I'm a developer and my name is ${name}`)
            }
            
            
        }
    }

    const mike:Developer = new Developer()
    mike.intro("mike")
    // console.log("111")

    class Tut{
        level = "begin"
        constructor(){
            console.log(`level: ${this.level}`)
        }
    }

    class MachineLearningTut extends Tut{
        level = "advance" 
    }

    const tut = new MachineLearningTut()
    // level: begin

}


