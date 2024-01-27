/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


// condition One:
// yourWeight = 10;
// yourWeight = 24;
yourWeight = 29.9;

if (yourWeight < 18.5)
{
    console.log('You are underweight')
}    

else if(yourWeight <=24.9) {
    
    console.log('You have normal weight');
}
else if ( yourWeight <=29.9) {
   
    console.log('You have over weight');
}
    


else{
    console.log('Your are obese');
}









// var yourWeight = 40;
// var yourHeight = 50;

// if (yourWeight == 50 || yourHeight >= 60){
//     console.log('You are in right health condition');
// }
// else{
//     console.log('You are not in good health');
// }
    

