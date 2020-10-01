const form = document.querySelector(".js-form"),
	formInput = form.querySelector("input"),
	greetings = document.querySelector(".js-greetings");

const SHOW_CN = "showing";
const USER_LS = "currentUser";


function helloMachine(){
	const getTime = new Date();
	const hours = getTime.getHours();

	if(hours >= 5 && hours < 10) {
		return "Good morning, ";
	} else if(hours >= 10 && hours <= 15) {
		return "Good afternoon, ";
	} else if(hours > 15 && hours <= 19) {
		return "Good evening, ";
	} else {
		return "Good night, ";
	}
}

function saveName(user){
	localStorage.setItem(USER_LS, user);
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = formInput.value;

	loadGreetings(currentValue);
	saveName(currentValue);
}

function loadInput(){
	form.classList.add(SHOW_CN);
	form.addEventListener("submit", handleSubmit);
}

function loadGreetings(user){
	form.classList.remove(SHOW_CN);
	greetings.classList.add(SHOW_CN);
	
	greetings.innerText = `${helloMachine()} ${user}`;
}

function loadForm(){
	const currentUser = localStorage.getItem(USER_LS);

	if(currentUser === null) {
		loadInput();
	} else {
		loadGreetings(currentUser);
	}
}

function init(){
	loadForm();
}

init();