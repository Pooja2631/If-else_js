let readlineSync = require("readline-sync");
var yourNumber= readlineSync.question("What is your number ")
if (yourNumber>0){
    console.log("positive number")
}
else if(yourNumber<0){
    console.log("-negative number")
}
else{
    console.log("pass")
}
