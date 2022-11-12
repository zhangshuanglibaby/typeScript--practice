/*
 * @Date: 2022-11-12 21:18:22
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-12 21:34:08
 * @Description: 这是****文件
 */
// javascript中有很多内置对象，他们可以直接在typescript中当作定义好了的类型
// 1. ECMAScript 的内置对象
// Boolean、Number、String、RegExp、Date、Error.... 
var b = true;
var c = /\d\w/;
var g = new Date();
var z = new Error('error');
// 2. DOM和BOM的内置对象
// Documeng、HTMLElemnt、Event、NodeList ....
var body = document.body;
console.log(body);
var liList = document.querySelectorAll('li');
var div = document.querySelector('div');
document.addEventListener('click', function (e) {
});
// 3. 定义Promise
function promise() {
    return new Promise(function (resolve, reject) {
        resolve(1);
    });
}
promise().then(function (res) {
    console.log(res);
});
