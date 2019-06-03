// 引入required模块
var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8000);
// console.log 在terminal中显示
console.log('Server running at localhost: 8000 ')