/* 
import * as calc from './calculator.js'
console.log(calc) // module object with references to all the entities that are exported
console.log(calc.add(100,200))
console.log(calc.subtract(100,200)) 
*/

/* 
import * as calc from './calculator.js'
console.log(calc.add(10,20))
console.log(calc.add(10,200)) 
*/

/* 
import * as calc from "./calculator.js";
// const add = calc.add;
const { add } = calc; 
*/

/* 
import { add } from "./calculator.js";
console.log(add(10, 20));
console.log(add(10, 200));
*/

// importing the default exported entity
/* 
import sayHi from "./calculator.js";
sayHi() 
*/

/* 
import hi from './calculator.js'
hi() 
*/

// combining exports & 'default exports'
import sayHi, {add, subtract} from './calculator.js'
sayHi()
console.log(add(100,200))
console.log(subtract(100,200))

console.log('Welcome to Node.js!')