/*
 * @Date: 2022-11-14 17:41:14
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-14 18:11:47
 * @Description: 这是****文件
 */

// 1. 对象混入
// 可以使用es6的object.assign 合并多个对象
// 此时的people4会被推断成 一个交叉类型 Name & Age & Sex
interface Name {
  name: string
}
interface Age {
  age: number
}
interface Sex {
  sex: number
}
let people1: Name = { name: '章三' }
let people2: Age = { age: 10 }
let people3: Sex = { sex: 1 }
const people4 = Object.assign(people1, people2, people3)
console.log(people4, 'people4')







// 2. 类的混入
class A7 {
  type: boolean
  changeType(): void {
    this.type = !this.type
  }
}
class B7 {
  name: string
  getName ():string {
    return this.name
  }
}
/*
  创建一个类，结合以上两个类
  使用implements，把类当成了接口
*/
class C7 implements A7, B7 {
  type: boolean = false
  name: string = '章三'
  changeType: () => void
  getName: () => string
}

/*
  创建这个帮助函数，做混入操作。它会遍历A7、B7上的所有属性，并复制到目标上去，
  把之前的占位属性替换成真正的实现代码
*/
Mixins(C7, [A7, B7])
function Mixins(curCls: any, itemCls: any[]) {
  itemCls.forEach(item => {
    // console.log(item.prototype, 'prototype')
    // console.log(Object.getOwnPropertyNames(item.prototype), 'Object.getOwnPropertyNames(item.prototype)')
    Object.getOwnPropertyNames(item.prototype).forEach(name => {
      // console.log(curCls.prototype[name], 'name')
      curCls.prototype[name] = item.prototype[name]
    })
  })
}
let c1 = new C7()
console.log(c1, 'changetype')
c1.changeType()
console.log(c1.type)