
let repoList=document.getElementById('ul');
let searchButton=document.getElementById('searchBtn');
let lat=document.getElementById('latitude')
let lon=document.getElementById('longitude')
var cityWebsite=document.getElementById('city')
let cityName1=document.getElementById('cityName1')
let day1Temp=document.getElementById('day1-temp')
let day1Wind=document.getElementById('day1-wind')
let day1Humid=document.getElementById('day1-humid')
let latitude=""
let longitude=""
let icon1=""
let searchEle=document.getElementById('search-list')
let searchEleText=""
const clearStorage=document.getElementById("clearStorageBtn")

function search(event){
   event.preventDefault();

   // Storing the city's name input
   searchEleText=cityWebsite.textContent;
   window.localStorage.setItem("inputStorage",searchEleText)
   searchEleText=window.localStorage.getItem("inputStorage")
   searchEle.append(searchEleText);


    //const API="32fa6c827151a5c195199dc77fd3d23f";

    alert("work")
    let requestUrl ='https://api.openweathermap.org/data/2.5/weather?q='+cityWebsite.value+'&appid=32fa6c827151a5c195199dc77fd3d23f'
fetch(requestUrl)
    .then(function(response){
    console.log(response)
    return response.json()
    })

    .then(function(data){
    console.log("data is ",data);
    console.log("name is "+data.name);
   
    //Day 1 weather
    let cityName1El =document.createElement('h1');
    cityName1El.textContent=data.name;
    cityName1.append(cityName1El);
    
    
    icon1=data.weather[0].icon
    console.log("icon1: "+icon1)
    document.getElementById('img1').src= ('http://openweathermap.org/img/wn/'+icon1+'.png')
    

    let day1TempEl=document.createElement('h4')
    day1TempEl.textContent=Math.round(data.main.temp-273.15);
    day1Temp.append(day1TempEl);
    console.log("Day1 Temperature: "+Math.round(data.main.temp-273.15));
    
    let day1WindEl=document.createElement('h4')
    day1WindEl.textContent=data.wind.speed
    day1Wind.append(day1WindEl);
    console.log("Day1 Wind: "+data.wind.speed)

    let humidityEl=document.createElement('h4')
    humidityEl.textContent=(data.main.humidity+'%')
    day1Humid.append(humidityEl);
    
    

    latitude=data.coord.lat.textContent;
    longitude=data.coord.lon.textContent;
    

    
    /*
    //Day2 weather
    let requestUrl2 ="api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid=32fa6c827151a5c195199dc77fd3d23f";
    fetch(requestUrl2)
    .then(function(response2){
    console.log(response2)
    return response2.json()
    })

    .then(function(data2){
    console.log("data is ",data2);
    console.log("name is "+data2.name);
    })*/
    })
    

}

function clear(event){
    event.preventDefault();
    window.localStorage.clear()
}

searchButton.addEventListener("click",search);
clearStorage.addEventListener("click",clear);
