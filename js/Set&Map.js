/**
 * Created by tung on 5/07/17.
 */
/**
 *  new Set()  // lets you store ***unique*** values of any type
 *
 *  Properties
 *  1) Set.prototype.size
 *
 *  Methods
 *  2) Set.prototype.add(value)
 *        Appends ***only one** new element.
 *        Returns the whole Set object.
 *  3) Set.prototype.clear()
 *        Removes all elements from the Set object.
 *  4) Set.prototype.delete(value)
 *        Removes the element.
 *        Returns a boolean.
 *  5) Set.prototype.has(value)   --> includes() in array and string
 *        Returns a boolean.
 *  6) .keys()：return the key Iterator
 *     .values()：return the values Iterator
 *     .entries()：return the ele Iterator
 */
var mySet = new Set([9, 6, 7]);

mySet.add(1); // Set { 9, 6, 7, 1 }
mySet.add(5); // Set { 9, 6, 7, 1, 5 }
mySet.add(5); // Set { 9, 6, 7, 1, 5 } only unique value
mySet.add('some text'); // Set { 9, 6, 7, 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay
//Set { 9, 6, 7, 1, 5, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }
console.log(mySet.valueOf());
mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed

mySet.size; // 4, we just removed one value
//Set { 9, 6, 7, 1, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }
console.log(mySet);


// !!!clear a duplicate value in an array
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
console.log(unique);


/**
 * 6) Iterator (like return an array)
 */
console.log("**********.keys()*************");
let set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {    //can't use for...in
  console.log(item);
}
// red
// green
// blue
console.log("**********.values()**************");
for (let item of set.values()) {   //can just use for...of set
  console.log(item);
}
// red
// green
// blue
console.log("**********.entries()*************");
for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]


/**
 * Set operation
 */
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// union
let union = new Set([...a, ...b]);// Set {1, 2, 3, 4}
// intersect
let intersect = new Set([...a].filter(x => b.has(x)));// Set {2, 3}
// difference
let difference = new Set([...a].filter(x => !b.has(x)));// Set {1}



/**
 *  The Map object is a simple key/value map.
 *  It's similar to object
 *
 *  Properties
 *  1) Map.prototype.size
 *
 *  Methods                                                                      
 *  2) Map.prototype.set(key, value)
 *       Sets the value for the key in the Map object. Returns the Map object.
 *  3) Map.prototype.clear()
 *       Clear all;
 *  4) Map.prototype.get(key)
 *       Returns the value associated to the key, or undefined if there is none.
 *  5) Map.prototype.delete(value)
 *        Returns a boolean value
 *  6) Map.prototype.has(value)   -->  has() in Set,  includes() in array and string
 *        Returns a boolean.
 *  7) .keys()：return the key Iterator
 *      .values()：return the values Iterator
 *      .entries()：return the ele Iterator
 */
console.log("************************new Map()*******************")
const m = new Map();
const obj = {p: 'Hello World'};
m.set(obj, 'content');   // relate  obj -->  'content'
m.set(obj, 'ds');      // cover the old value:  obj --> 'ds'
m.set('key', obj);
console.log(m.get('key'));  // return the a object --> obj  { p: 'Hello World' }
console.log(m.get(obj)); // "ds"
console.log(m.has(obj)); // true
console.log(m.delete(obj)); // true
console.log(m.has(obj)); // false


//The Map constructor accepts the array as a parameter
console.log("************************construct Map*******************");
const items = [
  ['name', 'Tom'],
  ['title', 'Author']
];
const map = new Map();
items.forEach(
  ([key, value]) => map.set(key, value)
);

/**
 *
 */
console.log("************************ Map Iterator*******************");
const newMap = new Map([
 [1, 'one'],
 [2, 'two'],
 [3, 'three'],
]);
console.log([...newMap.keys()]);// [1, 2, 3]
console.log([...newMap.values()]);// ['one', 'two', 'three']
console.log([...newMap.entries()]);// [[1,'one'], [2, 'two'], [3, 'three']]
console.log([...newMap]); // [[1,'one'], [2, 'two'], [3, 'three']]


/**
 * The data structures have Iterator interface is as follows:
 * These can use --> for...of
 * Unlike the **forEach** method, it can be used with **break**, **continue**
 * and **return**.
 *
 * i) Array
 * ii) String
 * iii) Map
 * iv) Set
 * v) TypedArray
 */




