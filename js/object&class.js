/**
 * Created by tung on 2/07/17.
 */
/**
 * ES6 allow that use the field name to declare the object
 */
var fieldA = 'bar';
var obj1 = { fieldA,
            'name': 'foo',
            'age': 23}; //{ fieldA: 'bar', name: 'foo', age: 23 }
console.log(obj1);

/**
 * In commonJS is equal
 */
// module.exports = { getItem, setItem, clear };
//    // equal to
// module.exports = {
//   getItem: getItem,
//   setItem: setItem,
//   clear: clear
// };


/**
 *    Object.is()   v.s.  ===
 *
 * i) Good code style should always use ===
 * ii) But there are two feature of ===
 *     1. NaN not equal to NaN
 *     2. +0 equal to -0
 * iii) The Object.is()   is almost the same as ===
 *  But
 *  Object.is(+0, -0) // false
 *  Object.is(NaN, NaN) // true
 */


/**
 * Define a class in original way
 */
function oldPoint(x, y) {
  this.x = x;
  this.y = y;
}
oldPoint.prototype.toString = function() {
  return '(' + this.x + ', ' + this.y + ')';
}
let oldPA = new oldPoint(2, 2);
console.log('**************oldPoint**************');
console.log(oldPA.toString());


/**
 * Define a class in ES6
 *
 * It's the same as ES5, all the instances have the same __proto__
 */
class Point {  // typeof Point --> "function"
  //you have to define a constructor or a default constructor() will be added
  //not like Java, C#, all field must be in the constructor;
  constructor(x, y =21) { //constructor  with the default value
    this.x = x;
    this.y = y;
  }
  toString() {   // There is no need to add the **function** key word
    return '(' + this.x + ', ' + this.y + ')';
  }
  moveRignt(step){
    this.x += step;
  }
}

/**
 *
 * // equal to
 * Point.prototype = {
 *   constructor() {},
 *   toString() {},
 *   toValue() {},
 * };
 */

console.log('**************newPoint**************');
let pA = new Point(1, 2);
pA.moveRignt(10);
console.log(pA.toString());
let pB = new Point(1);
console.log(pB.toString())

/**
 *  key word     'set'    and    'get'
 *
 */
console.log('**************set & get**************');
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  get getX() {
    return this.x;
  }
  set setX(_x) {
    this.x = _x;
  }
	//the method without function keywords
  info (){
    console.log('x: '+this.x+'; '+'y: '+this.y+'; '+'r: '+this.r+'; ');
  }
  anotherInfo (){
    this.info();
    console.log('this.method()');
  }
}

let inst = new Circle(1,1,9);

inst.setX = 12; // notice that how to use setter
inst.getX; // 'getter'
inst.info();
inst.anotherInfo();

/**
 *  key word      'static'
 *  in ES6, there is no static field, only static method
 */
console.log('**************static**************');
class Foo {
  static classMethod() {
    return console.log('hello');
  }
}
Foo.classMethod() // 'hello'

let foo = new Foo();
// foo.classMethod() // TypeError: foo.classMethod is not a function

/**
 * For static method
 * In Java, we can use both Class.staticMethod() and Obj.staticMethod()
 * but in ES6 we can only use Class.staticMethod()
 */

/**
 * In Java, static method can't access 'this' or 'super'
 * In ES6, this in static method point to the class
 */
console.log('*****************this in static method******************');
class TestStatic {
	static foo () {
		this.bar();
	}
	static bar () {
		console.log('hello');
	}
	bar () {
		console.log('world');
	}
}

TestStatic.bar(); // hello

let testStaticA = new TestStatic();
testStaticA.bar();

/**
 *  Inheritance
 *
 *  class Point {
 *
 *  }
 *  class ColorPoint extends Point {
 *
 *  }
 *
 *  'extends' and 'super', just like JAVA
 */

//The constructor of subclass must invoke super();
console.log('**************extends & super**************');
class ColorPoint extends Point {
  constructor(x, y, color) {
    //!!! must use super() in the child class constructor
    super(x, y);
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString();
    // invoke the super to string, to override
  }
}
let cPoint1 = new ColorPoint(1, 2, 'red');
console.log(cPoint1.toString());


console.log('**************this or super**************');
console.log('******************A B*********************');
class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 3;
    this.y = 2;
  }
  bPrint() {
    this.x = 4; // this point to the current class
    // super.print(); // super point to the parent class prototype
    //should use this
    this.print();
  }
  bPrint1() {
    this.x = 5;
    super.print();
    // this.print();
  }
}
let b = new B();
b.print();
b.bPrint();
b.bPrint1();

console.log('******************A1 B1*********************');
//notice field use this, while method use super
class A1 {
  constructor() {
    this.p = 2;
  }
}

class B1 extends A1 {
  get getp() {
    return super.p;  //should change to this.p!!!!!
    // return this.p;
  }
}

let b1 = new B1();
console.log(b1.getp); // undefined

/*
 * Use prototype and .
 */