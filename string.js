var readlinesync = require("readline-sync")
var input1 = readlinesync.question("enetr input 1..");
var input2 = readlinesync.question("enetr input 2..");
if (Number(input1),Number(input2) >= 1 && Number(input1),Number(input2)<=9){
    var sum = Number(input1) + Number(input2)
    str=String(sum)
    console.log(str)
    console.log(typeof(str))
}