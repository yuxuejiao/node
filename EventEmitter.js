/*** 
 * events 模块只提供了一个对象：events.EventEmitter
 * EventEmitter的核心就是事件触发和事件监听器功能的封装
 * 添加事件监听API：
 * addListener(eventName, listener)
 * on(eventName, listener)
 * once(eventName, listener) 为指定事件注册一个单次监听器，监听器最多触发一次，触发后立即解除该监听器
 * 移除事件监听API
 * removeListener(eventName, listener) 移除指定事件的监听器
 * removeAllListeners([event]) 移除所有监听器，或者指定事件的所有监听器
 * 触发事件
 * emit(eventName)
 * 返回指定事件的监听器数量
 * listenerCount(eventName)
 * ***/

var events = require('events');
var eventEmitter = new events.EventEmitter();
// 监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
 }
 
 // 监听器 #2
 var listener2 = function listener2() {
   console.log('监听器 listener2 执行。');
 }
 
 // 绑定 connection 事件，处理函数为 listener1 
 eventEmitter.addListener('connection', listener1);
 
 // 绑定 connection 事件，处理函数为 listener2
 eventEmitter.on('connection', listener2);
 
 var eventListeners = eventEmitter.listenerCount('connection');
 console.log(eventListeners + " 个监听器监听连接事件。");
 
 // 处理 connection 事件 
 eventEmitter.emit('connection');
 
 // 移除监绑定的 listener1 函数
 eventEmitter.removeListener('connection', listener1);
 console.log("listener1 不再受监听。");
 
 // 触发连接事件
 eventEmitter.emit('connection');
 
 eventListeners = eventEmitter.listenerCount('connection');
 console.log(eventListeners + " 个监听器监听连接事件。");
 
 console.log("程序执行完毕。");