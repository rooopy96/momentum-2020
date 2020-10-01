const toDosForm = document.querySelector(".js-todos"),
	toDosInput = toDosForm.querySelector("input");
	toDosList = document.querySelector(".js-list");

const TODOS_LS = "todos";

let toDosArr = [];


function handleBtn(event){
	const btn = event.target;
	const li = btn.parentNode;

	toDosList.removeChild(li);

	const filterList = toDosArr.filter(function(todo){
		return todo.id !== parseInt(li.id);
	})

	toDosArr = filterList;
	saveToDos();
}

function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDosArr));
}

function showToDos(todo){
	const span = document.createElement("span"),
		li = document.createElement("li"),
		delBtn = document.createElement("button");
	const newId = toDosArr.length + 1;

	span.innerText = todo;
	delBtn.innerText = "❌";
	delBtn.addEventListener("click", handleBtn);
		
	li.appendChild(delBtn);
	li.appendChild(span);
	toDosList.appendChild(li);
	li.id = newId;

	const toDosObj = {
		text: todo,
		id: newId
	}
	
	toDosArr.push(toDosObj);
	saveToDos();
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDosInput.value;

	showToDos(currentValue);
	toDosInput.value = "";
}

function loadToDos(){
	const currentToDos = localStorage.getItem(TODOS_LS);

	if(currentToDos !== null){
		const parsedToDos = JSON.parse(currentToDos);

		parsedToDos.forEach(function(todo){
			showToDos(todo.text);
		})	
	}
}

function init(){
	loadToDos();
	toDosForm.addEventListener("submit", handleSubmit);
}

init();
