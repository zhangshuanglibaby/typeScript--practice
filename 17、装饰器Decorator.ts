/*
 * @Date: 2022-11-14 20:27:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-14 21:06:59
 * @Description: 这是****文件
 */
/*
  decorator 装饰器是一项实验性特性，在未来的版本中可能会发生改变
  他们不仅增加了代码的可读性，清晰的表达了意图，而且提供一种方便的手段，增加或修改类的功能
  若要启用实验性的装饰器特性，需在tsconfig.json里启用编译器选项
*/

// 装饰器是一种特殊的类型声明，能够被附加到类声明、方法，访问符，属性或参数上
// 定义一个类装饰器函数，他会把classA1的构造函数 传入你的watcher函数当作第一个参数
const watcher: ClassDecorator = (target: Function) => {
  console.log(target)
  target.prototype.getParams = <T>(params: T): T => {
    return params
  }
}
@watcher
class A1 {
  constructor() {

  }
}
@watcher
class A2 {
  constructor () {

  }
}
let a11 = new A1();
let a12 = new A2();
console.log((<any>a11).getParams('111'))
console.log((<any>a12).getParams(111))


// 装饰器工厂
/*
  其实也就是一个高阶函数，外层的函数接收值，里层的函数最终接受类的构造函数
*/
const watcher2 = (name: string): ClassDecorator => {
  return (target: Function) => {
    target.prototype.getName = () => {
      return name
    }
    target.prototype.getParams = <T>(param: T):T => {
      return param
    }
  }
}
@watcher2('大栗子')
class A3 {
  constructor() {

  }
}
let a13 = new A3();
console.log((a13 as any).getName())
console.log((a13 as any).getParams('123'))




// 装饰器组合
const watcher3 = (name: string): ClassDecorator => {
  return (target: Function) => {
    target.prototype.getName = ():string => {
      return name
    }
  }
}
const watcher4 = (param: string): ClassDecorator => {
  return (target: Function) => {
    target.prototype.getParams = ():string => {
      return param
    }
  }
}
@watcher3('小李子')
@watcher4('我是param')
class A8 {
  constructor () {

  }
}
let a8 = new A8();
console.log((a8 as any).getName())
console.log((a8 as any).getParams())



// 方法装饰器
/*
  返回三个参数
  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  2. 成员的名字
  3. 成员的属性描述符
*/
const met:MethodDecorator = (...args) => {
  console.log(args)
}
class A9 {
  constructor () {

  }

  @met
  getName(): string {
    return '大栗子'
  }
}
let a9 = new A9()
a9.getName()




// 属性装饰器
/*
  返回两个参数
  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  2. 属性的名字
*/
const param: PropertyDecorator = (...args) => {
  console.log(args)
}
class A10 {
  @param
  name: string
  constructor () {

  }
}
let a10 = new A10()




// 参数装饰器
/*
  返回三个参数
  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  2. 成员的名字
  3. 参数在函数参数列表中的索引
*/
const parameter: ParameterDecorator = (...args) => {
  console.log(args)
}

class A11 {
  constructor () {

  }
  // setParam(@parameter name: string, age: number) {

  // }
  setParam(name: string, @parameter age: number) {

  }
}
let a14 = new A11()
