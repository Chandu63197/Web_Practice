//DOM Manipulation
//getElementsById
// let element=document.getElementById('title')
// console.log(element.textContent);
// element.textContent="New Content";//updating content
// console.log(element.textContent);
// element.style.color="red"//adding styles
// element.style.backgroundColor="purple"

//getElementsByClassName
// let element=document.getElementsByClassName('title')
// for (let i = 0; i < element.length; i++) {
//     element[i].textContent = "New Content";//It will change all the h1 contents
// }

//getElementsByClassName
//change the content of odd index=1 && even index=0
// let element=document.getElementsByClassName('title')
// for (let i = 0; i < element.length; i++) {
//     if(i%2==0){
//         element[i].textContent=0
//     }
//     else{
//         element[i].textContent=1
//     }
// }

//getElementsByClassName
//change the content of 0 1 2 0 1 2 keep on changing
// let element=document.getElementsByClassName('title')
// for (let i = 0; i < element.length-2; i+=3) {
//     element[i].textContent=0
//     element[i+1].textContent=1
//     element[i+2].textContent=2
// }//it will works only for 6 h1's
//---------or----------
let element=document.getElementsByClassName('title')
for (let i = 0; i < element.length; i++) {
    element[i].textContent=i%3
}