/*** 
 * Nodejs 提供了exports和require两个对象 
 * exports是模块公开的接口
 * require用于从外部获取一个模块的接口，即所获取的exports对象
 * exports 和 module.exports 的使用
 * 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
 * ****/



 /*** 
  * requre加载模块的顺序
  * 从文件模块缓存中加载
  * 从原生模块加载
  * 从文件加载
  * ****/
