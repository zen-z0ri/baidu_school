/**
 * Created by tung on 13/06/17.
 */
let obj1 = {
    name: 'test',
    age: 21
};
function addOneYear(obj) {
    obj.age+=1;
}
addOneYear(obj1);
console.log(obj1.age);

let str = 'test';

function changeStr(input) {
    input+'__';
}
changeStr(str);
console.log(str);
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

//fsfs
function a() {
    var i = 0;
    function b() { console.log(++i); }
    return b;
}
var c = a();
c();
c();
function f1(){
    var n=999;
    nAdd=function(){n+=1}
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 999
result(); // 1000
////
for (var i=1; i<=5; i++) {
    (function(){
        var j = i;
        setTimeout( function timer(){
            console.log( j );
        }, j*1000 );
    })();
}