/*//else if ladder 
//Greatest Of three numbers
let a=10;
let b=10;
let c=10;
if(a>b && a>c){
    console.log("a is greater")
}
else if(b>c){
    console.log("b is greater")
}
else if(a==b && a!=c){
    console.log("a & b are equal")
}
else if(b==c && a!=c){
    console.log("b and c are equal")
}
else if(a===c && b!=c){
    console.log("a and c are equal")
}
else if(a===b && b===c){
    console.log("all are equal")
}
else{
    console.log("c is greater")
}*/


/*//Switch
let day="mon"
switch(day){
    case "fri":console.log("waiting for weekend");
    break;

    case "sat":console.log("Go on a date");
    break;

    case "sun":console.log("chill up");
    break;

    default:console.log("Invalid day");
    break;
}*/

//Find greatest of two numbers using switch
let a=30;
let b=20;
switch(a>b){
    case true:console.log("a is greater");
    break;

    default:console.log("b is greater");
    break;
}