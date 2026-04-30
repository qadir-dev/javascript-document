const person = {
  7: "seven",
  name: "Qadir",
  color: {
    black: "#000",
    white: "#fff",
  },
};

person[7]; //seven
person.name; //Qadir
person.age = 100;
person.age += 7; // 107
person.color.black; //#000

const palette = {
  black: "#000",
  white: "#fff",
};

const palette2 = palette;
palette2.green = "#40ff00";
palette; //{ black: '#000', white: '#fff', green: '#40ff00' }

const person2 = {
  name: "Qadir",
  age: 100,
  miu() {
    console.log(this);
  },
};

person2.miu(); //{ name: 'Qadir', age: 100, miu: [Function: miu] }
