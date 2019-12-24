const fs = require("fs");

// const book = {
//     title: "Eat that frog",
//     author: "Brain stacy"
// };

// const BookJson = JSON.stringify(book);

// fs.writeFileSync("1-json.json",BookJson);
// // console.log(BookJson);


// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.author);


const personalData = fs.readFileSync("1-json.json");
const personalINFO = personalData.toString();
const INFO = JSON.parse(personalINFO);
const changedName = "sunny";
const changedAge = 20;
INFO.Name = changedName;
INFO.Age = changedAge;
const newconst = JSON.stringify(INFO);
fs.writeFileSync("1-json.json", newconst);














