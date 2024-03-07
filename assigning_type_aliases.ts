// With typescript there are higher chances that you repeat type definition.

// person object 
// let person:{
//     name:string;
//     age:number;
// };

// to get array of objects
// let person:{
//     name:string;
//     age:number;
// }[];

// here we are repeating type definition for array and non-array objects.

// To avoid this duplication we can create Alias.

// 1.Define your own base type in which a more complex type
//  definition is stored and then use that type alias 
// instead of repeating the entire type definition.

// using type keyword

type Person = {
        name:string;
        age:number;
    };

let Person : Person;

let People : Person[];

// It makes code concise and easy to understand.

