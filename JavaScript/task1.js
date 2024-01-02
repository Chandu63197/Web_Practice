//if we press the button increase it should increment by 1 aswellas for decrease it should decrease by 1 and for reset it should become 0
let number=document.getElementById('number')
let increase=()=>{
   number.textContent++
}
let decrease=()=>{
   number.textContent--
}
let reset=()=>{
   number.textContent=0
}