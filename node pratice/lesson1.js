var express = require("express");
var app = express();
// 路由 而不是http请求
app.get("/", function(req, res){
    res.send('Hello World');
})
app.listen(3000);