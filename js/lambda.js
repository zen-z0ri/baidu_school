/**
 * Created by tung on 1/06/17.
 */
/**
 *Basic structure
 * 1. (x) => (y) // Implicit return
 *    (x, y, z) => (x+y*z)
 *    (x) => ({a:"field"}) //Object Literal must use {}
 *
 * 2. x => { return y } // Explicit return
 *
 * 3. (x, y, z) => { ... } // Multiple arguments
 *
 * 4. (() => { ... })() // Immediately-invoked function expression
 */
const functionName = (pA, pB) => (pA+pB);
console.log(functionName(1, 2));
console.log('***********************');
/**
 * Pure function
 * 1. The output of the function is only related to the input,
 * and the output of the same input is consistent and does not
 * depend on external conditions.
 *
 * 2. The function call does not change the state or variable
 * other than the function field,and does not cause side effects
 * on the system.
 *
 * 3. Just like in JAVA the function use the local variable is a
 * pure function
 */
//not pure
let counter1 = 0;
const increment1 = () => (++counter1);
console.log(counter1);
console.log(increment1());
console.log(counter1);
console.log('***********************');
//pure function
let counter2 = 0;
const increment2 = (counter2) => (++counter2);
console.log(counter2);
console.log(increment2(counter2));
console.log(counter2);
console.log('***********************');
//just like JAVA the non- primitive data type use the
//pointer(reference) to path value
class Student{
    constructor() {
        this.id = "123";
    }
}
const changeID = (objA) => {
    objA.id = 'wow';
}
let stuA = new Student();
console.log(stuA.id);
changeID(stuA);
console.log(stuA.id);
/**
 * High-level function
 */
