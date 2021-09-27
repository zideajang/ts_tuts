interface Tut{
    title:string
    isComplete:boolean
}

// interface  Tut{
//     isFree:boolean
// }

const machineLearningTut:Tut = {
    title:"machine learning basic",
    isComplete:true,
}

class VideoTut implements Tut{
    title:string;
    isComplete:boolean;
}