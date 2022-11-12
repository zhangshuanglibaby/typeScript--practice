/*
 * @Date: 2022-11-12 22:27:53
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-12 22:59:32
 * @Description: 这是****文件
 */

/*
  ES6提供了更接近传统语言的写法，引入了Class(类)这个概念，作为对象的模。
  通过class关键字，可以定义类。
  基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法
  更加清晰、更像面向对象编程的语法而已
*/

// 1. 在class 中如何定义变量
class Person {
  /*
    在typescript是不允许直接在constructor定义变量的，需要在constructor上先声明 
  */
 name: string
 age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  run () {

  }
}
let p = new Person('张', 19)





// 2. 类的修饰符
// 总共有3个： public、protected、private，默认是public
class Person6 {
  public name: string  // 使用public修饰符，可以让你定义的变量，内部和外部和子类都可以访问
  private age: number  // 使用private修饰符，代表定义的变量是私有的，只能在内部访问，不能在子类和外部访问
  protected some: any  // 使用proteced修饰符，代表定义的变量私有的只能在内部和继承的子类中访问，不能在外部访问
  constructor(name: string, age: number, some: any) {
    this.name = name
    this.age = age
    this.some = some
  }
}
class Man2 extends Person6 {
  constructor() {
    super('li', 2, true)
    console.log(this.some)
  }
}
let xiaomen = new Person6('zhang', 19, true)
// xiaomen.name






// 3. staic静态属性 和 静态方法
/*
  static定义的属性，不可以通过this去访问，只能通过类名去访问
  static定义的静态函数，同样也是不能通过this去调用，也是通过类名去调用
  如果两个两个函数都是static静态的，可以通过this互相调用
*/
class Person7 {
  name: string
  age: number
  some: any
  static nb: string
  constructor(name: string, age: number, some: any) {
    this.name = name
    this.age = age
    this.some = some
    // this.nb  // 会报错
    // this.run()  // 会报错
  }
  static run () {
    return this.name
  }
  static set () {
    console.log(this.nb)
  }
}
let p3 = new Person7('zhang', 12, true)
// 访问静态属性和方法
Person7.nb
Person7.run()






// 4. interface 定义类  implements
interface PersonClass {
  run(type: string): string
}
interface PersonClass2 {
  set(): void,
  age: number
}

class Person8 implements PersonClass {
  run(type: string): string {
    return '1111'
  }
}

// 多个interface的用逗号隔开
class Person9 implements PersonClass, PersonClass2 {
  age: number
  constructor(age: number) {

  }
  run(type: string): string {
    return '111'
  }
  set () {
    console.log('set')
  }
}

// 继承还是用extends
class A4 {
  name: number
  constructor(name: number) {
    this.name = name
  }
}
class Man3 extends A4 implements PersonClass, PersonClass2 {
  age: number
  constructor (age: number) {
    super(123)
    this.age = age
  }
  run(typeL: string): string {
    return '111'
  }
  set () {
    console.log('set')
  }
}


