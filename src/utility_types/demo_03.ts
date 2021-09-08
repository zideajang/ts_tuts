// interface Tut{
//     title:string;
//     isCompleted:boolean
// }

// const updateTut=(id:number, tut:Tut) => {}
// const updateTut=(id:number, tut:Partial<Tut>) => {}

// const rec:Record<string,number> = {
//     machineLearningTut:12,
//     deepLearningTut:16,
// }

// const tuts: Record<string,Tut> ={
//     MachineLearningTut:{
//         title:"machine learning tut",
//         isCompleted:true
//     },
//     DeeplearningTut:{
//         title:"deep leanring tut",
//         isCompleted:false
//     }
// }




// type TutTitleOnly = Pick<Tut,"title">
type TutWithoutTitle = Omit<Tut,"title">

type AvailableDrinks = 'coffee' | 'Tea' | 'Orange Juice' | 'Lemonade'

let JohnsDrink: AvailableDrinks;
JohnsDrink = 'coffee';
type DrinksJaneDesentLike = 'coffee' | 'Orange Juice';
type DrinksJaneLike = 'Tea' | 'Lemondae' | 'Mohito'
// let JanesDrink:Exclude<AvailableDrinks,DrinksJaneDesentLike>
let JanesDrink:Exclude<AvailableDrinks,DrinksJaneLike>
// JanesDrink = 'Tea'


//strictNullChecks
// function setLevelTut(id: number, level: NonNullable<TutProperties['level']>){}
// strictNullChecks
// setLevelTut(1,undefined);



type SetLevelTutReturn = ReturnType<typeof setLevelTut>

// InstanceType<T>

type Constructable<ClassInstance> = new (...args:any[])=> ClassInstance;

function Detetable<BaseClass extends Constructable<{}>>(Base:BaseClass){
    return class extends Base{
        deleted:boolean;
        delete(){}
    }
}

// class Car{
//     deleted:boolean;
//     delete(){}
//     constructor(public name:string){}
// }

class Car{
    constructor(public name:string){}
}

class User {
    // deleted:boolean;
    // delete(){}
    constructor(public name:string){}
}

const DetetableCar = Detetable(Car)
const DetetableUser = Detetable(User)

const car = new DetetableCar("toyota");
// car.deleted

type DeletableUserInstance = InstanceType<typeof DetetableUser>

class Profile{
    user: DeletableUserInstance
}

const profile = new Profile();
profile.user = new DetetableUser('mike')

// ThisType<T>


interface TutProperties {
    level?: 'begin' | 'media' | 'advance';
}

// const A: string = null;
const A: NonNullable<string | number | null> = null;


//
function setLevelTut(id: number, level: NonNullable<TutProperties['level']>){
    return{
        id,
        level
    }
}

setLevelTut(1,null);