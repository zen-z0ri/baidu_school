/**
 * Created by tung on 2/07/17.
 */
/**
 * i) apply() and call()
 * fun.apply(targetObj, [argsArray])
 * fun.call(targetObj, arg1, arg2, ...)
 */
console.log("**************apply()***************");
// min/max number in an array
let numbers = [5, 6, 2, 3, 7];
// using Math.min/Math.max apply
let max0 = Math.max.apply(null, numbers);
console.log(max0);
let max1 = Math.max(...numbers);
console.log(max0);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

let min0 = Math.min(...numbers);
console.log(min0);
let min1 = Math.min.apply([],numbers);
console.log(min1);

console.log("**************call()***************");
function greet() {
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}
let i = {
  person: 'Douglas Crockford', role: 'Javascript Developer'
};
greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer
greet.apply(i); // the same

/**
 * ii) rest and spread
 * rest can replace call(), form a list params to a array
 * spread can replace apply(), make an array to a list of params
 */
console.log("**************rest***************");
function sortNumbers0() {
  return Array.from(arguments).sort((x, y) => (x-y));
}
console.log(sortNumbers0(1,5,2,21,17,4,3));

const sortNumbers1 = (...numbers) => numbers.sort();
console.log(sortNumbers1(1,5,2,4,3)); //form a list params to a array

console.log("**************spread***************");
// ES5
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f(...args);