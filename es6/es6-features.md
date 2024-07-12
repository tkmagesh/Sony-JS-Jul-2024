# ES6 Features

## let
```js
let no = 100;

for(let i = 0; i < 10; i++){
}
```

## const
```js
const pi = 3.14
const emp = { id : 100, name : 'Magesh' }
```

## array destructuring
```js
let nos = [3,1,4,2,5]

let [x, y] = nos

// swapping x & y
[x,y] = [y,x]
```

## rest operator (array)
```js
let nos = [3,1,4,2,5]
let [x, y, ...z] = nos
```

## spread operator (array)
```js
let nos = [3,1,4,2,5]

let newNos = [ ...nos, 10, 20, 30 ]
```

## rest & spread operators in function arguments
```js
function sum(...list){
    let result = 0;
    for (let i = 0; i < list.length; i++)
        result += list[i];
    return result

}

let nos = [3,1,4,2,5]

sum(10,20,30,40,50)

sum(nos[0], nos[1], nos[2], nos[3], nos[4])

sum(...nos)
```
## object destructuring
```js
let emp = { id  : 100, name : 'Magesh', salary : 10000 }

// variable names must match the attribute names
let {id, salary}= emp

// different variable names
let {id:x, salary:y} = emp

```

## rest operator (object)
```js
let emp = { id  : 100, name : 'Magesh', salary : 10000 }

let { id, ...z } = emp
```

## spread operator (object)
```js
let fulltimeEmployee = { ...emp, salary : 20000, benefits : 'healthcare' }
```

## default arguments
```js
function add(x = 100,y = 200){
    return x + y;
}

add()

add(10)

add(undefined, 20)

add(10,20)

```

## arrow functions
```js
/*
// function statement
function add(x,y){
    return x + y;
}

// function expression
let add = function(x,y){
    return x + y;
}

// arrow function
let add = (x,y) => {
    return x + y;
}
*/
// if the function body has only expression that is returned
let add = (x,y) => x + y;
```

## template strings
```js
let x = 100, y = 200
let s1 = 'sum of ' + x + ' and ' + y + ' is ' + (x+y)

// template strings
let s2 = `sum of ${x} and ${y} is ${x+y}`
```

## iterators (for..of)
```js
let nos = [3,1,4,2,5]

for(let no of nos)
    console.log(`no : ${no}`)
```

## classes
```js
class Employee {

    // static attribute
    static modelName = 'Employee'

    // private attribute (instance)
    #id = 0;

    // public attributes (instance)
    name = '';
    salary = 0;

    // accessors
    get id(){
        console.log('id getter invoked')
        return this.#id;
    }

    set id(val){
        console.log('id setter invoked')
        // validate the data
        this.#id = val;
    }

    // constructor method
    constructor(id, name, salary){
        this.#id = id;
        this.name = name;
        this.salary = salary;
    }

    // instance method
    format(){
        return `id = ${this.#id}, name = ${this.name}, salary = ${this.salary}`
    }

    // static method
    static IsEmployee(obj){
        return obj instanceof Employee;
    }

}

// usage
let e1 = new Employee(100, 'Magesh', 10000)

console.log(e1.id)

e1.id = 200

e1.format()

Employee.IsEmployee(e1)
```

## class inheritance
```js
class Employee {

    // static attribute
    static modelName = 'Employee'

    // private attribute (instance)
    #id = 0;

    // public attributes (instance)
    name = '';
    salary = 0;

    // accessors
    get id(){
        console.log('id getter invoked')
        return this.#id;
    }

    set id(val){
        console.log('id setter invoked')
        // validate the data
        this.#id = val;
    }

    // constructor method
    constructor(id, name, salary){
        this.#id = id;
        this.name = name;
        this.salary = salary;
    }

    // instance method
    format(){
        return `id = ${this.#id}, name = ${this.name}, salary = ${this.salary}`
    }

    // static method
    static IsEmployee(obj){
        return obj instanceof Employee;
    }

}

class FulltimeEmployee extends Employee {

    benefits = '';

    constructor(id, name, salary, benefits){
        super(id, name, salary);
        this.benefits = benefits;
    }

    // overriding the Employee.format() method
    format(){
        return `${super.format()}, benefits = ${this.benefits}`
    }
    
}

// usage
var fte = new FulltimeEmployee(200, 'Suresh', 20000, 'Healthcare')

console.log(fte.format())

console.log(fte.id)

fte.id = 300
```

