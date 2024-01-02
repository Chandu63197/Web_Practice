let hours=document.getElementById('hours')
let minutes=document.getElementById('minutes')
let seconds=document.getElementById('seconds')

let time=()=>{
    let data=new Date()
    hours.textContent=data.getHours()
    minutes.textContent=data.getMinutes()
    seconds.textContent=data.getSeconds()  
}
setInterval(()=>{
    time()
    //console.log("hello");
},1000);
