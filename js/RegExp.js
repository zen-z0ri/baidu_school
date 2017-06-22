/**
 * Created by tung on 4/06/17.
 */
/*
 * RegExp
 * flag: g --> global, i --> insensitive, m --> multiple-line
 *      RawString --> RegExp
 *        '\\w'        '\w'
 */
// pat1 and pat2 are the same
let pat1 = /\w+/gi;
let pat2 = new RegExp('\\d{2,}','gi');

let res = pat2.exec('sw_w322121W');
let res1 = pat2.exec('sw_w322121W');
let res2 = pat2.exec('sw_w322121W');
let res3 = pat2.exec('sw_w322121W');
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
/**
 * !!!These methods can use RegExP()
 *      match(), replace(), search(), split()
 */

// // use pattern.exec(text)  pattern.test(text) --> boolean
// var a = "mom aNd dAd aNd baby";
// var a = "mom aNd dAd ";
// var pat3 = /mom( and dad (and baby)?)?/ig;
// var matches = pat3.exec(a); //!! store in an array the pattern result
// alert(matches.length);
// alert(matches[0]);
// alert(matches[1]);
// alert(matches[2]);
// use g model to search multiple times
