const weather = document.querySelector(".js-weather");
const API_KEY = "43fcd5007123eb610754f835fea97a2c";

const COORDS = "coords";

function getWeather(lon, lat){
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	).then(function(response){
			return response.json();
		}).then(function(json){
			 const temperature = json.main.temp;
			 const city = json.name;

			 weather.innerText = `${temperature} @ ${city}`;
		})
}

function savePosition(position){
	localStorage.setItem(COORDS, JSON.stringify(position));
}

function handleGeoSuccess(position){
	const longitude = position.coords.longitude;
	const latitude = position.coords.latitude;

	const positionObj = {
		longitude: longitude,
		latitude: latitude
	}

	savePosition(positionObj);
}

function handleGeoErr(){
	console.log("can't find position");
}

function askForPosition(){
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoErr);
}

function loadPosition(){
	const loadedPosition = localStorage.getItem(COORDS);

	if(loadedPosition === null) {
		askForPosition();
	} else {
		const parsedPosition = JSON.parse(loadedPosition);
		getWeather(parsedPosition.longitude, parsedPosition.latitude);
	}
}

function init(){
	loadPosition();
}

init();