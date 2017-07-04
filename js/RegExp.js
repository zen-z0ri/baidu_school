/**
 * Created by tung on 4/06/17.
 */
/*
 * RegExp
 * flag: g --> global, i --> insensitive, m --> multiple-line
 *      RawString --> RegExp
 *        '\\w'        '\w'
 */
/**
 * i) pattern.exec(string)
 * 1. Return to the first match element;
 * If it has the 'g' attribute, it can exectes many times,
 * each time it matches the next one, until null, then, restart again.
 * 2. It has attributes: .input .index
 * @type {RegExp}
 */
// pat1 and pat2 are the same
let pat1 = /[^\w]+/gi;  //declare a pattern
//pass a string to a pattern, so \ need to escape \\ (actually it's double escape)
//To pattern \, we need string "\\\\" to a RegExp '\\', and than pattern \
let pat2 = new RegExp('[^\\w]+','gi');

let res0_1 = pat1.exec('sw*w322#121@@W');
let res1_1 = pat1.exec('sw*w322#121@@W');
let res2_1 = pat1.exec('sw*w322#121@@W');
let res3_1 = pat1.exec('sw*w322#121@@W');
console.log(res0_1);
console.log(res1_1);
console.log(res2_1);
console.log(res3_1);
console.log('*****************');

let res0_2 = pat2.exec('sw*w322#121@@W');
let res1_2 = pat2.exec('sw*w322#121@@W');
let res2_2 = pat2.exec('sw*w322#121@@W');
let res3_2 = pat2.exec('sw*w322#121@@W');
let res4_2 = pat2.exec('sw*w322#121@@W');
console.log(res0_2);
console.log(res1_2);
console.log(res2_2);
console.log(res3_2);
console.log(res4_2);


/**
 * ii) pattern.test(string)
 * Return to a boolean type
 * @type {RegExp}
 */
let pat3 = RegExp("\\\\");
if(pat3.test("\\")){
  console.log("***********true***********");
  console.log('\\'.match(pat3));
}


/**
 * iii) These String methods can use RegExp()
 *      match(), replace(), search(), split()
 *      see at string part:
 *      .march() is a string method -- string.match(pattern)
 *      .exec() is a RegExp method  -- pattern.exec(string)
 */
console.log('***************************');
let tSting = "f*)s&*&fs*(df";
console.log(tSting);
console.log('**********replace()**********');
console.log(tSting.replace(/[f|\W]/g,'-'));
console.log('**********split()**********');
console.log(tSting.split(/\w+/g));

/**
 * iv) Group "()"
 * 1. Group
 * 2. Multi branch
 * 3. Get data group
 */
console.log("***********Group**************");
let pat4 = /(ab)+/g;
let string = "ababa abbb ababab";
console.log( string.match(pat4) ); // ["abab", "ab", "ababab"]

console.log("***********Multi branch**************");
let pat5 = /^I love (JavaScript|Regular Expression)$/;
console.log( pat5.test("I love JavaScript") ); // true
console.log( pat5.test("I love Regular Expression") ); // true

console.log('****************Get data group****************');
let pat6 = /(\d{4})-(\d{2})-(\d{2})/;
let str = "2017-06-12";
console.log(pat6.exec(str));  // Smith, John
console.log(str.replace(pat6, "$1-&&-$3--$2"));

console.log('****************replace****************');
function escapeHTML(str) {
  let escapeChars = {
    '¢' : 'cent',
    '£' : 'pound',
    '¥' : 'yen',
    '€': 'euro',
    '©' :'copy',
    '®' : 'reg',
    '<' : 'lt',
    '>' : 'gt',
    '"' : 'quot',
    '&' : 'amp',
    '\'' : '#39'
  };
  return str.replace(new RegExp('[' + Object.keys(escapeChars).join('') +']', 'g'), function(match) {
    return '&' + escapeChars[match] + ';';
  });
}
console.log( escapeHTML('<div>Blah blah blah</div>') );