# JavaScript (ES5)
## Data Types
- String
- Number
- Boolean
- Object
- Function
- Undefined
## Programming Constructs
- var, if else, switch case, while, for, try catch finally, throw, function
## APIs
- Array, Math, Regex, Error, setTimeout, clearTimeout, setInterval, clearInterval
## Other
- Loosely typed
- Dynamic
- Functional (Higher Order Functions)


## Higher Order Functions
### Creation
- Function Statement
```js
function fn(){
}
```
- Function Expression
```js
var fn = function fn(){
}
```
### Attributes
```js
fn['id'] = 100
console.log(fn.id)
```
### Methods
```js
fn['whoAmI'] = function(){
    console.log('I am a function');
}
fn.whoAmI()
```
### Functions as Arguments
```js
function fz(z){
    console.log('typeof z = ', typeof z);
}

fz(fn)
```
### Functions as return values
```js
function getAdder(){
    return function(x,y){
        return x + y;
    }
}

var adder = getAdder()

typeof adder

adder(100,200)

getAdder()(100,400)
```