
let repoList=document.getElementById('ul');
let searchButton=document.getElementById('searchBtn');



function search(){
    let requestUrl = "https://api.openweathermap.org/data/2.5/weather?lat=42.98&lon=-81.23&appid=32fa6c827151a5c195199dc77fd3d23f"
fetch(requestUrl)
    .then(function(response){
    return response.json();
})

.then(function (data){
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
}
})

}
