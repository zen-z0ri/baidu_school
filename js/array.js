/**
 * Created by tung on 1/06/17.
 */
/**
 * create a array
 */
let a = [];
let b = ["ss", 2, 5];
let c = new Array();
var d = new Array("bob", "alice", "chris");
var e = Array.of(1, 2, 3);
//to check if it's an array
console.log(Array.isArray(a)); //true
console.log(a instanceof Array); //true
console.log('**********************');
/**
 * use .length to add a new element
 */
b[b.length] = "haha";
//not have index -1, so just use self.length-1 to access the last one
console.log('the last of b: '+b[b.length-1]);
/**
 * it's a reference type use 'instanceof' to check
 *  just like a 'typeof' to primitive type
 */
if(b instanceof Array){
    console.log('b is an array!!!');
}
// print to String
console.log('b toString() return to a String');
console.log(b.toString()); //return to a String with no []
console.log('b valueOf() return to an array == b');
console.log(b); //return to an array


/**
 * i) join: return a the new String with array value
 * but don't change the original one
 */
console.log('***********join***********');
console.log(b.join("--"));// ss--2--5--haha


/**
 * ii) stack method: 1. push() --> b[b.length] = "haha"
 *                   2. pop()
 */
console.log('***********.push & .pop***********');
/**
 * !!!push() return the length of new array
 *    and change the array
 * that's way we use
 *      a = ['s','f'];
 *      b = [];
 *      b.push(a);//or Array.prototype.push.call(b, a);
 *      console.log(b);//[ [ 's', 'f' ] ]
 * not
 *      b = [].push(a);
 *      console.log(b);//1
 * !!!pop() return the last element of array
 *          and change the array
 */
console.log('the length of new array: '+b.push(2,3,"heng"));
console.log(b);
console.log(b.pop());//return the last one
console.log(b);


/**
 * iii) line method: 1. unshift() --> insert
 *                  2. shift()
 */
console.log('***********.unshift & .shift***********');
/*
 *just like before unshift() return the legnth and
 * shift() return the element
 */
b.unshift('head','11');
console.log(b);
console.log(b.shift());
console.log('now testb is '+b);


/**
 * iv) reverse()
 *      change the original array
 */
console.log('***********.reverse()***********');
//return to the reverse Array
console.log('before:');
console.log(b);
console.log('afther:');
b.reverse();
console.log(b);
/**
 * reverse a String
 * let test = 'sdsfsfdsfsdfxcxvxz'
 * let test = test.split('').reverse().join('');
 * 1. String to Array
 *       let a = s.split('')  ---> like JAVA
 *    in js6 we use
 *       let a = Array.from(s)
 *
 * 2. Array to String with no ','   a,join('')
 *
 */


/**
 * v) any array-like object or iterable like Set and Map
 *    or DOM
 *    let ps = document.querySelectorAll('p');
 *      Array.from(ps).forEach(function (p) {
 *      console.log(p);
 *    });
 */
console.log('***********Array.from()***********');
var iterableObj = {
    length: 3,
    0: 's',
    1: 'i',
    2: 't'
};
console.log(Array.from(iterableObj));


/**
 * vi) sort() --> only sort the String value, so if you want to sort num
 * Return The sorted array.
 */
console.log('***********.sort()***********');
c = [2, 4, 11, 2, 1, 65, 62, 13];
console.log('String value');
console.log(c.sort());
console.log('use callback to fix it for number');
console.log(c.sort((x, y) =>
    ((x<y)?-1:1)
));


/**
 * vii) concat()  accept multiple value
 *      does not affect original
 *      the same as the String
 */
console.log('***********.concat()***********');
// return the new concat array

/**
 * viii) slice(idx1, idx2)  [idx1,idx2) --> does not affect original
 * return to the selected subarray
 */


/**
 * ix) splice(sidx, changeNum, changeEle ...);
 *      change the original array
 *      sidx --> the change start index
 *      changeNum --> the number of elements that be changed
 *      changeEle --> the content be changed to
 *    1. change
 *          test.splice(2,1,"hah");
 *    2. insert
 *          test.splice(2,0,'ele1','ele2');
 *    3. delete
 *          test.splice(1,4);
 */
console.log('***********.splice()***********');


/**
 * x) 1. find(callback) find the first element that satisfy condition
 *    2. findIndex(ele) find the first idex of a ele
 *    3. indexOf() return the indexof ele
 *      can be used in String
 *    4. includes(ele) return boolean if includes
 *      can be used in String
 */
console.log('***********.find()***********');
console.log([1, 4, -5, 10].find((n) => (n < 0)));


/*
 * A callback is a function that is passed as an argument
 * to another function
 * and is executed after its parent function has completed.
 *
 * These will not effect the original method
 * These will take three element: curVal, idx, and array
 * 1. every(ele, idx, array => )
 *      --> return boolean : if all elements are fit the rule
 * 2. some(ele, idx, array => )
 *      --> return boolean : if any element is fit the rule
 * 3. filter(ele, idx, array => )
 *      --> return an array of eles that accoding the rules
 * 4. map(ele, idx, array => )
 *      --> return a new array which is the result of each elements
 * 5. forEach(ele, idx, array => )
 *      --> no return value just do something for each
 *          map, set also have forEach()
 * 6. reduce(acc, ele,  idx, array, initVal)
 *      --> return a single a value
 *      accept five perameter: accumulator, ele,  idx, and array,  and
 *      initial value
 */


console.log('****************************');
d = [3, 4, 1, 2, 3, 4];
console.log(d);
console.log('***********.every()***********');
console.log(d.every((ele, idx) => (ele<=3)));

console.log('***********.some()***********');
console.log(d.some((ele, idx) => (ele<=3)));

console.log('***********.filter()***********');
console.log(d.filter((ele, idx) => (ele<=3)));

console.log('***********.map()***********');
console.log(d.map((ele, idx) => (ele+idx)));
console.log(d);

console.log('***********.forEach()***********');
d.forEach(
    (ele, idx, array) => {array[idx] = ele + 10;}
); //??
// d.forEach(ele => ele+=10);//?
console.log(d);

console.log('***********.reduce()***********');
console.log(d.reduce((acc, ele) => (acc+ele)));
