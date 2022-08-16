let readlineSync = require("readline-sync");
var age= readlineSync.questionInt("What is your age: ")
if (age<18){
    console.log("eligible")
}
else{
    console.log("not eligible")
}
