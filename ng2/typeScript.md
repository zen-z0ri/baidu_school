# Typescript

1. Overview
2. Type annotations
3. Interface
4. Class
5. Function 
6. Decorators
7. Used in node.js

---

## 1. Overview

To install:
```bash
npm install -g typescript
```
To compile:
```bash
tsc name.ts
```

## 2. Type annotations

Use type annotations for declaration
1.  Basic Types
    * boolean 
        ```typescript
         let isDone: boolean = false;
        ```
    * number 
        ```typescript
         let decimal: number = 6;
         let hex: number = 0xf00d;
         let binary: number = 0b1010;
        ```
    * string 
        ```typescript
        let color: string = "blue";
        ```
    * Array 
        ```typescript
         let listA: number[] = [1, 2, 3];
         let listB: Array<string|number> = [1, '2', 3]; //union type
         let listC: (number|boolean) [] = [true, 2, 3]; //union type
        ```
    * tuple 
        ```typescript
        //an array where the type of a fixed number of elements is known
         let x: [string, number, number];
         // Initialize it
         x = ["hello", 10, 11];
         // the type of the array must belong to any type of tuple
         x[3] = true; //error
        ```
    * enum 
        ```typescript
        enum Color {Red, Green, Blue}
        let c: Color = Color.Green;
        let colors: Color[] = Color[Color.Blue]; 
        /**
         * Enum members have numeric value associated with them 
         * and can be either constant or computed. 
         */
        enum FileAccess {
          // constant members
          None,
          Read    = 1 << 1,
          Write   = 1 << 2,
          ReadWrite  = Read | Write,
          // computed member
          G = "123".length
        }
        ```
    * any  
        ```typescript
          //if a permeter is not declare a type, in default it is any. 
         let notSure: any = 4;
         notSure = "maybe a string instead";
         notSure = false; // okay, definitely a boolean
        ```
    * void 
        ```typescript
         function warnUser(): void {
         //as the return type of functions that do not return a value
             alert("This is my warning message");
         }
        ```
    * undefined & null  
        ```typescript
         let u: undefined = undefined;
         let n: null = null;
         //By default null and undefined are subtypes of all other types. 
         let a: number = undefined; //It's fine
         /**
          * However, when using the --strictNullChecks flag, null and undefined
          * are only assignable to void and their own types. 
          */ 
        ```
    * never
        ```typescript
        
          //represents the type of values that never occur.
        ```
                 
2. Object 

    For object, use destructing.
    
    ```typescript
    function printLabel(labelledObj: { label: string }) {
      console.log(labelledObj.label);
    }
    
    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
    ```

3. Change JS :
    ```ecmascript 6
    function hello(msg){
      console.log(`hello, ${msg}`);
    }
    
    hello('TungReeboo');
    ```
    To Typescript:
    ```typescript
    function hello(msg: string): void {
      console.log(`hello, ${msg}`);
    }
    
    hello('TungReeboo');
    ```
4. Change JS:
  ```ecmascript 6
   class Pizza {
     constructor(toppings) {
       this.toppings = toppings;
     }
   }
   ```
   To Typescript:
   
   ```typescript
   class Pizza {
     toppings: string[]; //must be declared before use, ES6 don't
       //local variable also need to declare
       constructor(toppings: string[]) {
         this.toppings = toppings;
     }
   }
   ```
   
## 3. Interface

Interface can have method signarue but not implement.<br/>
ES6 has class, but don't have interface; TS now has interface.
```typescript
//1. normal interface
interface SuperConfug {
  color: string;
  width: number;
}

//2. readonly : for read only, cant assign to them, just like const of varaible
/**
 * The easiest way to remember whether to use readonly or const is to
 * ask whether you’re using it on a variable or a property. 
 * Variables use const whereas properties use readonly
 */
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
//Variables use const whereas properties use readonly!!!

//3. ? to these attributes is optional. 
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: "black"});

//4. any properties
interface Person {
  name: string;
  age?: number;
  [propName: string]: any; //can have any properties
}
let xcatliu: Person = {
  name: 'Xcat Liu',
  website: 'http://xcatliu.com',
};

//5. function interface
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(src: string, sub: string): boolean {
  let result: boolean = src.includes(sub);
  return result;
}

//6. Class types interface
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): void {
    this.currentTime = d;
  }
  // in ES6 the field can only be defined in constructor
  constructor(h: number, m: number) { }
}
let myClock: Clock = new Clock(1, 3);

//7. The multiple implements
interface Alarm {
  alert();
}
interface Light {
  lightOn();
  lightOff();
}
class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}
```
## 4. Class 

1. Basic structure
    ```typescript
    class Greeter {
      greeting: string;// in ES6 the field can only be defined in constructor
      kiss?: boolean;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
        return "Hello, " + this.greeting + "Kiss?"+this.kiss;
      }
    }
    
    let greeter = new Greeter("world");
    ```
2. With Inheritance:
    <br/>***JS***
    ```ecmascript 6
    class Animal{
      constructor(theName){
        this.name = theName;   
      }
      move(distanceInMeters = 0){
        console.log(this.name + "moved" + distanceInMeters+"m.");
      }  
    }
    
    class Snake extends Animal{
      constructor(name){ 
        super(name);
      }
      move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
      }
    }
    
    class Horse extends Animal {
      constructor(name){
        super(name);
      }
      move(distanceInMeters = 45){
        console.log("Galloping...");
        super.move(distanceInMeters);
      }
    }
    ```
    
    ***TS***
    
    ```typescript
    class Animal {
      name: string;
      constructor(theName: string){ 
        this.name = theName; 
      }
      move(distanceInMeters: number = 0): void{
        console.log(`${this.name} moved ${distanceInMeters}m.`);
      }
    }
    
    class Snake extends Animal {
      constructor(name: string) { 
        super(name);
      }
      move(distanceInMeters: number = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
      }
    }
    
    class Horse extends Animal {
      constructor(name: string) {
        super(name);
      }
      move(distanceInMeters: number = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
      }
    }
    
    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");
    
    sam.move();
    tom.move(34);
    ```
3. Access modifiers
   <br/>**public, private, protected, readonly**
   <br/>**static, set, get, abstract**
   
   
   * **private**, it cannot be accessed from outside of its containing class.
   
   * **protected** acts much like the **private** with the exception that members declared protected can also be accessed 
     by instances of deriving classes.
       ```typescript
       class Person {
         protected name: string;
         constructor(name: string) { this.name = name; }
       } 
    
       class Employee extends Person {
         private department: string;
      
         constructor(name: string, department: string) {
           super(name);
           this.department = department;
         }
         
         public getElevatorPitch() {
           return `Hello, my name is ${this.name} and I work in ${this.department}.`;
         }
       }  
       let howard = new Employee("Howard", "Sales");
       console.log(howard.getElevatorPitch());
       console.log(howard.name); // error
       ```
   * **readonly** : Readonly properties must be initialized at their declaration or in the constructor.   
       ```typescript
       class Octopus {
         readonly name: string;
         readonly numberOfLegs: number = 8;
         constructor (theName: string) {
           this.name = theName;
         }
       }
  
       let dad = new Octopus("Man with the 8 strong legs");
       dad.name = "Man with the 3-piece suit"; // error! name is readonly
       ```
   * **static** just like JAVA
       ```typescript
       class Grid {
         static origin = {x: 0, y: 0};
         calculateDistanceFromOrigin(point: {x: number; y: number;}) {
           let xDist = (point.x - Grid.origin.x);
           let yDist = (point.y - Grid.origin.y);
           return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
         }
         constructor (public scale: number) { }
       }
        
       let grid1 = new Grid(1.0);  // 1x scale
       let grid2 = new Grid(5.0);  // 5x scale
        
       console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
       console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
       ```
       
## 5. Function 
A function’s type has the same two parts: the type of the arguments and the return type. 
```typescript
let myAdd = (x: number, y: number): number => (x+y);//Arrow function
function yourAdd(x: number, y: number): number { 
  return x+y; 
};
```

```typescript
// Normal function
function add(a: number, b?: number): number {
  return b? (a + b):a;
}

// callback
function readFile(file: string, callback: (err: Error | null, data: Buffer) => void) {
  fs.readFile(file, callback);
}

// use **type** define callback
type CallbackFunction = (err: Error | null, data: Buffer) => void;//that's only an interface
function readFile(file: string, callback: CallbackFunction): void{
  fs.readFile(file, callback);
}

// use interface
interface CallbackFunction {
  (err: Error | null, data: Buffer): void;
}
function readFile(file: string, callback: CallbackFunction) {
  fs.readFile(file, callback);
}

//arrow funtion
const add = (x: number, y: number): number => (x+y);
console.log(add(1,2));

const add1 = (x: number): void => {console.log(x+1)};
add1(10);

//use the rest parameters
function buildName(firstName: string, ...restOfName: string[]) { //as an array
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

TS also allows overloads
```typescript
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```
## 6. Decorators
A **Decorator** is a special kind of declaration that can be attached to a class declaration, method, accessor, property, 
or parameter. Decorators use the form **@expression**.
* class: ```declare	type ClassDecorator	= <TFunction extends Function>(target: TFunction) => TFunction | void;```	
* property: ```declare type	PropertyDecorator =	(target: Object, propertyKey: string | symbol) => void;```	
* method: ```declare type MethodDecorator =	<T>(target:	Object,	propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T>	| void;```	
* parameter: ```declare	type ParameterDecorator	= (target: Object, propertyKey: string | symbol, parameterIndex: number) =>	void;```	

**Define a decorator**
```typescript
//Define a decorator
function log(constructor: Function) {
  console.log(constructor);
  console.log(constructor.prototype);
}
//Define another decorator
function f() {
  console.log("f(): evaluated");
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("f(): called");
  }
}
```
***Class decorator***
```typescript
//Define a decorator (Class decorator **can only use constructor** as its argument)
function log(constructor: Function) {
  console.log(constructor);
  console.log(constructor.prototype);
}
// Apply the @log in front of the class(neer it)
@log   
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
```
***Method Decorator***
```typescript
//Define a method decorator (Method decorator has three arguments: )
/**
* 1. Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
* 2. The name of the member.
* 3. The Property Descriptor for the member.
*/
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}
// Apply the @log in front of the class(neer it)   
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
```
**Parameter Decorators**
```typescript

```

## 7. Used in node.js

1. Module
* In node.js:
    ```bash
    npm install --save express
    ```
    ```ecmascript 6
    const express = require('express');
    ```
* In ES6, TS:
    ```ecmascript 6
    export * from "./StringValidator";
    ```
    ```ecmascript 6
    import {firstName, lastName, year} from './profile';
    //the name must be the same as the origin file, or use 'as'
    
    import { lastName as surname } from './profile';
    ```
* In TS:
    You cannot use third-party module directly.
    Add **@types/modulename** 
    ```bash
    npm install @types/express --save
    npm install --save-dev @types/jquery 
    ```
## 8. Generics
For the type, we are not sure
```typescript
function createArray<T>(length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']
createArray<number>(2, 6);
```
## 9. With ES6
```typescript
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
// other internal defined type: Document、HTMLElement、Event、NodeList 
```
