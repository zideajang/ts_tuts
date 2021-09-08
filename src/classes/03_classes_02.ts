namespace demo3{

    class Tut{
        public title:string;
        public subTitle:string;
    
        constructor();
        constructor(title:string);
        constructor(title:string,subTitle:string);
        constructor(title:any,subTitle:any);
        constructor(title?:string,subTitle?:string){
            this.title = title;
            this.subTitle = subTitle;
            
        }
        
    }
}


class MyItem {
    public name: string;
    public surname: string;
    public category: string;
    public address: string;

    constructor();
    constructor(name:string, surname: string, category: string, address?: string);
    constructor(name?: string, surname?: string, category?: string, address?: string) {
        this.name = name;
        this.surname = surname;
        this.category = category;
        this.address = address;
    }
}
