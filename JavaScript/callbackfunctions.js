// function square(a){
//     return a**2
// }
// console.log(square(10));//100

//---------Arrow functions----------
// let square=(a)=>{
//     return a**2//in an arrow fuctions if there is a single body we need not to use the implementation instead pf this we can write in the same line
// }
// console.log(square(10));//100
//-------or--------
// let square=a=> a**2
// console.log(square(25));//625

//sum of two elements
// let sum=(a,b)=>a+b
// console.log(sum(25,63));//88

//largest of two elements
// let large=(a,b)=>a>b
// console.log(large(30,20));//the result is in boolean format

//even or odd
// let even=n=>n%2==0
// console.log(even(5));

//-----------Callback Functions--------------
//given array elemnts to square of it's
// let a=[1,2,3,5];
// let b=[];
// for(let i=0;i<a.length;i++){
//     b[i]=a[i]*a[i];//b[i]=a[i]**2;
// }
//console.log(b);//[1,4,9,25]

//1.map-->it can't change the length of an array
//------or By using map()------// it is used not to check the condition where we use map() only for simple calculation
// let a=[1,2,3,4,5];
// let result=a.map( (x)=>{
//    return x**2
// })
// console.log(result);//[1,4,9,16,25]

//even or odd using map()
// let a=[1,2,3,4,5];
// let result=a.map( (x)=>{
//    return x%2==0
// })
// console.log(result);//[ false, true, false, true, false ]//boolean result

//add elements to the array after the n value passed
// let a=[1,2,3,4,5];
// let result=a.map( (x)=>{
//    return x+10
// })
// console.log(result);//[ 11, 12, 13, 14, 15 ]

//2.filter-->filter the elements in the array based on the condition.
//it can change the length of an array && we can write the conditions in filter
// let a=[1,2,3,4,5];
// let result=a.filter( (x)=>{
//     return x%2 // it will consider the 1 as true
// })
// console.log(result);[1,3,5]

// let a=[1,2,3,4,5];
// let result=a.filter( (x)=>{
//      return x%2==0
// })
// console.log(result);//[2,4]

//sum of the elemnts in an array
// let a=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<a.length;i++){
//     sum=sum+a[i];
// }
// console.log(sum)//15

//3.reduce-->reduce combines all the array elements to give an single value
//sum of the elemnts in an array using reduce
// let a=[1,2,3,4,5]
// let result=a.reduce((sum,x)=>{
//     return sum+=x;
// },0) //we are providing the initial value as 0 for the sum 
// console.log(result);//15

/*let products=[
    {
        name:"Redmi note7s",
        brand:"Xiaomi",
        price:10000,
        rating:4.7
    },
    {
        name:"Iphone 12",
        brand:"Apple",
        price:90000,
        rating:4.8
    },
    {
        name:"Oppo a76",
        brand:"Oppo",
        price:20000,
        rating:4.7
    },
    {
        name:"gaalaxy a23",
        brand:"Samsung",
        price:80000,
        rating:4.0
    }
]
// display all products by name and brand
let res=products.map((data)=>{
   console.log(data.brand,data.name);
})
//filter the products above rating 4.5
let res1=products.filter((data)=>{
    return data.rating > 4.7
})
console.log(res1);
//sum of all the products price
let res2=products.reduce((subTotal,data)=>{
    return subTotal +=data.price
},0)
console.log(res2);*/

