let email=document.getElementById('email')
let password=document.getElementById('password')
let image=document.getElementById('image')
let label1=document.getElementById('label1')
let label2=document.getElementById('label2')

//email from front end should be equal to email from database
//password from front end should be equal to password from database
let signIn=()=>{
    if(email.value == 'cj@gmail.com' && password.value == 12345){
        alert('Login Successful')
    }
    else{
        //alert('Invalid credentials')
        label1.textContent="invalid email address"
        label2.textContent="invalid password"
        label1.style.color="red"
        label2.style.color="blue"
        email.style.borderColor='red'
        password.style.borderColor='red'
        image.src="janu.jpg"
    }
}