import * as calc from './calculator.js';
console.log('Welcome to TypeScript!');
function add(x, y) {
    return x + y;
}
console.log(add(100, 200));
console.log(calc.subtract(100, 200));
const multiply = (x, y) => x * y;
console.log(multiply(100, 200));
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
    constructor(id, name, salary, city) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.city = city;
    }
}
let emp = new Employee(100, 'Magesh', 12000, "Banglore");
console.log(emp.id, emp.name, emp.salary, emp.city);
/* Generics */
let list = [10, 20];
console.log(list);
/* Union */
let noRStr;
noRStr = 10;
console.log(noRStr);
noRStr = "ten";
console.log(noRStr);
let no_string;
no_string = 100;
console.log(no_string);
no_string = "hundred";
console.log(no_string);
/* enum */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let carColor;
carColor = Color.Red;
// carColor = 100
console.log('car color :', carColor);
