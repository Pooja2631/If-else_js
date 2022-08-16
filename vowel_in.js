let readlineSync = require("readline-sync");
var a= readlineSync.question("enter your name:- ")
b="aeiouAEIOU"
if (b in  a){
    console.log("vowel")
}
else{
    console.log("consent")
}

