/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const yourGrade = 90;

if (yourGrade <= 69){
    console.log('You have just Passed');
}

else if (yourGrade <= 79){
    console.log('You did better and your grade is C')
}
else if (yourGrade <= 89){
    console.log('You did good and your grade is B')
}
else if (yourGrade <= 100){
    console.log('You did BEST and your grade is A')
}

else{
    console.log('You are failed and grade is F');
}