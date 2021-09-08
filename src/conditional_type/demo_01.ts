type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value:T){

    // type A = T extends boolean ? 'TYPE A' : T extends string ? 'TYPE B' : T extends number ? 'TYPE C' :     

    const someOtherFunction = (someArg: T extends boolean ?'TYPE A':'TYPE B' ) => {
        const a:'TYPE A' | 'TYPE B' = someArg;
    };
    return someOtherFunction;
}

const result = someFunction(true);
console.log(result)


type StringOrNot<T> = T extends string ? string : never;
