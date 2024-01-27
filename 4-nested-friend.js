/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
var yourScore = 88;
var yourFriendScore = 52;

if (yourFriendScore>=80 && yourScore>80){
    console.log('both of you will hug and go to lunch')
}
// if (yourFriendScore>=80 || yourScore<80){
//     console.log('You go for a lunch')
// }

else if ( yourFriendScore>=60 || yourScore==80  )
{
    console.log('You console him as saying better luck for next time')
}
else if ( yourFriendScore>=40 || yourScore==80    )
{
    console.log('You did your friend message unseen')
}
else{
    console.log('block your Friend')
}

