namespace MemberVisibility{
    class Tut{
        // 
        protected title:string = "tutorial";

        public description(){
            console.log("description");
        }
        protected getName(){
            return "tut";
        }
    }

    const machine_learning_tut = new Tut();
    machine_learning_tut.description()

    class VideoTut extends Tut{
        title = "video tutorial"
        public upload(){
            console.log(`upload ${this.getName()}`)
        }
    }

    const videoTut = new VideoTut();
    console.log(videoTut.title) //video tutorial
    // videoTut.upload();
    // Property 'getName' is protected and only accessible within class 'Tut' and its subclasses.
    // videoTut.getName();

    const tut = new Tut()
    // tut.getName()
}

namespace ClassesDemo{
    class Tut{
        protected title:string = "title";
    }

    class TextTut extends Tut{
        protected title:string = "image and text tut"; 
    }

    class VideoTut extends Tut{
        fn1(other:Tut){
            other.title = "tutorial"
        }
        fn2(other:VideoTut){
            other.title = "vidoe tutorial"
        }
    }
}

namespace ClassesDemoOne{
    class Tut{
        private title = "tutorial"
    }

    const tut = new Tut()
    //Property 'title' is private and only accessible within class 'Tut'.ts(2341)
    // console.log(tut.title)
    console.log(tut['title'])
}