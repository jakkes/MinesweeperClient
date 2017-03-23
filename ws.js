var conn = new WebSocket("ws://localhost:8081");


conn.onmessage = function(e){
	console.log(e);
};

conn.onopen = function(e){
	displayMenu();
};