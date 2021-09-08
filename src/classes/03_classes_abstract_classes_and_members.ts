
namespace ClassesDemoTwo{

    abstract class Tut{
        abstract getName():string;
        description(){
            console.log(` hello , ${this.getName()}`)
        }
    }
    //Cannot create an instance of an abstract class.
    // const tut = new Tut();
    class VideoTut extends Tut{
        getName():string{
            return "video tutorial"
        }
    }

    class Tensor1{
        size = 0;
        arr = [];
    }
    class Tensor2{
        size = 0;
        arr = [];
    }

    const tensor:Tensor1 = new Tensor2()

    class Layer {
        input_size:number;
        output_size:number;
    }

    class ConvLayer{
        input_size:number;
        output_size:number;
        kernel_size:number;
    }

    const layer:Layer = new ConvLayer();
}