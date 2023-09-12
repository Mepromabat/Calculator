function deleteCharacter() {
	var currentValue = $(".display").val();
	$(".display").val(currentValue.substring(0, currentValue.length - 1));
};
function clearInput() {
	$(".display").val("");
};
function insertCharacter(char) {
	var currentValue = $(".display").val();
	var length = currentValue.length;
	var operand = false;
	if(char == "+" || char == "-" || char == "*" || char == "/")
	operand = true;
	if(length == 0)
	{
		if(operand)
		return;
	}
	var operandNew = false;
	var lastCharacter = currentValue[length-1];
	if(lastCharacter == "+" || lastCharacter == "-" || lastCharacter == "*" || lastCharacter == "/")
	operandNew = true;
	if(operand && operandNew)
	$(".display").val(currentValue.substring(0,length-1) + char);
	else
	$(".display").val($(".display").val() + char);
};
function result(){
	var currentValue = $(".display").val();
	var length = currentValue.length;
	var operand = false;
	var char = currentValue[length-1];
	if(char == '+' || char == '-' || char == '*' || char == '/')
	operand = true;
	if(operand)
		$(".display").val("ERROR!");
	else
		$(".display").val(eval($(".display").val()));
};
$(document).on("keydown", function(event){
	buttonPress(event.key);
});
function buttonPress(key){
	switch (key){
		case "c":
			clearInput();
			break;  
		case "/":
			insertCharacter('/');
			break;
		case "7":
			insertCharacter(7);
			break;
		case "8":
			insertCharacter(8);
			break;	
		case "9":
			insertCharacter(9);
			break;
		case "*":
			insertCharacter('*');
			break;	
		case "4":
			insertCharacter(4);
 			break;	
	    case "5":
			insertCharacter(5);
			break;
		case "6":
			insertCharacter(6);
			break;
		case "-":
			insertCharacter('-');
			break;
		case "1":
			insertCharacter(1);
			break;
		case "2":
			insertCharacter(2);
			break;
		case "3":
			insertCharacter(3);
			break;
		case "+":
			insertCharacter('+');
			break;
		case "0":
			insertCharacter(0);
			break;
		case ".":
			insertCharacter('.');
			break;
		case "Backspace":
			deleteCharacter();
			break;
		case "Enter":
			result();
			break;
		default: console.log(key);
	 }};