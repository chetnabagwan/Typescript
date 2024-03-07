// Type inference = by default typescript tries to infer some types, which type is used where without you explicitly stating them.

// When we immediately initialize any variable TS tries to infer its type so there is no need to redundantly set its type, no need to unecessarily specify the type

let course = "Typescript course";//using course value type TS infers course type to string without stating it

// course = 10; error due to type inference
course = "typescript zero to hero";
