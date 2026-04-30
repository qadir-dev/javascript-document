const nums = [1, 2, 3, 4, 5, 6, 7];
const names = ["Qadir", "Shahram"];
const randomNums = [6, 1, 4, 2, 7, 3, 5];
const foods = ["pizza", "sandwich", "fish", "kebab"];

//forEach
nums.forEach((n) => console.log(n)); //1 2 3 4 5 6 7

//map
const nums1 = nums.map((n) => {
  return n;
});

//find
const names1 = names.find((name) => {
  return name.includes("S");
});

//filter
const nums2 = nums.filter((n) => n % 2 == 0); //[ 2, 4, 6 ]

const names2 = names.filter((name) => name.includes("a")); //[ 'Qadir', 'Shahram' ]

//sort
const sortedNums = randomNums.sort((a, b) => a - b); //[1, 2, 3, 4, 5, 6, 7]

const reverseSortedNums = randomNums.sort((a, b) => b - a); //[7, 6, 5, 4, 3, 2, 1]

//every & some
foods.every((f) => f.length === 5); //false
foods.some((f) => f.length === 5); //some

//reduce
const multiply = nums.reduce((total, current) => total * current); //5040

const maxVal = randomNums.reduce((max, current) => {
  if (current > max) return current;
  return max;
}); //7
