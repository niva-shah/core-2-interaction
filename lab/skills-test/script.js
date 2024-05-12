function add(num1, num2) {
    return num1 + num2;
}

function makeItGreen() {
    document.getElementById('circle').style.backgroundColor = 'green';
}

let sheldonCooper = {
    name: "Sheldon Cooper",
    age: 37,
    interests: ["physics", "trains", "comic books"],
    occupation: "Theoretical physicist",
    favoriteThings: {
        food: "Thai food",
        tvShow: "Star Trek"
    },
    describe: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old. I love ${this.interests.join(", ")} and my favorite food is ${this.favoriteThings.food}.`);
    }
};


function getWeather() {
    const latitude = 40.7834;
    const longitude = -73.9663;

    fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
    .then(response => response.json())
    .then(data => {
        const forecastUrl = data.properties.forecast;
        return fetch(forecastUrl); 
    })
    .then(response => response.json())
    .then(data => {
        const todayForecast = data.properties.periods[0].detailedForecast;
        document.getElementById('weather').textContent = todayForecast;
    })
    .catch(error => {
        console.error('Fetch error:', error);
        document.getElementById('weather').textContent = "Weather data not available";
    });
}

window.onload = function() {
    console.log(sheldonCooper);
    sheldonCooper.describe();
    getWeather(); 
}


//notes for myself 
//add fumction on consol works
//makeItGreen works on consol with makeItGreen()
//object in consol when page loads with all information
//forcast printed on the circle when the page loads and resizes with the circle 


