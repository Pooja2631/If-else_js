let readlineSync = require("readline-sync");
var num1= readlineSync.question("enter your number :- ")
var num2= readlineSync.question("enter your number :- ")
var num3= readlineSync.question("enter your number :-")
if (num1<num2 && num1<num3){
    console.log(num1,"is min number")
}
else if(num2<num1 && num2<num3){
    console.log(num2,"is min number")
}
else if (num3<num1 && num3<num2){
    console.log(num3,"is min number")
}
else{
    console.log("noting")
}