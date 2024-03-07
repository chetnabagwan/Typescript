// Sometimes we want to allow values of multiple types to a variable
// union type = type definition which allows more than one type

// flexibilty

let c : string | number = "Typescript";

c = 10;
c = "hello";

let names: string | string[];

names = "Ram";
names = ["john","jack","sam"];

