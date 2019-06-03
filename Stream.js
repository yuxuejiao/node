/*** 
 * Stream 是一个抽象借口，node中很多对象都实现了这个接口
 * Stream有四种流类型，Readable - 可读操作 Writable - 可写操作 
 * Duplex - 可读可写操作 Transform - 操作被写入数据，然后读出结果
 * 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
 * data - 当有数据可读时触发。
 * end - 没有更多的数据可读时触发。
 * error - 在接收和写入过程中发生错误时触发。
 * finish - 所有数据已被写入到底层系统时触发。
 * ****/

 // 从流中读取数据
 var fs = require("fs");
 var data = '';
 var readStream = fs.createReadStream('input.txt');

 readStream.on('data', function(chunk){
     data += chunk;
 })

 readStream.setEncoding('UTF8');
 readStream.on('end', function(){
     console.log(data);
 })

 console.log('程序执行完毕');

 // 写入流
 var fs = require("fs");
 var data = "测试写入流 over";
 var writeStream = fs.createWriteStream('output.txt');
 writeStream.write(data,'UTF8');
 writeStream.end();
 writeStream.on('finish', function(){
     console.log('写入完成');
 })
 console.log('程序执行完毕');

// 管道流  输出流->输入流的机制 通常用于从一个流中获取数据并将数据传递到另一个流中
var fs = require('fs');
var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);
console.log('程序执行完毕');

// 链式流 连接输出流到另一个流并创建多个流操作链的机制 一般用于管道操作
// 文件压缩
var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");

// 文件解压
var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input1.txt'));
  
console.log("文件解压完成。");

 