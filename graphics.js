var context = canvas.getContext("2d");
context.clear = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
};

var fontColors = ["Blue","Green","Red","DarkBlue","Maroon","Cyan","LightPink","Black"];
var backColors = ["Purple","LightGray","Black"];

function redrawBoard(){
	context.clear();
	
	var squareSize = size / board.length;
	for(var x = 0; x < board.length; x++){
		for(var y = 0; y < board.length; y++){
			drawFunctions[board[x][y]](x*squareSize,y*squareSize,squareSize);
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

function drawUnrevealed(x,y,sqsize){
	context.fillStyle = backColors[0];
	context.fillRect(x,y,x+sqsize,y+sqsize);
}
function drawBomb(x,y,sqsize){
	context.fillStyle = backColors[2];
	context.fillRect(x,y,x+sqsize,y+sqsize);
}
function drawClear(x,y,sqsize){
	context.fillStyle = backColors[1];
	context.fillRect(x,y,x+sqsize,y+sqsize);
}
function drawOne(x,y,sqsize){
	drawNumber(x,y,1,sqsize);
}
function drawTwo(x,y,sqsize){
	drawNumber(x,y,2,sqsize);
}
function drawThree(x,y,sqsize){
	drawNumber(x,y,3,sqsize);
}
function drawFour(x,y,sqsize){
	drawNumber(x,y,4,sqsize);
}
function drawFive(x,y,sqsize){
	drawNumber(x,y,5,sqsize);
}
function drawSix(x,y,sqsize){
	drawNumber(x,y,6,sqsize);
}
function drawSeven(x,y,sqsize){
	drawNumber(x,y,7,sqsize);
}
function drawEight(x,y,sqsize){
	drawNumber(x,y,8,sqsize);
}
function drawNumber(x,y,i,sqsize){
	
	context.fillStyle = backColors[1];
	context.fillRect(x,y,x+sqsize,y+sqsize);
	
	context.fillStyle = fontColors[i-1];
	context.fillText(i,x+sqsize/4,y+3*sqsize/4);
}