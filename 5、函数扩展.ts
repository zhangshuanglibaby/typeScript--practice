/*
 * @Date: 2022-11-12 17:01:53
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-12 17:26:50
 * @Description: 这是****文件
 */

// 注意，参数不能多传也不能少传，必须按照约定的类型来
const fn = function (name: string, age: number): string {
  return name + age
}
fn('zhang', 18)



// 函数的可选参数
// 通过 ？ 表示该参数为可选参数
const fn2 = function(name: string, age?: number): string {
  return name + age
}
fn2('张')


// 函数的默认值
const fn3 = function(name: string, age: number = 29): string {
  return name + age
}
fn3('张')




// 接口定义 函数
interface Add {
  (num: number, num2: number): number
}

const fn4: Add =  (num: number, num2: number): number => {
  return num + num2
}
fn4(1, 1)

interface User {
  name: string,
  age: number
}
const fn5 = (user: User): User => {
  return user
}
fn5({name: '张', age: 19})


// 定义剩余参数
const fn6 = (array: number[], ...items: any[]): any[] => {
  return items
}
fn6([1, 2, 3], '1', true)



// 函数重载
/*
  重载是方法名字相同,而参数不同，返回类型可以相同也可以不相同
  如果参数类型不同，则执行函数的参数类型应该设置为any
  参数数量不同 则执行函数的参数设置为可选
*/

function fn7 (params: number): void
function fn7 (params: string, params2: number): void
// 执行函数～ 如果传入一个参数遵循第一个规则 如果传入2个参数遵循第二个规则
function fn7 (params: any, params2?: any): void { 

}
fn7(2)
fn7('1', 1)