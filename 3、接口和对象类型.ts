/*
 * @Date: 2022-11-12 13:52:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-12 14:14:47
 * @Description: 这是****文件
 */

// 1. 对象的类型
/*
  在typescript中，我们定义对象的方式要用关键字interface(接口)，我的理解是使用interface来定义一种约束，
  让数据的结构满足约束的格式
*/

/*
  以下的写法会报错，因为我们在Person定义了a，b；但是对象里面缺少b属性
  使用接口约束的时候不能多一个属性，也不能少一个属性
  总之：必须要与接口保持一致
*/
// interface Person {
//   a: string,
//   b: string
// }
// const person: Person = {
//   a: '123'
// }

// 重名的interface 可以合并
interface A {
  name: string
}
interface A {
  age: number
}
let x: A = {
  name: 'zhangsan',
  age: 18
}

// 继承
interface Farther {
  name: string
}
interface Son extends Farther  {
  age: number
}
let son: Son = {
  name: 'son',
  age: 12
}






// 2. 可选属性，使用 ？ 操作符
/*
  可选属性的含义是该属性可以不存在，
 */
interface Person2 {
  name: string,
  age?: number
}
// 这样写不会报错
const person2: Person2 = {
  name: '张三'
}






// 3. 任意属性[propName: string]
// 需要注意的是，一旦定义了任意属性，那么确定属性和 可选属性的类型都必须是它的类型的子集

/*
  在这个例子当中我们看到接口中并没有定义sex weight，但是并没有报错
  因为我定义了[propName: sting]: any ，允许添加新的任意属性
*/
interface Person3 {
  name: string,
  age?: number,
  [propName: string]: any
}
const person3: Person3 = {
  name: 'zhangsan',
  sex: 'girl',
  weigth: 12
}
console.log(person3, 'person3')






// 4. 只读属性 readonly
// readonly 只读属性是不允许被赋值的，只能读取
interface Person4 {
  readonly name: string,
  age?: number,
  [propName: string]: any
}
let person4: Person4 = {
  name: 'zhang',
}
// person4.name = '111'  // 由于name为只读，修改会报错






// 5. 添加函数
interface Person5 {
  readonly name: string,
  age?: number,
  [propName: string]: any,
  cb: () => void
}
let person5: Person5 = {
  name: 'zhang',
  cb: () => {
    console.log(112)
  }
}