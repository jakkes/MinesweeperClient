function newGameRequest(){
	conn.send(JSON.stringify({
		Action: "NewGame",
		Mode: "Medium"
	}));
}

function revealNode(x,y){
	conn.send(JSON.stringify(
		{
			Action: "Reveal",
			Node: {
				X: x,
				Y: y
			}
		}
	));
}