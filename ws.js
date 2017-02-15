var conn = new WebSocket("ws://localhost:8081");


conn.onmessage = function(e){
	
};

conn.onopen = function(e){
	displayMenu();
};

