let img = document.querySelector('img');
let button = document.querySelector(".btn-primary")

button.addEventListener('click', function(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            img.src = data.message;
    })
})

// Part 2
let form = document.querySelector("form");
let textInput = document.querySelector("#textInput");
let todaysWeather = document.querySelector('.alert-secondary')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let url = `https://goweather.herokuapp.com/weather/${textInput.value}`;
        //console.log(encodeURI(url));

    fetch(encodeURI(url))
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        todaysWeather.innerText = `${data.description}, ${data.temperature}, ${data.wind}`;
    
    })
})