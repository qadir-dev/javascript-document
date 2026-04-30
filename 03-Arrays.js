let food = ["soup", "kebab", "fish", "rice"];
let fastFood = ["pizza", "sandwich"];
let animals = ["wolf", "dog", "cat", "fish"];

food.push("salad"); //add last

const lastFood = food.pop(); //get last

food.unshift("pizza"); //add first

const firstFood = food.shift(); //get first

food.concat(fastFood); //["soup", "kebab", "fish", "rice", "pizza", "sandwich"]

fastFood.includes("fish"); //false

food.indexOf("fish"); //2

food.reverse(); //[ 'rice', 'fish', 'kebab', 'soup' ]

food.join(); //rice,fish,kebab,soup

food.join("-"); //rice-fish-kebab-soup

food.slice(1); //[ 'fish', 'kebab', 'soup' ]

food.slice(1, 3); //[ 'fish', 'kebab' ]

animals.splice(2, 1, "fox"); //[ 'wolf', 'dog', 'fox', 'fish' ]

animals.splice(2, 0, "fox"); //[ 'wolf', 'dog', 'fox', 'fox', 'fish' ]

food = [...food, ...fastFood]; //[ 'rice', 'fish', 'kebab', 'soup', 'pizza', 'sandwich' ]
