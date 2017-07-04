
/**
 *  1. first check if the variable is a local one: if its copy by outside
 *  2. <declare nearest principle>, even the parent chain have it, where its nearest declaration used
 *  3. notice the hoisting of var, if it's undefined,
 *
 */
function add(){
    // let i = 0
    arr = [];
    for(var i=0; i < 10; i++){
        arr.push(i);
    }
    console.log('fs'+arr)
    return arr;
}
var temp = add();

console.log(temp[2])
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
const numbers = [[5, [6,2]], [2,[4,[4,5]]], 3, 7];
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