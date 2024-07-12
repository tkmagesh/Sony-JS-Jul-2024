import * as calc from './calculator.js'

console.log('Welcome to TypeScript!')

function add(x:number, y : number) : number {
    return x + y
}

console.log(add(100,200))
console.log(calc.subtract(100,200))

const multiply = (x : number,y : number) : number => x * y
console.log(multiply(100,200))

// 
/* class Employee {
    private _id : number;
    public name : string;
    public salary : number;

    get id() : number {
        return this._id
    }
    set id(val : number) {
        this._id = val
    }

    constructor(id : number, name : string, salary : number){
        this._id = id;
        this.name = name;
        this.salary = salary;
    }

} */

class Employee {
    constructor(
        public id : number, 
        public name : string, 
        public salary : number,
        public city : string,
    ){

    }
}

let emp = new Employee(100, 'Magesh', 12000, "Banglore")

console.log(emp.id, emp.name, emp.salary, emp.city)

/* Generics */

let list : Array<number> = [10, 20]
console.log(list)

/* Union */
let noRStr : number | string ;
noRStr = 10
console.log(noRStr)

noRStr = "ten"
console.log(noRStr)

/* custom type */
type NumberOrString = number | string
let no_string : NumberOrString
no_string = 100
console.log(no_string)

no_string = "hundred"
console.log(no_string)

/* enum */

enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
}

let carColor : Color;
carColor = Color.Red
// carColor = 100
console.log('car color :', carColor)
