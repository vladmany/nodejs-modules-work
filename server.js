const http = require("http");
const url = require("url");
const {parseJSON} = require("./index");

const server = http.createServer((req, res) => {
	const reqUrl = url.parse(req.url).pathname
	if(reqUrl == "/") {
		res.write("home page")
		res.end()
	}
	else if(reqUrl == "/parse") {
		parseJSON();

		res.write("Data is successfully parsed.")
		res.end()
	}
})
server.listen(3000)