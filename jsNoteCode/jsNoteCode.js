/**
 * Created by tung on 3/05/17.
 */
/**
 *  1. first check if the variable is a local one: if its copy by outside
 *  2. <declare nearest principle>, even the parent chain have it, where its nearest declaration used
 *  3. notice the hoisting of var, if it's undefined,
 *
 */
// var tmp = new Date(2131);
// function f1() {
//     console.log(tmp);
//     if(false){
//         var tmp = "hello";
//     }
// }
// f1(); //undefined

// function f(){
//     var n = 5;
//     {
//         var n =10;
//     }
//     console.log(n);
// }
// f();//10 -- var is not  block-scope

/*!!!!
 * the scope of aa() its only decided by where its defined!!!
 */
// var a=1;
// function aa(){
//     console.log(a);
// }
// function bb() {
//     console.log(a); //undefiend nearest principle
//     var a=2;
//     aa();   // in this step jump to function define aa();
// }
// bb(); //1!!

// var a=1;
// function bb() {
//     var a=2;
//     function aa(){
//         console.log(a);
//     }
//     aa();//2
// }
// bb(); //2

// var  a=11;
// function fn() {
//     a=2;  //local variable
//     console.log(a);
//     return;
//     function a(){}
//
// }
// fn();
// console.log(a); //11

/*
 *  the memory of the local variable
 */
// var a =10;
// function aaa(a){  //has already declare an a
//     a += 3;
//     console.log(a);//13
//     var a =11;
// }
// aaa(a);
// console.log(a); //10

// var a=10;
// function aa(a){  // local variable as a alias
//     alert(a);    //10
//     var a = 20;
//     alert(a);
// }
// aa(a);

// var a =10;
// function aa(a){
//     var a =12;
//     alert(a);
// }
// aa(a);

// var a = [1, 2, 3];
// function foo(a) { // step-2
//     a = [1, 2, 3, 4];
// }
// foo(a); //step-1 local a referrence point to var a.
// alert(a); //1,2,3

// var a = [1, 2, 3];
// function foo(a) { //step-2
//     a.push(4);
// }
// foo(a); //step-1 local a referrence point to var a.
// alert(a); //1,2,3,4

// var a = 10;
// function aa() {
//     a += 3; //undefined + 3 := NaN
//     alert(a); //NaN
//     var a = 11;
// }
// aa();
// alert(a);


// function d() {
//     let a = {m:"h", n:"e", q:"l", p:"l", s:"o"};
//     for(let x in a){ //index
//         alert(x+" postion's value is "+a[x]);
//     }
//     for(let x of a){ //the value
//         alert(x);
//     }
// }
// d();

/*
 *   create a array
 */
// let a = [];
// let b = ["ss", 2, 5];
// let c = new Array();
// let d = new Array("bob", "alice", "chris");
// //use .length to add a new element
// b[b.length] = "haha";
// alert(b[b.length-1]);
// // it's a referrence type use instanceof to check
// // just lick a typeof to promertype
// if(b instanceof Array){
//     alert("it's an Array");
// }
// // print to String
// alert(b.toString()); //return to a String
// alert(b.valueOf()); //return to an array
// // i) use join to change the print
// alert(b.join("--"));// ss--2--5--haha
// // ii) stack method: 1. push() --> b[b.length] = "haha"   2. pop()
// b.push(2,3,"heng");
// //iii) line method: 1. unshift() --> insert 2. shift()
// let test = [3, 5, 2, -2, 7, 25];
// //iv) reverse()
// test.reverse();
// alert(test);

// //v) sort() --> only sort the String value, so if you want to sort num
// alert(test.sort());//wrong
// function compare(va1, va2){
//     if (va1>va2){
//         return 1;
//     }else if(va1<va2){
//         return -1;
//     }else return 0;
// }
// test.sort(compare);//correct
//another way
// function leTh(va1,va2){
//     return va1-va2;
// }
// test.sort(leTh);//
// alert(test); //correct
//vi) concat   accept multiple value
// var test = [1, 3, 4, 5, 7];
// var test2 = [2, 6];
// //vii)  slice(idx1, idx2) 切片 [idx1,idx2) --> does not affect original
// //viii) splice(sidx, changeEleN, changeCnt);
//     //  sidx --> the change start index
//     //  changeEleN --> the number of elements that be changed
//     //  chengeCnt --> the content be changed to
//     test.splice(2,1,"hah");
//     alert(test);
//     // insert
//     test.splice(2, 0, "in", "sert");
//     // delete
//     test.splice(1,4);
//x) split()
//ix) indexOf('ds'); just like it in String
//x)
//
// /*
//  * A callback is a function that is passed as an argument to another function
//  * and is executed after its parent function has completed.
//  *
//  * These will not effect the original method
//  * These will take three element: curVal, idx, and array
//  * 1. every() --> return boolean : if all elements are fit the rule
//  * 2. some()   --> return boolean : if any element is fit the rule
//  * 3. filter() --> return an array that accoding the rules
//  * 4. map()     --> return a new array which is the result of each elements
//  * 5. forEach() --> no return value just do somthing for each
//  */
// 1.
//  let a = [3, 4, 1, 2, 3, 4];
//
//  alert(a.every(function(item, idx, arry){
//      return idx <=4;
// }));
// 2.
// alert(a.some(function(item){
//     return item ===4;
// }));
// 3.
// alert(a.filter(function(item, idx, arry){
//     return (arry[idx] > arry[idx-1]) && item>=2;
// }));
// 4.
// alert(a.map(function(item,idx,arry){
//     return item+arry[idx-1];
// }));
// alert(a);
// 5.
// // no return -- can use for(of)
// a.forEach(function(item,idx,arry){
//     // do something
// });
// //filter something in an array
// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
//
// /**
//  * Array filters items based on search criteria (query)
//  */
// function filterItems(query) {
//     return fruits.filter((el) =>
//         el.toLowerCase().indexOf(query.toLowerCase()) > -1 //lambda
//     )
// }
// console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']

/*
 *reduce() of an array
 *accept five perameter: accumulator, currentItem,  idex, and array,  and
 * initial value
 */
// var a = [1,7,2,3,6,5,4];
// // the sum of the array
// alert(a.reduce((accum,curr)=> accum+curr,10)); // with initial value 10
// // the max of the array
// alert(a.reduce((accum,curr) => (accum>curr)?item:preitem));
// alert(a.reduce((pre,next)=>Math.max(pre,next)));

// /*
//  * String!!
//  */
// var testS = new String("Hello world, hello javascript");
//// i) charAt() return the character at idx
// ii) cocat() can accept multi value, will not change the origin
// alert(testS.concat(", hello","web"));
//// iii) substirng(idxa,indxb)
// alert(testS.substring(2,8));
//// iv) .toLowerCase()   .toUpperCase()
//// V) "string".match(pattern)  -->  like--> pattern.exec("string")
////return an array
// var testS = "cat bat, sat, fat";
// var pattern = /.at/;
// var mat = testS.match(pattern);  //return a array
// alert(mat[0]);
//// vi) .search() return the --index-- where the pattern first fund
// alert(testS.search(/.at/));
//// vii) .replace("" ,"smString" ) change the origin

/*
 * regExp
 * flag: g --> global, i --> insensitive, m --> multiline
 */
// var pat1 = /[bc]*./i;
// var pat2 = new RegExp("[\\w]+","ig");
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

// /**
//  * function
//  * there is two ways to declare function
//  */
// //function declare: pre-precessed
// function sum(num1, num2) {
//     return num1 + num2;
// }
// //variable function declare: just like variable
// var sum = function (num1, num2) {
//     return num1 + num2;
// };
// alert(sum(10,1));
// var s = callSomeFunction(sum,2,3);

// arguments.length arguments.callee --> return to the function pointer
// this convenient to the name change of function
// function factorial(num){
//     if(num===1){
//         return 1;
//     }else return num*arguments.callee(num-1);
// }
// function factorial(num){
//     if(num===1){
//         return 1;
//     }else return num*factorial(num-1);
// }
// //then you can change the name of this function
// var fa = factorial;
// alert(fa(5));



/*
 *in function .length and .prototype argument.length and argument.callee
 * argument.length represent the real number of argument
 * .length represent the expect number of argument
 */

/*
 * there are two methods of function
 * .call()   and     .aplly()
 */
// var numbers = [[5, [6,2]], [2,[4,[4,5]]], 3, 7];
// // //why [] ??  that's because that the initial value
// const flatten = arr => arr.reduce( (acc, val) => acc.concat(Array.isArray(val)?flatten(val):val),[]);
// alert(flatten(numbers));
// var test = [1, 2, 3, 4, 6];
// alert(test.reduce( (acc,val) => acc+val , 10)); //26 --> sum 16 + 10
// alert(test.concat(numbers));
/*
 *haven't changed the value of acc
 * that's why we use apply and call
 */
// function flatten(arr) {
//     let acc = [];
//     for(let i= 0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             acc.concat(flatten(arr[i]));//!!!
//         }else{
//             acc.concat(arr[i]);//!!!!
//         }
//     }
//     return acc;
// }
// alert(flatten(numbers));
// // notice the difference
// function flatten(arr) {
//     let acc = [];
//     for(let i= 0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             acc=acc.concat(flatten(arr[i])); //!!!
//         }else{
//             acc=acc.concat(arr[i]);//!!!
//         }
//     }
//     return acc;
// }
// alert(flatten(numbers));
//// the use of the call and apply
// function flatten(arr) {
//     let acc = [];
//     for(let i= 0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//            acc.push.apply(acc,flatten(arr[i])); //!!!
//             // newArray.push(1,2,3,4) 是指定逗号分隔的参数列表，
//             // 而 Array.prototype.push.apply(newArr, [1, 2, 3, 4]) 参数列表是用数组指定的，
//             // 不是一个个指定的。
//         }else{
//            acc.push(arr[i]);//!!!
//         }
//     }
//     return acc;
// }
// alert(flatten(numbers));


//----------------------------------------------------
/*
 * the object value
 */
// var o1 = new Object();  // null
// var o3 = {};
// var o2 = new Object(null);
// let people = {
//     name : "ydon",
//     gender : "male",
//     age : 23,
//     print : function () {
//         this.name = "boyibo"
//         return this.name+" is a "+this.age+" years old "+this.gender;
//     }
// };
//
//  // there is two ways to represent the attributes
// alert(people.name);
// alert(people["name"]);
// alert(people.print());
//-------------------------
// function displayInfo(inpu) {
//     let output = "";
//     if(typeof inpu.name === "string"){
//         output += "Name : "+inpu.name+"\n";
//     }
//     if(typeof inpu.age === "number"){
//         output += "Age : "+inpu.age+"\n";
//     }
//     console.log(output);
// }
// displayInfo({
//     name : "boybo",
//     age : 23
// });
// displayInfo({
//     name : "zhazha"
// });
