let quotes=[
    {quote:"Have a great day"},
    {quote:"You will hear a happy news"},
    {quote:"Keep going"},
    {quote:"you will hear bad news"},
    {quote:"Never ever give up"},
    {quote:"Every day is a good day"},
    {quote:"You will pass today"},
    {quote:"Worst day ever"},
    {quote:"You make others happy today"},
    {quote:"you will be cheated by someone"}
]

let p=document.getElementById("p")
let sample=()=>{
    let val=Math.random()*quotes.length;
    let res=Math.round(val);
    p.textContent=quotes[res].quote;
}