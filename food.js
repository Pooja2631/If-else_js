let readlineSync = require("readline-sync");
var num1= readlineSync.question("enter your week day :- ")
if(num1=="sunday"){
    console.log("maggie")
}
else if(num1=="monday"){
    console.log("pasta")
}
else if(num1=="friday"){
    console.log("kheer")
}
else if(num1=="sat"){
    console.log("noddles")
}
else{
    console.log("pass")
}
