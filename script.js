var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
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

 function listLength() {
	return list.length;
}

 function CrossOutListItem () {
	list[i].addEventListener("click", function() {
	this.classList.toggle("done");	
	});
 };

for (i = 0; i < listLength(); i++) {
	CrossOutListItem();
}

// for (i = 0; i < list.length; i++) {
// 	CrossOutListItem();
// }


function AddButtonsToList () {
	var del_button = document.createElement("button");
	del_button.appendChild(document.createTextNode("Delete"));
	list[i].appendChild(del_button);
	del_button.addEventListener("click", function() {
	this.parentElement.remove();
	});
}

for (i = 0; i < listLength(); i++) {
	AddButtonsToList();
}

// for (i = 0; i < list.length; i++) {
// 	AddButtonsToList();
// }



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

