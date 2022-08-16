// var number = 12;
 
// if(Number%3 === 0){
//    console.log("choco")
// }
// else if(number % 7){
//    console.log("late")
// }
// else if(a%3==0 && a%7==0) {
//    console.log("Chocolate")
// }
// else {
//    console.log("Not divisible by 3 , 7")

// } 


let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);
