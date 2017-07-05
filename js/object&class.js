/**
 * Created by tung on 2/07/17.
 */
/**
 * ES6 allow that use the field to declare the object
 */
var fieldA = 'bar';
var obj1 = {fieldA}; //{'fieldA' : 'bar'};


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
 * Define a class in origin way
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
  constructor(x, y) { //constructor the same as JAVA
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
console.log('**************newPoint**************');
let pA = new Point(1, 2);
pA.moveRignt(10);
console.log(pA.toString());


/**
 *  key word     'set'    and    'get'
 *
 */
console.log('**************set & get**************');
class Circle {
  constructor(x, y, r) {
    this._x = x;
    this._y = y;
    this._r = r;
  }
  get x() {
    console.log(this._x);
    return this._x;
  }
  set x(val) {
    this._x = val;
    console.log('setter: '+val);
  }
  info (){
    return console.log('x: '+this._x+'; '+'y: '+this._y+'; '+'r: '+this._r+'; ');
  }
}

let inst = new Circle(1,1,9);

inst.x = 12; // notice that how to use setter
inst.x; // 'getter'
inst.info();


/**
 *  key word      'static'
 */
console.log('**************static**************');
class Foo {
  static classMethod() {
    return console.log('hello');
  }
}
Foo.classMethod() // 'hello'

var foo = new Foo();
//foo.classMethod() // TypeError: foo.classMethod is not a function


/**
 *  inheritance
 *
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
    super(x, y);
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

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
    this.x = 2;
  }
  get m() {
    this.print();
  }
}

let b = new B();
b.m; // 2
////////////////////////////////
class A1 {
  constructor() {
    this.p = 2;
  }
}

class B1 extends A1 {
  get m() {
    return super.p;  //should change to this.p!!!!!
  }
}

let b1 = new B1();
console.log(b1.m); // undefined