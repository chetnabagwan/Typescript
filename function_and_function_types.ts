// TS infers the function return type, we can also explicitly mention it
function adder(a:number,b:number):number{
    return a+b;
}

// return type void 
function print_line(value:any){
    console.log(value);
}
// If I wanted to work with something returned from this function, I will work with undefined.
