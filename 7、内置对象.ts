/*
 * @Date: 2022-11-12 21:18:22
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-12 21:34:08
 * @Description: 这是****文件
 */

// javascript中有很多内置对象，他们可以直接在typescript中当作定义好了的类型


// 1. ECMAScript 的内置对象
// Boolean、Number、String、RegExp、Date、Error.... 
let b: Boolean = true
let c: RegExp = /\d\w/
let g: Date = new Date()
let z: Error = new Error('error')






// 2. DOM和BOM的内置对象
// Documeng、HTMLElemnt、Event、NodeList ....
let body: HTMLElement = document.body
console.log(body)
let liList: NodeList = document.querySelectorAll('li')
let div: HTMLDivElement = document.querySelector('div')
document.addEventListener('click', (e: MouseEvent) => {

})






// 3. 定义Promise
function promise():Promise<number> {
  return new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}
promise().then(res => {
  console.log(res)
})
