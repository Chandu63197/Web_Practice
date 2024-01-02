let movies=[
    {
       Title:"Avatar",
       Director:"James cameron",
       Year:"2009",
       Imdbrating:7.9,
       type:"movie"
    },
    {
       Title:"RRR",
       Director:"Rajamouli",
       Year:"2023",
       Imdbrating:9.0,
       type:"movie"
    },
    {
        Title:"Vikings",
        Director:"N/A",
        Year:"2013",
        Imdbrating:8.6,
        type:"series"
     },
     {
        Title:"Game of Thrones",
        Director:"James cameron",
        Year:"2011",
        Imdbrating:9.5,
        type:"series"
     }
]
//display all the names of movies and series
let res=movies.map((data)=>{
    console.log(data.Title);
})
// display all the names of movies
let res1=movies.filter((data)=>{
    return data.type =="movie"
})
console.log(res1);
//display all the names of movies directed by particular name
let res2=movies.filter((data)=>{
   return data.Director =="James cameron"
})
console.log(res2);
//if we have both movies and series directed by same director by we need only movie 
let res3=movies.filter((data)=>{
   return data.type=="movie" && data.Director =="James cameron"
})
console.log(res2);
//display all the movies released between 2010-2015
let res4=movies.filter((data)=>{
   return data.Year > 2010 && data.Year < 2015
})
console.log(res4);
//display the highest Imdb rating
let res5=movies.reduce((high,data)=>{
   if(parseFloat(data.Imdbrating)>high){
      high=parseFloat(data.Imdbrating);
   }
   return high;
},0)
console.log(res5);
