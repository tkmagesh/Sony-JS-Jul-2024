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
