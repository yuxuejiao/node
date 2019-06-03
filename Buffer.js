/*** 
 * Buffer类用来创建一个专门存放二进制数据的缓存区
 * ***/
// Buffer是一个全局类，可以直接使用，不需要引入 require

// v6.0之后建议使用Buffer.alloc(size[, fill[, encoding]])或 Buffer.from((string[, encoding]) 替代 new Buffer()
// Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// Buffer.allocUnsafeSlow(size)
// Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

// buf.write(string[, offset[, length]][, encoding]) 写入node缓冲区
buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");
console.log("写入字节数 : "+  len);

// buf.toString([encoding[, start[, end]]]) 从缓冲区读取数据
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// buf.toJSON() 将buffer转换为json对象。JSON.stringify() 会隐式地调用该 toJSON()
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

// Buffer.concat(list[, totalLength]) node缓冲区合并 list: 用于合并的 Buffer 对象数组列表
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

// buf.compare(otherBuffer) 缓冲区比较

// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]]) 缓冲区拷贝

// buf.slice([start[, end]]) 缓冲区裁剪

// buf.length 缓冲区长度



