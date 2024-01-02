let cityValue=document.getElementById('cityValue')
let cityName=document.getElementById('cityName')
let countryName=document.getElementById('countryName')
let temperature=document.getElementById('temperature')
let image=document.getElementById('image')

let search=async()=>{
    if (cityValue.value.length==0){
        alert('please enter a city name before search')
    } else {
        //api call
        try {
            let url="https://api.openweathermap.org/data/2.5/weather?q="+cityValue.value+"&units=metric&appid=1cb6532aea3c298a830a71380eace21e"
            let response=await fetch(url)
            let data=await response.json()
            cityName.textContent=data.name
            countryName.textContent=data.sys.country
            temperature.textContent=data.main.temp
            if(temperature.textContent>25){
               image.src='sun.png'
            }
            else if(temperature.textContent >15 && temperature.textContent <25){
                image.src='cloudy.png'
            }
            else{
                image.src='clouds.png'
            }
        } catch{
            alert("please enter a valid city name")
        }
    }
}

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
},1000);
