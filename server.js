//var http = require("http");
//
//http.createServer(function(request, response) {
//  console.log("Request received.");
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}).listen(9999);
//
//console.log("Server has started.");


var http = require("http");
var url = require("url");
function start(){
  function onRequest(request, response) {
    var path = url.parse(request.url).pathname;
    console.log("Request for " + path + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
  http.createServer(onRequest).listen(9999);
  console.log("Server has started.");
}
exports.start = start;























