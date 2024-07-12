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
```

## rest operator (object)
```js
```

## spread operator (object)
```js
```

## default arguments
```js
```

## arrow functions
```js
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

