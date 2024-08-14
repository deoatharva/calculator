const display = document.getElementById("display");
function appendToDisplay(input) {
	// body...
	display.value += input;
}
function clearDisplay(input) {
	// body...
	display.value = "";
}
function calculate(input) {
	// body...
	try{
		display.value = eval(display.value);
	}
	catch(error){
		display.value = "Error";
	}
}