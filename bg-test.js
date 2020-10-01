
const body = document.querySelector("body");

const IMG_NUM = 3;



function loadImg(imgNum){
	const image = new Image();
	image.src = `images/${imgNum + 1}.jpg`
	
	image.classList.add("bgImg");
	body.appendChild(image);
}

function getRandom(){
	const num = Math.floor(Math.random() * IMG_NUM);
	return num;
}

function init(){
	const ranNum = getRandom();
	loadImg(ranNum);
}

init();