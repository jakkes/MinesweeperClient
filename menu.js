var sizes = new Array();

function displayMenu(){
	context.clear();
	
	context.font = "30px Verdana";
	context.fillStyle = "Purple";
	context.fillText("Medium",10,90)

	document.onclick = menuClick;
}

function menuClick(e){
	startNewGame();
}