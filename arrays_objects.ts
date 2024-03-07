// default type of any variable is any in TS, we should not use it as it defeats the entire purpose of using TS.

//1.array of strings

let hobbies: string[];
hobbies = ['sports','cooking','travelling'];

// person object 
let person:{
    name:string;
    age:number;
};

person = {
    name:"Max",
    age:15
};

// to get array of objects
// let person:{
//     name:string;
//     age:number;
// }[];
