const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div")

const isValid = (str) => {
	const regex = /^1?[-\. ]?(\(\d{3}\)[-\. ]?|\d{3}[-\. ]?)\d{3}[-\. ]?\d{4}$/;
	if (regex.test(str)) {
		return (results.innerText = `Valid US number: ${str}`);
	} else {
		return (results.innerText = `Invalid US number: ${str}`);
	}
}

const inputValue = () => {
	const str = userInput.value;
	return str;
}
const checkBtn = (event) => {
	event.preventDefault();
	if (!userInput.value) {
		alert("Please provide a phone number");
	}
	if (userInput.value) {
		const str = userInput.value;
		isValid(userInput.value);
		return str;
	}
}

const clearBtn = () => {
	userInput.value = "";
	const str = userInput.value;
	return (results.innerText = "")
	}
userInput.addEventListener("input", inputValue);
checkButton.addEventListener("click", checkBtn);
clearButton.addEventListener("click", clearBtn);