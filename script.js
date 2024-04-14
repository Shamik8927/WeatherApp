let inputBox=document.querySelector(".input_box");
const btn=document.getElementById("search_btn");
const image=document.querySelector(".image");
const temp=document.querySelector(".temp");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const windSpeed=document.getElementById("windSpeed");
const location_not_found=document.querySelector(".location_not_found");
const app_body=document.querySelector(".app_body");


async function check_weather(city){
    const api="fc2289b8392fada7ba8045d614f6d525";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    weather_data=await fetch(`${url}`).then(response=>response.json());
    console.log(weather_data);

    if (weather_data.cod==='404'){
        location_not_found.style.display="flex";
        app_body.style.display="none";
        return;
    }else{
        location_not_found.style.display="none";
        app_body.style.display="flex"; 
    }


    temp.innerHTML=`${(Math.round(weather_data.main.temp-273))}°C`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    windSpeed.innerHTML=`${weather_data.wind.speed} KM/H`;
    description.innerHTML=`${weather_data.weather[0].description}`

    

    switch(weather_data.weather[0].main){
        case 'Clouds':
            image.src="./images/cloud.png";
            break;
        case 'Rain':
            image.src="./images/rain.png";
            break;
        case 'Snow':
            image.src="./images/snow.png";
            break;
        case 'Clear':
            image.src="./images/clear.png";
            break;
        case 'Mist':
            image.src="./images/mist.png";
            break;

    }
}
btn.addEventListener("click",()=>{
    check_weather(inputBox.value);
})
