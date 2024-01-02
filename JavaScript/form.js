let name=document.getElementById('name')
let heading=document.getElementById('heading')
let submit=()=>{
   //console.log( name.value ); 
   //alert(name.value);
   document.body.style.backgroundColor = name.value
   heading.textContent = name.value

   // let age=2023-name.value
   // alert(age);
}