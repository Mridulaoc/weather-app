const API_key = '4756f5e3909621ee22aba6d7ac4f1f11';
// const API = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric';
// const imageURL =' https://openweathermap.org/img/wn/10d@2x.png';

const form = document.querySelector("form");
const search =document.querySelector("#search");
const weather = document.querySelector("#weather"); 



const getWeather = async(city) => {
    weather.innerHTML = `<h2>Loading.....</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    const response= await fetch(url);
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather =(data)=> {
    if (data.cod=="404"){
        weather.innerHTML = `<h2> City Not Found`;
    }
    weather.innerHTML = ` 
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" srcset="">

    </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h4>${data.weather[0].main}</h4> 
        </div>`
}

form.addEventListener("submit",
 function(event){
 getWeather(search.value);
event.preventDefault();
})

// // ==================================================================================================
// // random joke generator
// const joke= document.getElementById("joke");
// const btn = document.querySelector(".btn");
// const url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,explicit&type=single";

// const getJokes = ()=>{
//     joke.classList.remove("fade");
//     fetch(url)
//     .then(data => data.json())
//     .then(item =>{
//         joke.textContent = `${item.joke}`;
//         joke.classList.add("fade");
//     });
    
// };
// btn.addEventListener("click",getJokes)
// getJokes();