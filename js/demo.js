// function addScript(url){
// 	document.write("<script language=javascript src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>");
// }
//引用jquery
function addScript(url) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', "https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js");
    document.getElementsByTagName('head')[0].appendChild(script);
}

function b64Encode(str) {
    return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
    return decodeURIComponent(atob(str));
}

var result1 = b64Encode('你好')
// "JUU0JUJEJUEwJUU1JUE1JUJE"
var result2 = b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE')
// "你好"

// console.log(result1);
// console.log(result2);

function f() {
    console.log(1);
}
// f() // 2

function f() {
    console.log(2);
}
// f() // 2

function fib(num) {
    if (num === 0)
        return 0;
    if (num === 1)
        return 1;
    return fib(num - 2) + fib(num - 1);
}

// console.log(fib(6)) // 8
// console.log(f.toString())

//---------------------------
// window.alert(5+5);
// document.write(Date());
// console.log(f.toString())

//---------------------------

// document.getElementById("demo2").innerHTML="RUNOOB-2!";
// setTimeout(function () {
//   document.getElementById("demo1").innerHTML="RUNOOB-1!";
// }, 3000);

// https://www.runoob.com/js/js-promise.html
// $(document).ready(function(){
// 	$("button").click(function(){
// 		$.get("/try/ajax/demo_test.php",function(data,status){
// 			alert("数据: " + data + "\n状态: " + status);
// 		});
// 	});
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//       console.log("First");
//       resolve();
//   }, 1000);
// }).then(function () {
//   return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//           console.log("Second");
//           resolve();
//       }, 4000);
//   });
// }).then(function () {
//   setTimeout(function () {
//       console.log("Third");
//   }, 3000);
// });

// new Promise(function (resolve, reject) {
//   console.log(1111);
//   resolve(2222);
// }).then(function (value) {
//   console.log(value);
//   return 3333;
// }).then(function (value) {
//   console.log(value);
//   throw "An error";
// }).catch(function (err) {
//   console.log(err);
// });

// function print(delay, message) {
//   return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//           console.log(message);
//           resolve();
//       }, delay);
//   });
// }

// print(1000, "First").then(function () {
//   return print(4000, "Second");
// }).then(function () {
//   print(3000, "Third");
// });

// async function asyncFunc() {
//   await print(1000, "First");
//   await print(4000, "Second");
//   await print(3000, "Third");
// }
// asyncFunc();

// (function () {
//   document.getElementById("demo").innerHTML = "Hello! 我是自己调用的";
// })();

// var add = (function() {
//     var counter = 0;
//     return function() {
//         return counter += 1;
//     }
// })();
// function myFunction() {
//     document.getElementById("demo").innerHTML = add();
// }


// function outerFunction() {
//     var counter = 0;
//     function innerFunction(){
//         return counter += 1;
//     }
//     return innerFunction;
//     /*
//      注意 typeof innerFunction 是：function；而typeof innerFunction（）是number；
//     */
// }
// var add = outerFunction();

/* 
调用 outerFunction()返回的是内部函数innerFucntion,那么调用几次add()将调用几次
内部函数inner Function，内部函数公用了counter，所以能够计数,所以说闭包就是将内部嵌套函数变成外部可调用的。
*/

class Runoob {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

// let site = new Runoob("菜鸟教程", "https://www.runoob.com");
// document.getElementById("demo").innerHTML = site.name + "：" + site.url;

document.write(Date());
document.write('<br>'+'<br>');

// var x=111;
// if ( // 返回判断的值
//         (typeof x == 'undefined')
//               ||
//         (x == null)
//               ||
//         (x == false)        //类似: !x
//               ||
//         (x.length == 0)
//               ||
//         (x == 0)            // 这里是判断 0，不需要刻意去掉
//               ||
//         (x == "")
//               ||
//         (x.replace(/\s/g,"") == "")
//               ||
//         (!/[^\s]/.test(x))
//               ||
//         (/^\s*$/.test(x))
//     ) {
//   document.write("变量未定义或为空");
// }

//js正则表达式：16进制的颜色
// var regex = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g;
// var string="#ffbbad #Fc01DF #FFF #ffG";
// console.log(string.match(regex));

// //07:09,有前导0
// var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
// console.log( regex.test("23:59") ); 
// console.log( regex.test("02:07") ); 
// //7:9,没有前导0
// var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
// console.log( regex.test("23:59") ); 
// console.log( regex.test("02:07") ); 
// console.log( regex.test("7:9") ); 

//匹配日期
// var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
// console.log( regex.test("2017-06-10") );

//windows文件路径
// var regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
// console.log( regex.test("F:\\study\\javascript\\regex\\regular expression.pdf") ); 
// console.log( regex.test("F:\\study\\javascript\\regex\\") ); 
// console.log( regex.test("F:\\study\\javascript") ); 
// console.log( regex.test("F:\\") ); 

/******************简写形式
\d就是[0-9]。表示是一位数字。记忆方式：其英文是digit（数字）。
\D就是[^0-9]。表示除数字外的任意字符。
\w就是[0-9a-zA-Z_]。表示数字、大小写字母和下划线。记忆方式：w是word的简写，也称单词字符。
\W是[^0-9a-zA-Z_]。非单词字符。
\s是[ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。记忆方式：s是space character的首字母。
\S是[^ \t\v\n\r\f]。 非空白符。
.就是[^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。记忆方式：想想省略号...中的每个点，都可以理解成占位符，表示任何类似的东西。
匹配任意字符:[\d\D]、[\w\W]、[\s\S]和[^]
**/


/*********
{m,} 表示至少出现m次。
{m} 等价于{m,m}，表示出现m次。
? 等价于{0,1}，表示出现或者不出现。记忆方式：问号的意思表示，有吗？
+ 等价于{1,}，表示出现至少一次。记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。
* 等价于{0,}，表示出现任意次，有可能不出现。记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。
惰性匹配：{m,n}?
{m,}?
??
+?
*?
 */

// var regex = /id=".*?"/
// var string = '<div id="container" class="main"></div>';
// console.log(string.match(regex)[0]); 

// var regex = /id="[^"]*"/
// var string = '<div id="container" class="main"></div>';
// console.log(string.match(regex)[0]); 


///////////////////////////VUE///////////////////////////
// 这是我们的Model
var exampleData = {
    message: 'Hello World!'
}

// 创建一个 Vue 实例或 "ViewModel"
// 它连接 View 与 Model
new Vue({
    el: '#app',
    data: exampleData
})


new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve(10);
    },3000);
})
    .then(function (num) {console.log('first then: ',num);return num*2;})
    .then(function (num) {console.log('second then: ',num);return num*2;})
    .then(function (num) {console.log('last then: ',num);return num;})







/**
 * async函数(源自ES2017)
 * 概念: 真正意义上去解决异步回调的问题, 同步流程表达异步操作
 * 本质: Generator的语法糖
 * 语法:
 *     async function foo() {
 *      await 异步操作
 *         await 异步操作 
 *  }
 * 特点:
 * 1. 不需要像Generator去调用next方法,遇到await等待,当前的异步操作完成就往下执行
 * 2. 返回的总是Promise对象, 可以用then方法进行下一步操作
 * 3. async取代Generator函数的星号* , await取代Generator的yield
 * 4. 语义上更为明确,使用简单,经临床试验,暂时没有任何副作用以及不良反应
 */

// 定义async 函数
// async function foo(){
//     return new Promise(resolve => setTimeout(() => {
//         resolve('成功!')
//     },2000))
// }

// 定义普通函数
// function fooSrc(){
//     return 'xxx'
// }

// async function test(){
//     console.log('开始执行')
//     // 会得到函数的执行结果
//     let result = await foo()
//     console.log(result)
//     result = await fooSrc()
//     console.log(result)
//     console.log('执行完成')
// }
// test()    






























