/*
 * @Date: 2022-11-13 20:13:42
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-13 22:25:00
 * @Description: 这是****文件
 */

// 自es6起，symbol成为了一种新的原生类型，就像number和string那样
// symbol类型的值是通过Symbol构造函数创建的
let sym1 = Symbol()
let sym2 = Symbol(2)

// Symbol的值是唯一的
let sym3 = Symbol()
let sym4 = Symbol()
console.log(sym3 === sym4) // false

// 用作对象属性的键
let sym5 = Symbol()
let obj4 = {
  [sym5]: "value"
}
console.log(obj4[sym5]) // value

// 使用smybol定义的属性，是不能够通过如下方式遍历拿到的
const symbol1 = Symbol('111')
const symbol2 = Symbol('2222')
let obj5 = {
  [symbol1]: '大栗子',
  [symbol2]: '大美女',
  age: 19,
  sex: '女'
}
for(const key in obj5) {
  console.log(key, 'for in')  // age sex
}
console.log(Object.keys(obj5), 'object.keys') // ['age', 'sex']
console.log(Object.getOwnPropertyNames(obj5), 'getOwnPropertyNames') // ['age', 'sex']
console.log(JSON.stringify(obj5), 'JSON.stringify') // {"age":19,"sex":"女"}

// 以下方式能拿到symbol定义的属性
console.log(Object.getOwnPropertySymbols(obj5), 'getOwnPropertySymbols') // [ Symbol(111), Symbol(2222) ]
// es6的Reflect能拿到对象的所有属性
console.log(Reflect.ownKeys(obj5), 'Reflect.ownKeys') // [ 'age', 'sex', Symbol(111), Symbol(2222) ]





// Symbol.iterator 迭代器和 生成器 for of
// 支持遍历大部分类型迭代器 arr nodeList arguments set map 等
let arr11: Array<number> = [1, 2, 3]
let iterator = arr11[Symbol.iterator]()
console.log(iterator, 'iterator')
console.log(iterator.next(), 'iterator')
console.log(iterator.next(), 'iterator')
console.log(iterator.next(), 'iterator')
console.log(iterator.next(), 'iterator')

// 测试用例
interface Item {
  age: number,
  name: string
}
const array: Array<Item> = [{ age: 18, name: '章三'}, { age: 20, name: '溜溜'} ]
type MapTypes = string |  number
const map: Map<MapTypes, MapTypes> = new Map()
map.set('name', '王爷')
map.set('name2', '大爷')
let set: Set<number> = new Set([1, 2, 3])

const gen = (erg: any):void => {
  let it:Iterator<any> = erg[Symbol.iterator]()
  let next:any = { done: false }
  while(!next.done) {
    next = it.next()
    if(!next.done) {
      console.log(next.value, 'next')
    }
  }
}
gen(array)
gen(map)
gen(set)

// for of其实是语法糖～ 本质是调用iterator迭代器返回的value