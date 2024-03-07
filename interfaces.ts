// Interfaces only exists in Typescript
//Therfore Interfaces are not compiled to JS 

// Interfaces are just object type definitions, they can be alternative to alias but the difference is interfaces can be used to structure the classes also along with objects.

interface Human{
    firstName:string;
    age:number;

    greet:() => void; //only function declarartion not definition
}

//using interface to define object type
let maxwell : Human;

maxwell = {
    firstName:"Max",
    age: 23,

    greet(){
        console.log("Hello!");
    }
};

//using interface to define classes which implements it to have certain structure, to have some features
class Teacher implements Human{
    firstName: string;
    age:number;
    greet(){
        console.log("I'm a teacher!");
    }
}

