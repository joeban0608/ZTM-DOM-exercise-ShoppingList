var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
	
	// set event click than li toggle("done")
    // used callback (f)
    li.onclick = underLineSwitch;


	// create Listbutton
	var liButton = document.createElement("button");
	// liButton.appendChild(document.createTextNode("Del"));
	// 上句也可寫↓
	liButton.innerHTML = "Del"
	liButton.classList.add("button-margin");
	li.append(liButton);
	
	// set event click remove ul
	liButton.onclick = removeParent;
}


function underLineSwitch(event) {
    event.target.classList.toggle("done");
}

function removeParent(event) {
    event.target.parentNode.remove();
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



