//Async and Await
//To fetch the data from the api
let api=async()=>{
    let url='https://jsonplaceholder.typicode.com/users'
    let response=await fetch(url)
    let data=await response.json()
    console.log(data);
    for(let i=0;i<data.length;i++){
        console.log(data[i].name);
    }
}
api()