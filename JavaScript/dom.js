//Document Object model
//console.log(document.body);
//console.log(document.head);
//console.log(document.URL);//http
//console.log(document.title);//to fetch the title of the page
//console.log(document.h1);//undefined because we have more than one h1 in the html file

//-----------------------------

//selectors=>methods
//element,class,id

//==========id======
// let element =document.getElementById("title")//if we have more than one element with same id name it should select first element
// console.log(element);
// let element1=document.getElementById("para")
// console.log(element1);

//==============class=======
// let element2=document.getElementsByClassName("title")//it will return the array ,if have same class name elements
//if we have single element also it will return array
// console.log(element2);
//if we want particular element we use index to fetch
// console.log(element2[0]);

//===========element=============
// let element3=document.getElementsByTagName("h1") //it will select the all the elements of same tag name
// console.log(element3);

//05/10/23

//=========query selector
//let element4=document.querySelector('.title')
//let element4=document.querySelector('#title1')
let element4=document.querySelector('h1')
console.log(element4);
//if it is a class name we use .className
//if it is a id name we use #id name
//it will return only one element

//=========query selector All====
let element5=document.querySelectorAll('.title')
console.log(element5);
//if it is a class name we use .className
//if it is a id name we use #id name
//it will return array