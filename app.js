document.getElementById("button").onclick = () => {
    let cityName = document.getElementById("inputValue").value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9f4a71081e39a33a454b937b8d7946a0`)
.then( data =>{
return data.json()
}).then( data2 =>{
// console.log(data2.name);
// console.log(data2.main.temp);
// console.log(data2.weather[0].description);
document.getElementById("name").innerText = data2.name;
document.getElementById("temp").innerText = data2.main.temp;
document.getElementById("desc").innerText = data2.weather[0].description;
document.getElementById("icon").setAttribute('src', `http://openweathermap.org/img/wn/${data2.weather[0].icon}@2x.png`)
})
}
