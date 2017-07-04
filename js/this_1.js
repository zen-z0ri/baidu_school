/**
 * Created by tung on 2/07/17.
 */
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;
  console.log(this===global);
  function growUp() {
    // In non-strict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    console.log(++this.age);
  }
  growUp();
}
console.log("*************Person as a object*************")
let p = new Person();

