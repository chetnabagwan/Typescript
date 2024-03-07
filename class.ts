class Student{
    firstName:string;
    lastName:string;
    age:number;
    private courses:string[];

    constructor(first:string, last:string, age:number, courses:string[]){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName:string){
        this.courses.push(courseName);
    }
}

const s = new Student("Max", "Smith", 21, ['Angular']);
s.enroll('Typescript');

class Student1{
//     firstName:string;
//     lastName:string;
//     age:number;
//     private courses:string[];

    constructor(
        public firstName: string, 
        public lastName:string, 
        public age:number, 
        private courses: string[]) 
    {}

    enroll(courseName:string){
        this.courses.push(courseName);
    }
}