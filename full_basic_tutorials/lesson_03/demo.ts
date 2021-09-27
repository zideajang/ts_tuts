

interface Greet{
    (name:string):string
}

const greet:Greet = (name)=> `hello ${name}`


type isComplete = boolean
type title = string
type greet = (name:string)=>string

type Tut = {
    title:string;
    isComplete:boolean
} 
// & {
//     isFree:boolean
// }

type VideoTut = Tut | {
    isFree:boolean
}

const machineLearningTut:VideoTut = {
    title:"machine learning title",
    isComplete:true,
    isFree:true
}

type onChaneType = (newValue:string)=>void

type InputType = 'text'|'email';

type InputValue = string

export type InputProps = {
    type:InputType;
    value:InputValue;
    onChane:onChaneType
}