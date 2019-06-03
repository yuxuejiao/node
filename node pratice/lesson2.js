var express = require('express');
var app = express();
app.get('/', function(req, res){
    console.log('req: ', req.query);
    // http中query和body的区别 
    // query 指的是get请求中在url中传递的查询字符串， body指的是post请求总在request正文中传递的参数
    var q = req.query.q;
    res.send(q);
})
app.listen(3000);