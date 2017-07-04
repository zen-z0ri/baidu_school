/**
 * Created by tung on 16/06/17.
 */
/*
 * the object value , see also class
 */
var o1 = new Object();  // null
var o2 = {}; //Best practice
let people = {
    "name" : "ydon", //prefer field name with "", like JSON
    gender : "male",
    age : 23,
    print : function () {
        this.name = "boyibo"
        return this.name+" is a "+this.age+" years old "+this.gender;
    }
};

// there is two ways to represent the attributes
console.log(people.name);
console.log(people["name"]);
console.log(people.print());
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
/**
 * Because JSON field name must be quoted, it better to use quoted in js object
 */