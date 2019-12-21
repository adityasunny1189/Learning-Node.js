const JsonFind = require("json-find");
const test = require("./data.json")

const doc = JsonFind(test);

var name = "sex";

if(doc.checkKey(name)) {
    console.log(doc.checkKey(name));
}else {
    console.log("word not present");
}

