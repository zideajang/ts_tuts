// typeScript code

type FilterOut<T extends unknown[], F> = T extends [infer head,...infer tail]
    ? head extends F
    ? FilterOut<tail, F>
    : [head,...FilterOut<tail,F>]
    :[];

type Filtered = FilterOut<[1,2, null, boolean,3],null | boolean>;

// const a:FilterOut = [1,2,3]

let exampleAny: any;
let exampleUnkonwn: unknown;

exampleAny = 123;
exampleAny = 'hello Any';

exampleUnkonwn = 123;
exampleUnkonwn = 'hello Unkown';

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;

// type Exclude<T,U> T extends U? never : T;
type ResultType  = Exclude<'a' | 'b' | 'c','a' | 'b'>;

/**
 * 'a' extends 'a' | 'b' ? never : 'a' => never
 * 'b' extends 'a' | 'b' ? never : 'b' => never
 * 'c' extends 'a' | 'b' ? never : 'c' => 'c'
 */
 
// type MyType<T> = T extends string | number ? T:never;
// type MyType<T>  = () =>  T extends string | number ? T: never;
type MyType<T>  = (() =>  T)  extends () => string | number ? T: never;
type MyResult = MyType<string | number | boolean>;