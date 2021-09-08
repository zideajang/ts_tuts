class Tut {
    category:string ="programming"

}

class VideoTut extends Tut{
    private title:string;
    constructor(title:string){
        //'super' must be called before accessing 'this' in the constructor of a derived class.ts(17009)
        // console.log(this.category)
        super();
        this.title = title;
    }

    description():string{
        return `title: ${this.title}`
    }
}


const videoTut = new VideoTut("machine learning");
videoTut.description()//title: machine learning


// Property 'title' is private and only accessible within class 'VideoTut'
// console.log(videoTut.title)
