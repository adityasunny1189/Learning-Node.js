//First node code

//loading the file system(fs) module

const fs = require("fs");

//reading the content of file in utf-8 encoding format using readFileSync function

var text = fs.readFileSync("os.txt" , "utf-8");

console.log(text);