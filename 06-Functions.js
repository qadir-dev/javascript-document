//lexical scope
const outer = () => {
  const movie = "The Batman";
  const inner = () => {
    const movie = "The invisible Man";
    const extraInner = () => {
      console.log(movie);
    };
    extraInner();
  };
  inner();
};

outer();

//return function
const isBetween = (min, max) => {
  return (val) => {
    return val >= min && val <= max;
  };
};

const isRange = isBetween(20, 50);
console.log(isRange(39));

//callback function
const mainFunc = (func, num) => {
  for (let i = 0; i < num; i++) {
    func();
  }
};

const greet = () => {
  console.log("How u doin\n");
};

mainFunc(greet, 7);

//call
function description() {
  return `${this.name} is ${this.age} year's old `;
}

const obj1 = {
  name: "Qadir",
  age: "100",
};

description.call(obj1); //Qadir is 100 year's old

Math.max.call(null, 1, 5, 2, 7, 4); //7

//apply
const numbers = [1, 5, 2, 7, 4];
const max = Math.max.apply(null, numbers); //7

//bind

//generator
function* even(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

const evenGen = even(8);
evenGen.next(); //8
evenGen.next(); //10

//iife
(function () {
  console.log("immediately invoked function expressions");
})();

//factory function
function factory(val1) {
  return function (val2) {
    return val1 * val2;
  };
}

const square = factory(2);
const cube = factory(3);
square(4); //8
clcube(4); //12
