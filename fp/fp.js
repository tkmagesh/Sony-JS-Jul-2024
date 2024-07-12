var products = [
  { id: 6, name: "Pen", cost: 50, units: 20, category: "stationary" },
  { id: 9, name: "Ten", cost: 70, units: 70, category: "stationary" },
  { id: 3, name: "Len", cost: 60, units: 60, category: "grocery" },
  { id: 5, name: "Zen", cost: 30, units: 30, category: "grocery" },
  { id: 1, name: "Ken", cost: 20, units: 80, category: "utencil" },
  { id: 7, name: "Mouse", cost: 100, units: 20, category: "electronics" },
];

console.log('Initial List')
console.table(products)

function sort(list, comparerFn){
  for (var i = 0; i < list.length-1; i++){
    for (var j = i + 1; j < list.length; j++) {
      if (comparerFn(list[i], list[j]) > 0){
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
}

// comparer By Id
function compareProductsById(p1, p2){
  if (p1.id < p2.id) return -1;
  if (p1.id > p2.id) return 1;
  return 0
}

sort(products, compareProductsById)
console.log("Products sorted by id")
console.table(products);

sort(products, function (p1, p2) {
  if (p1.name < p2.name) return -1;
  if (p1.name > p2.name) return 1;
  return 0;
});
console.log("Products sorted by name");
console.table(products);

/* filter */

function filter(list, criteriaFn){
  var result = [];
  for(var i = 0; i < list.length; i++){
    if (criteriaFn(list[i])){
      result.push(list[i])
    }
  }
  return result;
}

// filter stationary products
/* 
function stationaryProductCriteria(p){
  return p.category === 'stationary';
} 
*/
/* 
let stationaryProductCriteria = (p) => {
  return p.category === "stationary";
} 
*/ 
let stationaryProductCriteria = p => p.category === "stationary";

var stationaryProducts = filter(products, stationaryProductCriteria)
console.log('Stationary Products')
console.table(stationaryProducts)


// filter costly products
function costlyProductCriteria(p){
  return p.cost > 50
}
// var costlyProducts = filter(products, costlyProductCriteria)
var costlyProducts = filter(products, p => p.cost > 50)
console.log('Costly Products')
console.table(costlyProducts)

/* 
Write the APIs for the following (DO NOT use the builtin array methods)
    - sort
      - sort products by Id
      - sort products by Name
      - sort products by Cost
    - Sort any list by any attribute
    - Sort any list by any comparer

    - filter
      - filter stationary products
      - filter costly products (cost > 50)
      - filter understocked products (units < 50)
    - Filter any list by any criteria

    - groupBy
      - group products by category
      - group products by cost (costly, affordable)
    - Group any list by any criteria
*/
