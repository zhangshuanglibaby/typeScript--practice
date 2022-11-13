/*
 * @Date: 2022-11-13 15:47:23
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-13 16:25:17
 * @Description: 这是****文件
 */

// 在javascritpt中是没有枚举的概念的，ts帮我们定义了枚举的这个类型

// 使用枚举通过 enum 关键字定义

// 1. 数字枚举
// 默认是从0开始的
// blue=0，green=1， red=2
enum Types {
  blue,
  green,
  red
}
console.log(Types, 'Types')

enum Types2 {
  blue = 3,
  green = 6,
  red = 1
}
console.log(Types2, 'Types2')

// 增长枚举
// blue初始化为1，其余的成员会从1开始自动增长
enum Types3 {
  blue = 1,
  green,
  red
}
console.log(Types3, 'Types3')






// 2. 字符串枚举
/*
  由于字符串没有自增长的行为，字符串枚举可以很好的序列化。
  如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的，它并不能代表有用的信息，字符串枚举允许你提供一个运行时有意义的并且
  可读的值，独立于枚举成员的名字
*/
enum Types4 {
  blue = 'blue',
  green = 'green',
  red = 'red'
}
console.log(Types4, 'Types4')







// 3. 异构枚举
// 枚举可以混合字符串和数字成员
enum Types5 {
  Yes = 1,
  No = 'no'
}





// 4. 接口枚举
enum Types6 {
  blue,
  green
}
interface A11 {
  green: Types6.green
}

let obj3: A11 = {
  green: Types6.green
}
console.log(obj3, 'obj3')




// 5. const 枚举
/*
  let 和 var 都是不允许声明enum的，只能使用const
  大多数情况下，枚举是十分有效的方案。然而在某些情况下需求很严格。为了避免在额外生成的代码上的开销和
  额外的非直接的对枚举成员的访问，我们可以使用const枚举
  const声明的枚举会被编译成常量
*/
const enum Types7 {
  Yes = 1,
  No = 2
}
console.log(Types7.Yes)





// 6. 反响映射
// 它包含了正向映射(name -> value)  和反向映射 (value -> name)
// 要注意的是 不会为字符串枚举成员生成反向映射
enum Types8 {
  success =  11
}
let SUCCESS = Types8.success
let key = Types8[SUCCESS]
console.log(`value----${SUCCESS},key----${key}`)