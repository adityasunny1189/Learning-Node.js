const JsonFind = require("json-find");
const test = require("./data.json")

document.getElementById("but").addEventListener("click" , function () {
    var word = document.getElementById("word").value;

    const doc = JsonFind(test);
    if(doc.checkKey(word)) {
        alert(doc.checkKey(word));
    }
    else {
        alert("word not present");
    }
});