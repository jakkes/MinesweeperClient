var context = canvas.getContext("2d");
context.clear = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
};

var fontColors = ["Blue","Green","Red","DarkBlue","Maroon","Cyan","LightPink","Black"];
var backColors = ["DarkGray","LightGray"];

function redrawBoard(board){
	context.clear();
	
	var size = board.length;
	var squareSize = canvas.width / size;
	
	for(var x = 0; x < size; x++){
		for(var y = 0; y < size; y++){
			drawFunctions[board[x][y]](x,y,size);
		}
	}
	
};

var drawFunctions = new Array();
drawFunctions[-2] = drawUnrevealed;
drawFunctions[-1] = drawBomb;
drawFunctions[0] = drawClear;
drawFunctions[1] = drawOne;
drawFunctions[2] = drawTwo;
drawFunctions[3] = drawThree;
drawFunctions[4] = drawFour;
drawFunctions[5] = drawFive;
drawFunctions[6] = drawSix;
drawFunctions[7] = drawSeven;
drawFunctions[8] = drawEight;

function drawUnrevealed(x,y,size){
	context.fillStyle = backColors[0];
	context.fillRect(x,y,x+size,y+size);
}
function drawBomb(x,y,size){
	
}
function drawClear(x,y,size){
	
}
function drawOne(x,y,size){
	drawNumber(x,y,1,size);
}
function drawTwo(x,y,size){
	drawNumber(x,y,2,size);
}
function drawThree(x,y,size){
	drawNumber(x,y,3,size);
}
function drawFour(x,y,size){
	drawNumber(x,y,4,size);
}
function drawFive(x,y,size){
	drawNumber(x,y,5,size);
}
function drawSix(x,y,size){
	drawNumber(x,y,6,size);
}
function drawSeven(x,y,size){
	drawNumber(x,y,7,size);
}
function drawEight(x,y,size){
	drawNumber(x,y,8,size);
}
function drawNumber(x,y,i,size){
	
	context.fillStyle = backColors[1];
	context.fillRect(x,y,x+size,y+size);
	
	context.fillStyle = fontColors[i-1];
	context.fillText(i,x,y);
}