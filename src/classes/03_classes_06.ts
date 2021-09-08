
// function add(num1:number,num2:number):number{
//     return num1 + num2;
// }

// add('abc',[])

class Greet{
    name:string = "name"
}

namespace ClsDemo{

    

    // 
    type TutType = {
        title:string;
    }

    class Tut{
        // public/protected/private/readonly
        // 
        public title:string;
        private _lesson:number;

        constructor(title:string, lesson:number){
            this.title = title;
            this._lesson = lesson;
        }
        description(){
            return `title:${this.title}, lesson:${this._lesson}`;
        }

        get lesson(){
            return this._lesson
        }

        set lesson(newLesson:number){
            this._lesson = newLesson;
        }
    }

    class VideoTut extends Tut{
        description(){
            return `video Tut ${super.description()}`
        }
    }

    const tut:Tut = new VideoTut("machine learning",12);
    console.log(tut.lesson)
    tut.lesson = 16
    console.log(tut.lesson)
    // tut.lesson = 16
    console.log(tut.description())
}