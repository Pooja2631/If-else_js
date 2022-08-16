let readlineSync = require("readline-sync");
var num1= readlineSync.question("enter your week day :- ")
if (num1=="sat"){
    console.log("breakfast-poha")
}
if (num1=="sunday"){
    console.log("lunch-rajma-rice")
}
if (num1=="monday"){
    console.log("dinner-dal mahkani-naan")
}
else{
    console.log("pass")
}
