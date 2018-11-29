var http = require("http");
var fs = require("fs")

http.createServer(function(req, res){
	
	if(req.url === "/"){
		res.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./sudoku.htm", "UTF-8").pipe(res);	
	} 
	else if (req.url === "/styles.css"){
		res.writeHead(200, {"Content-Type": "text/css"});
		fs.createReadStream("./styles.css", "UTF-8").pipe(res);
	}
	else if (req.url === "/sudoku.js"){
		res.writeHead(200, {"Content-Type": "text/javascript"});
		fs.createReadStream("./sudoku.js", "UTF-8").pipe(res);
	}
					
}).listen(8080);

console.log("Sudoku game is on port 8080");
