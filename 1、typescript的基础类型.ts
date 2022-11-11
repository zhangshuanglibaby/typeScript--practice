/*
 * @Date: 2022-11-11 16:32:43
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-11 22:30:59
 * @Description: 这是****文件
 */

// 基础类型：Boolean、Number、String、null、undefined、ES6的Symbol、ES10的BigInt

// 1. 字符串类型
// 字符串是使用string 定义
let a: string = '123'

// 页可以使用es6的字符串模版
let str: string = `abc${a}`


// 2. 数字类型
let notNumber: number = NaN // NaN
let num: number = 123 // 普通数字
let infinityNumber: number = Infinity // 无穷大
let hex: number = 0xf00d // 十六进制
let binary: number = 0b1010 // 二进制
let octal: number = 0o744 // 八进制



// 3. 布尔类型
// 注意： 使用构造函数Boolean创造的对象不是布尔值
// let createBoolean: boolean = new Boolean(1) // 会报错 因为返回的是一个布尔对象
// 事实上，new Boolean()返回的是一个Boolean对象，需要改成
let createBoolean: Boolean = new Boolean(1)

let booleaned: boolean = true // 直接使用布尔值
let booleaned2: boolean = Boolean(1)  // 也可以通过函数返回布尔值



// 4. 空值类型
// javascript没有空值(void)的概念，在typescript中，可以用void表示没有任何的返回值的函数
function voidFn(): void {
    console.log('test void')
}

// void类型的用法，主要是用在我们不希望调用者关心函数返回值的情况下，比如通常的异步回调函数void也可以定义undefined和null类型
let u: void = undefined
let n: void = null
// void 也可以定义 undefined 和 null 类型



// 5. null和undefined类型
let e: undefined = undefined
let f: null = null

/* 与void区别的是，undefined 和 null 是所有类型的子类型。
   也就是说undefined类型的变量，可以赋值给其他类型的变量 */

// let test: void = undefined
// let num2: string = '123'
// num2 = test //  这样写会报错，void类型不可以分给其他类型

// 以下都是没问题的
let test: null = null
let num2: string = '123'
num2 = test

let test2: undefined = undefined
let num3: string = '1'
num3 = test2

// 注意： 如果tsconfig.json 开启了严格模式， null不能赋予void类型
// 注意： 如果开启了严格模式，null和undefined 都不能赋值给其他类型的变量
console.log('hello')