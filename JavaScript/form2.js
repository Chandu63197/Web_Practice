let name=document.getElementById('name')
let yob=document.getElementById('yob')
let email=document.getElementById('email')
let password=document.getElementById('password')
let confirmpassword=document.getElementById('confirmpassword')

let data=new Date()
let submit=()=>{
    let age=data.getFullYear()-yob.value
    if(name.value.length>=3 && age>=18 && (password.value==confirmpassword.value)){
       let user={
           name:name.value,
           email:email.value,
           yob:yob.value,
           password:password.value,
           confirmPassword:confirmpassword.value
       }
       console.log(user);
    }
    else{
        alert('failed')
    }
}