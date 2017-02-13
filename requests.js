function newGameRequest(){
	conn.send(JSON.stringify({
		Action: "NewGame",
		Mode: "Medium"
	}));
}