var conn = new WebSocket("ws://localhost:8081");


conn.onmessage = function(e){
	var o = JSON.parse(e.data);
	console.log(o);
	switch(o.Action){
		case "NodeRevealed":
			NodeRevealed(o.Node)
			break;
		case "ClearNodesRevealed":
			ClearNodesRevealed(o.Nodes);
			break;
		case "GameOver":
			GameOver(o.Board);
			break;
	}
};

conn.onopen = function(e){
	displayMenu();
};