interface Article{
    title?:string;
    text?:string;
}

// const machine_learning_article:Readonly<Article> = {title:"machine leanring"}
// Property 'text' is missing in type '{ title: string; }' but required in type 'Required<Article>'.ts(2741)
// demo_02.ts(3, 5): 'text' is declared here.
// const deep_learning_article:Required<Article> = {title:"deep learning",text:"deep learning"}

// Cannot assign to 'title' because it is a read-only property.ts(2540)
// machine_learning_article.title = "updated machine learning"

// interface Tut{
//     title:string;
//     lesson:number;
//     completed:boolean;
//     description:string;
// }

// type TutPreview = Pick<Tut, "title" | "description" | "completed" >;

// const tut:TutPreview = {
//     title:"machine learning",
//     description:"machine leanring",
//     completed:false,
// }

// type TutPreview2 = Omit<Tut, "lesson">;

// const tut2:TutPreview2 = {
//     title:"deep learning",
//     description:"deep leanring",
//     completed:false,
// }






// type TutCategoryName = "programming" | "machineleanring" | "codetools"

// const tuts: Record<TutCategoryName, TutInfo> = {
//     programming:{title:"basic python programming", lesson:12},
//     machineleanring:{title:"basic python programming", lesson:12},
//     codetools:{title:"basic python programming", lesson:12},
// }

// const programmingTut:tuts.programming = {

// }
// console.log("hello ")
// console.log(tuts.programming)


// Advanced Type Mapped Types