var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var myList = document.querySelectorAll("li")[0];
var list = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	li.addEventListener("click", function() {
	li.classList.toggle("done");	
	});

	var del_button = document.createElement("button");
	del_button.appendChild(document.createTextNode("Delete"));
	li.appendChild(del_button);
	del_button.addEventListener("click", function() {
	this.parentElement.remove();
	});
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

 function CrossOutListItem() {
	myList.classList.toggle("done");	
 }

// ul.onclick=function(event){
// 	var target=event.target;
// 	target.classList.toggle("done");
// }

// function ListLength() {
// 	return list.length;
// }


function AddButtonsToList () {
	var del_button = document.createElement("button");
	del_button.appendChild(document.createTextNode("Delete"));
	list[i].appendChild(del_button);
	del_button.addEventListener("click", function() {
	this.parentElement.remove();
	});
}

// USES FUNCTION
// for (i = 0; i < listLength(); i++) {
// 	AddButtonsToList();
// }

for (i = 0; i < list.length; i++) {
	AddButtonsToList();
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

myList.addEventListener("click", CrossOutListItem);

