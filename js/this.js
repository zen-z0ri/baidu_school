/**
 * Created by tung on 2/07/17.
 */

/**
 * ONLY think about the this inside the function
 * 1. Normal function
 *    i) 'strict model'： undefined
 *        // can't use this
 *    ii) 'not strict model': global
 *        // When we using this inside the Normal function,
 *        // it will bind to global object\
 *        Node: global
 *        browser: window
 * 2. Constructor： the instance of the object
 * 3. Object's method：the object
 * 4. Anonymous	functions or innner function: undefined, 'this' detached
 * 5. Arrow function: static scope
 *
 *
 * **this** is actually a binding that is made when a function is invoked,
 * and what it references is determined entirely by where the function is called.
 *
 * BUT: in Arrow function **this** is the **static scoped**;
 *
 */

/**
 *
 *  function f1() {
 *     return this;
 *  }
 *  // In a browser:
 *  f1() === window; // the window is the global object in browsers
 *
 *  // In Node:
 *  f1() === global;
 *
 *
 *  function f2() {
 *    'use strict'; // see strict mode
 *    return this;
 *  }
 *  f2() === undefined;
 */
console.log("****************no strict*****************");
count = 1; // global level
foo.count = 2
function foo(){
  // inside the foo, this represent the global
  console.log(this.toString());//Under function using this, it points to the **global**
  console.log(this.count); // 1 global
  console.log(foo.count); // 2
}
foo();
// However when we use **this** out of the function it's undefined
console.log("*******out of function*******");
console.log(this.count);
console.log(this);

console.log("****************use strict*****************");
count = 1;
bar.count = 2
function bar(){
  'use strict'
  console.log(this); // undefined, can't use this.count
  console.log(bar.count); // 2
}
bar();

console.log("********Always use strict************");
function bar(num) {
  console.log( "foo: " + num );
  // keep track of how many times `foo` is called
  this.num++; // accidentally create a global variable
}
num = 0;
bar.num = 0;

for (let i=0; i<10; i++) {
  if (i > 5) {
    bar( i ); //6,7,8,9
  }
}

// you want to know how many times was `foo` called?
console.log( bar.num ); // 0 -- WTF?
function c() {
  console.log(this.num);
}
c();//you actually increase the global field

console.log("*********************call() apply()***************************");
// An object can be passed as the first argument to call or apply and this will be bound to it.
let obj = {a: 'Custom'};
// This property is set on the global object
a = 'Global';
function whatsThis(arg) {
  return console.log(this.a);  // The value of this is dependent on how the function is called
}

whatsThis();          // Returns 'Global'
whatsThis.call(obj);  // Returns 'Custom'
whatsThis.apply(obj); // Returns 'Custom'

console.log("*********Arrow functions this is static scoped.********");
/**
 * 1. Use non-arrow functions for methods that will be called using the
 *    object.method() syntax. Those are the functions that will receive a
 *    meaningful this value from their caller.
 * 2. Use arrow functions for everything else. (like inside function inside method)
 */
const h = function() {
  'use strict';
  return this;
}
const g = function() {
  return this;
}
const f = () => { return this; };
console.log(h() === global); //  Normal function in 'strict model': this will be undefined
console.log(g() === global); // Normal function in 'non-strict model': this bind to global
console.log(f() === global); // Arrow function use 'static scope'

//ES6
//in Arrow function **this** is the **static scoped** !!!
function es6() {
  this.id = 2112; //create the global id: 2112
  setTimeout(() => {
    console.log("es6()**********");
    console.log('id:', this.id); //show the global.id in arrow function
  }, 100);
}
es6();

// ES5
function es5() {
  this.id = 2112; //create the global id: 2112
  setTimeout(function () {
    console.log("es5()**********");
    console.log('id:', this.id);
  }, 100);
}
es5();

//*************************object*********************
// class	Toppings	{
//   constructor(toppings)	{
//       // 'this' point to the instance, ok
//     this.toppings = Array.isArray(toppings) ? toppings : [];
//   }
//   outputList()	{
//      // 'this' point to the instance, ok
//     this.toppings.forEach(function(topping,	i)	{
//       //	`this` will be undefined cause error
//       console.log(0,	i	+	'/'	+	this.toppings.length);
//       ed
//     });
//   }
//   }
// var	myToppings	=	new	Toppings(['cheese', 'lettuce']);
// myToppings.outputList();
//*************************object with Arrow function*********************
// class	Toppings	{
//   constructor(toppings)	{
//     this.toppings	=	Array.isArray(toppings)	?	toppings	:	[];
//   }
//   outputList()	{
//     this.toppings.forEach((topping,	i)	=>	{
//	    // `this`	works!
//       console.log(topping,	i	+	'/'	+	this.toppings.length)
//     });
//   }
// }
// var	myToppings	=	new	Toppings(['cheese',	'lettuce']);
// myToppings.outputList();


/**
 * class	ServerRequest	{
 *		notify()	{
 *		  ...
 *	  }
 *		fetch()	{
 *		  getFromServer(function	callback(err,	data)	{ //inner function
 *			  this.notify();	//	this	is	not	going	to	work
 *			});
 *		}
 * }
 *
 * i) **this** will	not point to the expected object:
 * ii)  in "strict"	mode it	will be undefined.
 */

//Distinguish the below three
/**
 * i)
 */
// function Person() {
//   // The Person() constructor defines `this` as an instance of itself.
//   this.age = 0;
//   console.log(this===global);
//   function growUp() {
//     // In non-strict mode, the growUp() function defines `this`
//     // as the global object, which is different from the `this`
//     // defined by the Person() constructor.
//     console.log(++this.age);
//   }
//   growUp();
// }
// console.log("*************Person as a Normal function*************");
// Person(); // Normal function

/**
 * ii)
 */
// function Person() {
//   // The Person() constructor defines `this` as an instance of itself.
//   this.age = 0;
//   console.log(this===global);
//   function growUp() {
//     // In non-strict mode, the growUp() function defines `this`
//     // as the global object, which is different from the `this`
//     // defined by the Person() constructor.
//     console.log(++this.age);
//   }
//   growUp();
// }
// console.log("*************Person as a object*************")
// let p = new Person();

/**
 * iii)
 */
// function Person() {
//   // The Person() constructor defines `this` as an instance of itself.
//   this.age = 0;
//   console.log(this===global);
//   const growUp = () => {console.log(++this.age);};
//   growUp();
// }
// console.log("*************Person as a object*************")
// let p = new Person();