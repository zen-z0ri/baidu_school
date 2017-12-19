/**
 * Created by tung on 2/06/17.
 */
/*
 * String!!
 * !!!different from JAVA in js, string is a primer type;
 * it's passed by value
 */
let a = new String("Hello world, hello javascript");
let b = 'Hello node.js and FP';
/**
 *  Template string
 *  ES6 introduces a new type of string literal that is marked
 *  with back ticks (`).
 *  These string literals can include newlines, and there is a string
 *  interpolation for inserting variables into strings:
 */
let name = 'Sam';
let age = 42;

console.log(`hello my name is ${name}, and I am ${age} years old`);
console.log('hello my name is ${name}, and I am ${age} years old');

/**
 * i) charAt(idx) return the character at idx
 *      Array[idx]
 *      Array.from(str)[idx]
 */
console.log('***********.charAt()***********');


/**
 * ii) concat() can accept multi value, will not change the origin
 *      like array
 */
console.log('***********.concat()***********');


/**
 * iii) 1. includes(ele, startIdx) return boolean if includes
 *      can be used in Array
 *      2. startsWith(ele, startIdx) return boolean
 *      3. endwith(ele, startIdx) return boolean
 */
console.log('***********.includes() & .startsWith() & .endsWith()***********');
let s = 'Hello world!';
console.log(s.startsWith('world', 6)); // true
console.log(s.endsWith('Hello', 5)); // true
console.log(s.includes('Hello', 6)); // false


/**
 * iv) .substring(startIdx,endIdx)
 */
console.log('***********.substirng()***********');
console.log(a.substring(2,8));


/**
 * v) .toLowerCase()   .toUpperCase()
 */
console.log('***********.toLowerCase() & .toUpperCase()***********');

/**
 * vi) "string".match(pattern)  -->  like--> pattern.exec("string")
 *      Return An Array containing the entire match result and any
 *      parentheses-captured matched results;
 */
console.log('***********.match()***********');
let str = 'For more information, see Chapter 3.4.5.1';
let re = /see (chapter \d+(\.\d)*)/i;
let found = str.match(re);
console.log(found);
/**
 * logs [ 'see Chapter 3.4.5.1',
 * 'Chapter 3.4.5.1',
 * '.1',
 * index: 22, //first regex start idx
 * input: 'For more information, see Chapter 3.4.5.1' ]
 */
console.log('********************************');
str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
re = /[A-E]/i;
found = str.match(re);
console.log(found);
console.log('********************************');
re = /[A-E]/gi;
found = str.match(re);
console.log(found);


/**
 * vii) .replace(regexp|substr ,"smString" ) **not** change the origin!!!
 *
 */
console.log('****************.replace()****************');
/**
 * str.replace(regexp|substr, newSubstr|callback|pattern);
 *
 */
re = /(\w+)\s(\w+)/;
str = 'John Smith';
newstr = str.replace(re, '$2 $1'); // It's a pattern the call bakck
console.log(newstr);  // Smith, John
console.log(str);
console.log('*********************************************');

re1 = /^(\d{4})(\W*)(\d{2})(\W*)(\d{2})(\W*)/;
str1 = '1898-*^(@@11-*^(*21*(*';
newstr1 = str1.replace(re1, '$1***$3***$5_____($2$3$4)');
console.log(newstr1);
console.log(str1)
console.log('*********************************************');

str = 'Twas the night before Xmas...';
newstr = str.replace(/xmas/i, 'Christmas');
console.log(str);
console.log(newstr);  // Twas the night before Christmas..
/**
 * !!!These methods can use RegExP()
 *      match(), replace(), search(), split()
 */

console.log("*****************reverse a string**************************");
let test = 'hello world';
console.log(Array.from(test).reverse().join(""));
// interator
console.log(...test);
for(let i of test){
	console.log(i)
}