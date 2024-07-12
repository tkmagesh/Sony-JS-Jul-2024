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
```

## iterators (for..of)
```js
```

## classes
```js
```

## class inheritance
```js
```

