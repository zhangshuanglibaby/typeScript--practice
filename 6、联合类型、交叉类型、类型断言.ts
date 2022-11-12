/*
 * @Date: 2022-11-12 17:52:48
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-12 20:58:17
 * @Description: 这是****文件
 */

// 1. 联合类型  ｜
// 利用联合类型可以支持 数字类型 和 字符串类型
let phone: number | string = '010-820'

// 函数参数使用联合类型
const fn10 = (type: number | boolean): boolean => {
  return !!type
}
fn10(1)
fn10(false)





// 2. 交叉类型  &
// 多种类型的集合，联合对象具有所联合类型的所有成员
interface People {
  name: string,
  age: number
}
interface Man {
  sex: string
}
const fn11 = (man: People & Man): void => {
  console.log(man)
}
fn11({
  name: '张',
  age: 19,
  sex: '女'
})






// 3. 类型断言  as 或 <类型>值
// 语法： value as string       <string>value
interface C {
  run: string
}
interface D {
  build: string
}
const fn12 = (type: C | D): string => {
  // return type.run   // 这样写会报错，因为D的接口上没有定义run属性
  // 可以使用类型断言来推断他传入的是C接口的值
  // return (type as C).run
  return (<C>type).run
}
console.log(fn12({run: '跑步'}));






// 4. 使用any临时断言
// window.abc = 123  // 这样写会报错，因为window没有abc这个东西
// (window as any).abc = 123  // 可以使用any临时断言 ,any类型上的变量 可以访问任何属性





// 5. as const
// 是对字面值的断言，与const直接定义常量是有区别的

// 如果是普通类型跟直接const声明是一样的
const name1 = 'lll'
// name1 = '222'  // 不允许修改

let name2 = '222' as const
// name2 = '333'  // 无法修改

// 数组
let a1 = [1, 2] as const
const a2 = [1, 2]
// a1.unshift(1) 报错，因为此时的a1已经断言字面量为[10, 20]，数据无法做任何修改
a2.unshift(3)  // 通过，因为没有修改指针






// 6. 类型断言是不具有影响力的
// 下面例子中，将someting断言为boolean，虽然可以通过编译，但是并没有什么用，不会影响结果，因为编译过程中会删除断言类型
function toBoolean(something: any): boolean {
  return something as boolean
}
console.log(toBoolean('1'))