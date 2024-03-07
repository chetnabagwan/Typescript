// In generics, we pass a parameter called type parameter = <T>

// Generics provides us the flexibility to write code of any particular data type (or return type) 
// and that the time of calling that user could pass on the data type or the return type specifically.
// Makes reusable code which ensures scalabilty

function insertAtBeginning(array : any[], value:any){
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3];// type number
const strArray = ["a","b","c"];// type string

const updatedArray = insertAtBeginning(demoArray,4); // return type still any
const updatedStrArray = insertAtBeginning(strArray,"d");// return type still any

// to resolve this use generics

function insertAtBeginningGenerics<T>(array : T[],value : T){
    const newArr = [value,...array];
    return newArr;
}

const arr = [1,2,3];
const strArr = ["a","b","c"];

const updArr = insertAtBeginningGenerics(arr,4);//now its type if inferred to number[]
const updStrArr = insertAtBeginningGenerics(strArr,"d");//type string[]

