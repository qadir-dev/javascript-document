//for
for (let i = 1; i <= 7; i++) {
  console.log(i);
}

//while
let j = 1;

while (j <= 7) {
  console.log(j);
  j++;
}

//for of
const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let num of numbers) {
  console.log(num);
}

for (let char of "Qadir") {
  console.log(char);
}

const numbers2 = {
  one: 1,
  two: 2,
  five: 5,
};

for (let num of Object.keys(numbers2)) {
  console.log(num, numbers2[num]);
}
//for in
for (let num in numbers2) {
  console.log(num, numbers2[num]);
}
