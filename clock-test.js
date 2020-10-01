const clock = document.querySelector(".js-clock"),
	clockTitle = clock.querySelector("h1");

function getTime(){
	const nowTime = new Date();
	const hours = nowTime.getHours();
	const minutes = nowTime.getMinutes();
	const seconds = nowTime.getSeconds();

	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
		seconds < 10 ? `0${seconds}` : seconds}`;
	
}

function init(){
	getTime();
	setInterval(getTime, 1000);
}

init();

