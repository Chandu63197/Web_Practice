//To Change the webpage backgroundcolor and font color once we click on the button 
let change=()=>{
    if(button.textContent=='DarkMode'){
       document.body.style.backgroundColor="black"
       document.body.style.color="white"
       button.textContent='LightMode'
    }
    else{
       document.body.style.backgroundColor="white"
       document.body.style.color="black"
       button.textContent='DarkMode'
    }
}
