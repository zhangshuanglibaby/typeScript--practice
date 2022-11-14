/*
 * @Date: 2022-11-14 11:38:38
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-14 14:00:08
 * @Description: 这是****文件
 */

// 泛型在typescript中是很重要的东西

// 1. 函数的泛型
/*
  写了两个函数，一个是数字类型的函数，一个是字符串类型的函数
  实现的功能是一样，只是类型不同，此时可以使用泛型优化
*/
function num1(a: number, b: number): Array<number> {
  return [ a, b ]
}
num1(1, 2)
function str8(a: string, b: string): Array<string> {
  return[ a, b ]
}
str8('1', '2')


// 泛型优化
/*
  语法为函数后面跟一个<参数名>,参数可以随便写 如：T
  当使用这个函数的时候把参数的类型传进去即可(也就是动态类型)
*/
function add<T>(a: T, b: T): Array<T> {
  return [ a, b ]
}
add<number>(1, 2)
add<string>('1', '2')

// 也可以使用不同的泛型参数名，只要在数量和使用方式上能对应上即可
function Sub<T, U>(a: T, b: U): Array<T | U> {
  let arr: Array<T | U> = [ a, b ]
  return arr
}
Sub<string, number>('1', 1)
Sub<number, number>(1, 1)
Sub<boolean, string>(true, '1')







// 2. 定义泛型接口
// 声明接口的时候 在名字后面加一个<参数>,使用的时候传递类型
interface MyInter<T> {
  (arg: T): T
}
function fn13<T>(arg: T):T {
  return arg
}
let result: MyInter<number> = fn13
result(123)






// 3. 对象字面量泛型
let foo: { <T>(arg: T): T }
foo = function<T>(arg: T): T {
  return arg
}
foo(123)








// 4. 泛型约束
// 我们期望在一个泛型的变量上面，获取其length参数，但是有的数据类型是没有length属性的
function getLength<T>(arg: T) {
  // return arg.length  // 此时会报错
}

// 使用泛型进行约束，我们约束其为具有length属性
interface Len {
  length: number
}
function getLength2<T extends Len>(arg: T) {
  return arg.length
}
// getLength2(11) 会报错 因为number没有length
getLength2('111')






// 5. 使用keyof 约束对象
/*
  其中使用了TS泛型和泛型约束。首先定义了T类型并使用extends关键字继承object类型的子类，然后使用keyof操作符获取T类型的所有键，
  他的返回类型是联合类型，最后利用extends关键字约束K类型必须为keyof T联合类型的子类型
*/
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
let o = { a: 1, b: 2}
prop(o, 'a')
// prop(o, 'c') // 会报错






// 6. 泛型类
/*
  声明方法跟函数类似，名称后面定义<类型>
  使用的时候确定类型 new Sub<number>()
*/
class Sub1<T> {
  attr: T[] = []
  add(a: T): T[] {
    return [a]
  }
}
let sub1 = new Sub1<number>()
sub1.attr = [1, 2]
sub1.add(1)
let sub2 = new Sub1<string>()
sub2.attr = ['1', '2']
sub2.add('111')