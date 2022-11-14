/*
 * @Date: 2022-11-14 15:26:28
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-14 15:46:26
 * @Description: 这是****文件
 */
/*
  在工作中，无法避免全局变量造成的污染，typescript提供了namespace避免这个问题出现
  内部模块，主要用于组织代码，避免命名冲突
  命名空间内的类默认私有
  通过export暴露
  通过namespace关键字定义
*/
/*
  typescript与ecmapscirpt 2015 一样，任何包含顶级import或者export的文件都被当成一个模块。
  相反的，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的
*/

// 命名空间中 通过export将想要暴露的部分导出,如果不用export导出是无法读取其值的
namespace a3 {
  export const time: number = 1000
  export const fn = <T>(arg: T): T => {
    return arg
  }
}
namespace a4 {
  export const time: number = 100
  export const fn = <T>(arg: T): T => {
    return arg
  }
}
a3.fn<number>(a3.time)
a4.fn<number>(a3.time)



// 嵌套命名空间
namespace a5 {
  export namespace a6 {
    export class Test {
      param :string
      constructor(param: string) {
        this.param = param
      }
    }
  }
}
let test3 = a5.a6.Test
new test3('111')




// 简化命名
namespace a7 {
  export namespace a8 {
    export const c = 1
  }
}
import exp = require("constants")
import X = a7.a8.c
console.log(X)



// 合并命名空间
// 重名的命名空间会合并
namespace a9 {
  export const a = 1
}
namespace a9 {
  export const b = 1
}
a9.a
a9.b