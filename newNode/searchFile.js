const JsonFind = require("json-find");
const test = require("./data.json")

const doc = JsonFind(test);
 
// var name = "exploit";

var name = process.argv[2];

if(doc.checkKey(name)) {
    console.log(doc.checkKey(name));
}else {
    console.log("word not present");
}

