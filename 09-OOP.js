//class
class Triangle1 {
  getArea() {
    return (this.a * this.b) / 2;
  }
}

const tri = new Triangle1();
tri.a = 3;
tri.b = 4;
tri.getArea(); //6

//constructor
class Triangle2 {
  constructor(sideA, sideB) {
    this.a = sideA;
    this.b = sideB;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }
}

const tri2 = new Triangle2(4, 5);
tri2.getArea(); //10

//instance
class Triangle3 {
  constructor(sideA, sideB) {
    this.a = sideA;
    this.b = sideB;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }
  print() {
    console.log(this.getArea());
  }
}

const tri3 = new Triangle3(5, 6);
tri3.print(); //15

//inheritance
class Triangle4 extends Triangle3 {
  say() {
    return "Inheritance";
  }
}

const tri4 = new Triangle4(6, 7);
tri4.getArea(); //21
tri4.say(); //Inheritance

//super
class Triangle5 extends Triangle3 {
  constructor(sideA, sideB, color) {
    super(sideA, sideB);
    this.color = color;
  }
  sayColor() {
    return this.color;
  }
}

const tri5 = new Triangle5(7, 8, "red");
tri5.getArea(); //28
tri5.sayColor(); //red

//static
class Cat {
  constructor(name) {
    this.name = name;
  }
  static type = "persian";
  static meow() {
    return "Meow";
  }
}

const c = new Cat("taymoor");
c.type; //undefined
//cat.meow() //is not a function
Cat.type; //persian
Cat.meow(); //Meow

//get
class Circle1 {
  constructor(radius) {
    this._radius = radius;
  }
  get diameter() {
    return this._radius * 2;
  }
}

const cir1 = new Circle1(7);
cir1.diameter; //14

//set
class Circle2 {
  #miu;
  constructor(radius) {
    this._radius = radius;
  }
  set radius(value) {
    if (value <= 0) {
      throw new Error("Negetive value!!");
    } else {
      this._radius = value;
    }
  }
}

const cir2 = new Circle2(7);
//cir2.radius = 0; //Negetive value!!

//prototype

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  return `${this.name} Woof`;
};

const d = new Dog("Shahram");
d.bark(); //Shahram Woof
