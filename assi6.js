
let repoList = document.getElementById('ul');
let searchButton = document.getElementById('searchBtn');
let lat = document.getElementById('latitude')
let lon = document.getElementById('longitude')
var cityWebsite = document.getElementById('city')
let cityName1 = document.getElementById('cityName1')

let day1Temp = document.getElementById('day1-temp')
let day1Wind = document.getElementById('day1-wind')
let day1Humid = document.getElementById('day1-humid')

let day2Temp = document.getElementById('day2-temp')
let day2Wind = document.getElementById('day2-wind')
let day2Humid = document.getElementById('day2-humid')

let day3Temp = document.getElementById('day3-temp')
let day3Wind = document.getElementById('day3-wind')
let day3Humid = document.getElementById('day3-humid')

let day4Temp = document.getElementById('day4-temp')
let day4Wind = document.getElementById('day4-wind')
let day4Humid = document.getElementById('day4-humid')

let day5Temp = document.getElementById('day5-temp')
let day5Wind = document.getElementById('day5-wind')
let day5Humid = document.getElementById('day5-humid')

let day6Temp = document.getElementById('day6-temp')
let day6Wind = document.getElementById('day6-wind')
let day6Humid = document.getElementById('day6-humid')

let latitude = ""
let longitude = ""

let icon1=""
let icon2 = ""
let icon3 = ""
let icon4 = ""
let icon5 = ""
let icon6 = ""

let searchEle = document.getElementById('search-list')
let searchEleText = ""
const clearStorage = document.getElementById("clearStorageBtn")

let day1=document.getElementById("day1")
let day2=document.getElementById("day2")




function search(event) {
    event.preventDefault();

    // Storing the city's name input
    searchEleText = cityWebsite.value;
    console.log("Input name: " + searchEleText)
    window.localStorage.setItem("inputStorage", JSON.stringify(searchEleText))
   ccc = window.localStorage.getItem("inputStorage")
    // create a button   
    let historyButton = document.createElement("button");
    // add the searchEleText as the text context
    historyButton.textContent = searchEleText;
    // append the new button to the searchEle

    searchEle.append(historyButton);
    searchEle.addEventListener("click", callCityName)

    fetchData(searchEleText)


    //const API="32fa6c827151a5c195199dc77fd3d23f";
}

function callCityName(event) {
    event.preventDefault()
    console.log(event);
    // get the city fromt he button text context
    let cityName = event.target.textContent;
    // call fetchData
    fetchData(cityName);
}

function fetchData(cityName) {
    let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=32fa6c827151a5c195199dc77fd3d23f'
    fetch(requestUrl)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log("data is ", data);
            console.log("name is " + data.name);

        // Day 1 Weather
            cityName1.textContent = data.name;

            day1.textContent=moment().format('YYYY-MM-DD');
            icon1 = data.weather[0].icon
            console.log("icon1: " + icon1)
            document.getElementById('img1').src = ('http://openweathermap.org/img/wn/' + icon1 + '.png')

            day1Temp.textContent = Math.round(data.main.temp - 273.15);
            console.log("Day1 Temperature: " + Math.round(data.main.temp - 273.15));

           
            day1Wind.textContent=data.wind.speed
            console.log("Day1 Wind: " + data.wind.speed);

           
            day1Humid.textContent = (data.main.humidity + '%')
         


            latitude = data.coord.lat;
            longitude = data.coord.lon;




            //Day2 weather
            let requestUrl2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=32fa6c827151a5c195199dc77fd3d23f";
            fetch(requestUrl2)
                .then(function (response2) {
                    console.log(response2)
                    return response2.json();
                })
                .then(function (data2) {
                    console.log(data2)
                //Day 2 Weather
                day2.textContent=data2.list[7].dt_txt;
                console.log("Day 2: "+data2.list[7].dt_txt)
                
                icon2 = data2.list[7].weather[0].icon
                console.log("icon2: " + icon2)
                document.getElementById('img2').src = ('http://openweathermap.org/img/wn/' + icon2 + '.png')
    
                day2Temp.textContent = Math.round(data2.list[7].main.temp - 273.15);
                console.log("Day2 Temperature: " + Math.round(data2.list[7].main.temp- 273.15));
    
                day2Wind.textContent=data2.list[7].wind.speed
                console.log("Day2 Wind: " );
    
                day2Humid.textContent = (data2.list[7].main.humidity + '%')
                

                //Day 3 Weather
                day3.textContent=data2.list[15].dt_txt;
                console.log("Day 2: "+data2.list[15].dt_txt)
                
                icon3 = data2.list[15].weather[0].icon
                console.log("icon3: " + icon3)
                document.getElementById('img3').src = ('http://openweathermap.org/img/wn/' + icon3 + '.png')
    
                day3Temp.textContent = Math.round(data2.list[15].main.temp - 273.15);
                console.log("Day3 Temperature: " + Math.round(data2.list[15].main.temp- 273.15));
    
                day3Wind.textContent=data2.list[15].wind.speed
                
                day3Humid.textContent = (data2.list[15].main.humidity + '%')

                //Day 4 Weather
                day4.textContent=data2.list[23].dt_txt;
                console.log("Day 4: "+data2.list[23].dt_txt)
                
                icon4 = data2.list[23].weather[0].icon
                console.log("icon4: " + icon4)
                document.getElementById('img4').src = ('http://openweathermap.org/img/wn/' + icon4 + '.png')
    
                day4Temp.textContent = Math.round(data2.list[23].main.temp - 273.15);
                console.log("Day4 Temperature: " + Math.round(data2.list[23].main.temp- 273.15));
    
                day4Wind.textContent=data2.list[23].wind.speed
                
                day4Humid.textContent = (data2.list[23].main.humidity + '%')

                //Day 5 Weather
                day5.textContent=data2.list[31].dt_txt;
                console.log("Day 5: "+data2.list[31].dt_txt)
                
                icon5 = data2.list[31].weather[0].icon
                console.log("icon5: " + icon5)
                document.getElementById('img5').src = ('http://openweathermap.org/img/wn/' + icon5 + '.png')
    
                day5Temp.textContent = Math.round(data2.list[31].main.temp - 273.15);
                console.log("Day5 Temperature: " + Math.round(data2.list[31].main.temp- 273.15));
    
                day5Wind.textContent=data2.list[31].wind.speed
                console.log("Day 5 wind: "+data2.list[31].wind.speed)

                day5Humid.textContent = (data2.list[31].main.humidity + '%')
                console.log("Day5 Humidity: "+data2.list[31].main.humidity+ '%')

                //Day 6 Weather
                day6.textContent=data2.list[39].dt_txt;
                console.log("Day 6: "+data2.list[39].dt_txt)
                
                icon6 = data2.list[39].weather[0].icon
                console.log("icon6: " + icon6)
                document.getElementById('img6').src = ('http://openweathermap.org/img/wn/' + icon6 + '.png')
    
                day6Temp.textContent = Math.round(data2.list[39].main.temp - 273.15);
                console.log("Day6 Temperature: " + Math.round(data2.list[39].main.temp- 273.15));
    
                day6Wind.textContent=data2.list[39].wind.speed
                
                day6Humid.textContent = (data2.list[39].main.humidity + '%')
                 
                })
        })
}

function clear(event) {
    event.preventDefault();
    window.localStorage.clear()
    window.location.reload()
}

searchButton.addEventListener("click", search);
clearStorage.addEventListener("click", clear);
