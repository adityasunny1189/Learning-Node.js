console.log("Welcome user to my notes app");
// var ch = process.argv[2];
// do{

// }while(ch === 'y');
// var cnt = 0;
//ask user for option 
// while(cnt < process.argv[2]) {
//     console.log("1.Add Note\n2.Remove Note\n3.Display Note");
//     switch(process.argv[3]) {
//         case 1: console.log("Note Added...");break;
//         case 2: console.log("Note Removed...");break;
//         case 3: console.log("Notes Displayed...");
//     }
//     cnt++;
// }
// // 1.add , 2.remove , 3.display

// push the string in an array

//pop the string in an array

//display the array



var command = process.argv[2];
var Notes = ["Do coding", "Read C++", "Do shell scripting"];
if(command === "add") {
    console.log("Adding notes...");
    Notes.push(process.argv[3]);
}else {
    console.log("Removing notes...");
    Notes.pop();
}
for(var i = 0 ; i < Notes.length ; i++){
    console.log(Notes[i]);
}











