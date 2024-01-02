//console.log("Hello World");

             /*Variable types*/
/*clsvar a="What is the use of learning all the subjects which is under fullstack";
console.log(a)*/

// var a=10;
// a=30;
// var a=20;
// console.log(a); // re declaration & re initialisation

// let a=10;
// let a=20;
// console.log(a)// re initialization possible & re declaration not possible

// const a=10;
// console.log(a);// cannot re-declaration & re-initialisation

             /*Operators*/
// Comparisional operators

             /*Methods/Functions*/
function Sum(a,b){
    //console.log(a+b);
    return a+b;
}
Sum(10,20)
Sum(2000,5)
/*let result=Sum(10,200);
console.log(result)*/
//console.log(Sum(10,69))

//function scope=>var -->we can access anywhere
//block scope=>let,const -->we can access within the block

//var
// function scope(){
//     for (var i = 0; i < 5; i++) {
//         console.log(i); // 0 1 2 3 4
//     }
//     console.log(i);//5
// }
// scope()

//let
// function scope(){
//     for (let i = 0; i < 5; i++) {
//         console.log(i); // 0 1 2 3 4
//     }
//     console.log(i);// i is not defined
// }
// scope()

//const
function scope(){
    if(10>5){
        const i=10;
        console.log(i);//10
    }
    console.log(i);// i is not defined
}
scope()