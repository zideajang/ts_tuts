namespace PartialDemoOne{

    interface Tut{
        title:string;
        lesson:number;
    }
    
    const updateTut = (id:number, tut:Partial<Tut>)=>{}
    
    updateTut(1,{
        title:'machine learning',
    })

    interface Tensor{
        size?:number;
        dim?:number
    }
    // Req
    const addTensor = (tensor:Required<Tensor>)=>{

    }

    addTensor({
        size:12,
        dim:12
    })
}