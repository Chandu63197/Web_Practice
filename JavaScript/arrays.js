// let a=[1,2,3,4,5]
// console.log(a[0]);
// console.log(a[a.length-1]);
// console.log(a[(a.length-1)/2]);

// function middle(a){
//    //let sum=0;
//    if(a.length%2==0){
//      sum=a[a.length/2]+a[(a.length/2)-1]
//      //return a[a.length/2]+a[(a.length/2)-1];
//      console.log(sum);
//    }
//    else{
//      console.log(a[(a.length-1)/2]);
//      //return a[(a.length-1)/2];
//    }
// }
// middle([1,2,3,4,5])

//console.log(a)

// let a=[1,2,3,4,5];
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

//Find element
//let a=[1,2,3,4,5];
// function search(a){
//     for(let i=0;i<a.length;i++){
//         if(a[i]==7){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(search(a));
//********or*******
// let res=false
// function search(a){
//     for(let i=0;i<a.length;i++){
//        if(a[i]==7){
//           res=true;
//        }
//     }
// }
// console.log(res);


// Array Methods
// let a =[1,2,3,4,5]
// arrayName.method()
// push()-adds an elements at last in an array
// a.push(100)
// console.log(a);
// pop()-removes the last elements in an array
// a.pop()
// console.log(a);
// shift()-removes the first elements in an array
// a.shift()
// console.log(a);
// unshift()-adds an elements at first in an array
// a.unshift(100)
// console.log(a);

//Wajp to reverse an array
/*let a=[1,2,3,4,5]
let res=[];
let j=0;
for(let i=a.length-1;i>=0;i--){
   res[j]=a[i];
   j++;
}
console.log(res);*/
//------------or------------
/*let a=[1,2,3,4,5]
let res=[];
for(let i=a.length-1;i>=0;i--){
   res.push(a[i])
   console.log(res);
   //a.reverse()-to reverse an array
   //console.log(a.includes(7))-to check the element is present or not
}
console.log(res);*/

//splice-To add/remove the elements in between the array is we have one method called splice
//splice
/*let a=[1,100,5,6,8]
a.splice(1,3)
a.splice(1,3,500)
console.log(a);*/

//Remove all the even numbers in an array
/*let a=[1,2,3,4,5]
for(let i=0;i<a.length;i++)
{
   if(a[i]%2==0){
      a.splice(i,1)//it will work only for the sorted array
   }
}
console.log(a);*/
//---------------or------------
/*let a=[1,2,3,4,5]
for(let i=a.length-1;i>=0;i--)
{
   if(a[i]%2==0){
      a.splice(i,1)//it will work  for all the inputs in an array
   }
}
console.log(a);*/

//sort the array in ascending order
let a=[9,2,5,3,4];
for(let i=0;i<a.length;i++){
   for(let j=i+1;j<a.length;j++){
      if(a[i]>a[j]){
         let temp=a[i];
         a[i]=a[j];
         a[j]=temp;
      }
   }
}
console.log(a);
//--------or--------
let b=[9,2,5,3,4];
for(let i=0;i<b.length;i++){
   for(let j=1;j<b.length-1;j++){
      if(b[j]>b[j+1]){
         let temp=b[j];
         b[j]=b[j+1];
         b[j+1]=temp;
      }
   }
}
console.log(b);


