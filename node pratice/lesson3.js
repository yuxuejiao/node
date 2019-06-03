/*** 
 * 当在浏览器中访问 http://localhost:3000/ 时，
 * 输出 CNode(https://cnodejs.org/ ) 社区首页的所有帖子标题和链接，以 json 的形式。
 * ***/
var express = require("express");
var https = require("https");
var fs = require("fs");
var cheerio = require("cheerio");
var app = express();
// 路由
app.get("/", function(request, response){
    // 请求
    https.get("https://cnodejs.org/", function(res){
        var data = "";
        res.on('data',function(chunk){
            data += chunk;
        })
        res.on('end', function(){
            const $ = cheerio.load(data);
            const elems = $('#topic_list .topic_title');
            let titles = [];
            let hrefs = [];
            let outputs = [];
            elems.each(function(idx,dom){
                // console.log("item: ", idx);
                // console.log("index: ", dom);
                outputs.push({
                    title: $(dom).attr("title"),
                    hrefs: $(dom).attr("href")
                })
            })
            response.send(outputs);
            // console.log('elems: ', titles, hrefs);
        })
    })
})
app.listen(3000);

