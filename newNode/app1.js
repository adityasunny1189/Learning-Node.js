// const fs = require("fs");

// fs.appendFileSync("text1.txt", " This is appended message");

// console.log("Hello World!");

// console.log("Dog");
// const name = require("./util.js");
// console.log(name);


const fib = require("./util.js");

const calculate = require("./math.js");

const validator = require("validator");
const chalk = require("chalk");

console.log(chalk.blue("Hello World"));
console.log(chalk.green.bold("Hello World"));
console.log(chalk.red.bold("Hello World"));
console.log(chalk.bold("Hello World"));
console.log(chalk.bgRed("Hello World"));
console.log(chalk.green.bgRed.bold("Hello World"));
console.log(chalk.yellow.italic.bold("Hello World"));
console.log(chalk.yellow.underline.italic.bold("Hello World"));





// var ch = '*';
// console.log(calculate(4,'-',3));
// console.log(fib(20));

console.log(validator.isEmail("adityasunny1189@gmail.com"));