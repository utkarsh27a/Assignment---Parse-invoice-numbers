var { main, checker } = require("./invoice-numbers");

var fs = require("fs");
let input = fs.readFileSync('./input_user_story_1.txt');

console.log('---------------------------------------------------------------');
console.log('------------------- Reading Inputs File -----------------------');
console.log('---------------------------------------------------------------');
// console.log(input.toString());

console.log();
console.log();

var result = main(input.toString());

console.log('---------------------------------------------------------------');
console.log('------------------- Converting Numbers ------------------------');
console.log('---------------------------------------------------------------');
console.log(result);

console.log();
console.log();

console.log('---------------------------------------------------------------');
console.log('-------------------- Checking Numbers -------------------------');
console.log('---------------------------------------------------------------');

console.log();
console.log();

let outputs = fs.readFileSync('./output_user_story_1.txt');

checker(result, outputs.toString());

console.log();
console.log();

console.log('---------------------------------------------------------------');
console.log('-------------------- Checking Finished ------------------------');
console.log('---------------------------------------------------------------');