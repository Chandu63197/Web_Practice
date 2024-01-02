let btn=document.getElementById('btn')
let card=document.getElementById('card')
let enroll=()=>{
    if(btn.textContent=="select"){
        btn.textContent="selected"
        card.style.border="5px solid darkgreen"
    }
    else{
        btn.textContent="select"
        card.style.border="none"
    }
}