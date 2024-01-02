//Date Objects

// let user=new Object()
// user.name="john"
// user.age=30
// console.table(user)

// let data=new Date()
// console.log(data);
// console.log(data.getFullYear());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getSeconds());

//Age Calculator dynamic
let data =new Date()
let yob=document.getElementById('yob')
let submit=()=>{
    let age=data.getFullYear()- yob.value
    alert(age)
}