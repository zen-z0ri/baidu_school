/**
 * Created by tung on 5/07/17.
 */
/**
 * i) Promise
 * 1. It has three states: Pending, Resolved, Rejected
 * 2. Only two pathway:     Pending
 *                             |
 *                     ________|________
 *                    |                 |
 *                    |                 |
 *                Resolved            Rejected
 * 3. It must have at least one .then() methods
 */

/**
 * ii) Generator
 */

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  yield 'tung';
  return 'ending';
}

let hw = helloWorldGenerator();
console.log(hw.next());// { value: 'hello', done: false }
console.log(hw.next());// { value: 'world', done: false }
console.log(hw.next());// { value: 'tung', done: false }
console.log(hw.next());// { value: 'ending', done: true }
