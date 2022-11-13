/*
 * @Date: 2022-11-13 16:36:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-13 16:46:58
 * @Description: 这是****文件
 */

// 什么是类型推论 ？
/*
  声明了一个变量但是没有定义类型
  typescript会在没有明确指定类型的时候推测出一个类型，这就是类型推论
*/
let str1 = '123'  // 这里ts推断出来是一个string类型
// str1 = 11 // 会报错，不能赋值给别的类型

// 如果声明的变量没有定义类型也没有赋值，这时候ts会推断成any类型可以进行任何的操作
let test1  // ts推断出any类型
test1 = []
test1 = {}
test1 = 123





// 2. 类型别名
// type 关键字 可以给一个类型定义一个名字，多用于符合类型

// 定义类型别名
type s = string
let str2: s = '123'
// type s2 = string | number
// let str3:s2 = '123'
// str3 = 123


// 定义 函数别名
type s2 = () => string
let str3: s2 = () => '112'


// 定义联合类型别名
type s3 = string | number
let str4: s3 = '123'
str4 = 123


// 定义值的别名
type value = 'off' | 'on'
// let str5: value = 111 // 会报错,只能是上面定义的值
let str5: value = 'off'

