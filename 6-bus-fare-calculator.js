/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 72;
let ticketFare = 800;

if (age<=10)
{
    ticketFare = 0;
    console.log(ticketFare);
}


else if (age<=60) {
    
    ticketFare = 800 *50/100;
    console.log(ticketFare);
}
else if (age>60) {
    
    ticketFare = 800 *15/100;
    console.log(ticketFare);
}

else{
    ticketFare = 800;
}
