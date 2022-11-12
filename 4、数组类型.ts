/*
 * @Date: 2022-11-12 14:49:39
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-12 15:05:56
 * @Description: 这是****文件
 */

// 1、数组的类型
// 规则：类型 + []
let arr: number[] = [1, 2, 3]
// let arr2: number[] = [1, 2, '122']  // 定义了数字类型出现了字符串 会报错
// let arr3: number[] = [1, 2]
// arr3.unshift('3')  // 操作方法添加了非数字类型的也会报错

let arr4: number[] = [1, 2, 3] // 数字类型数组
let arr5: string[] = ['1', '2', '3'] // 字符串类型数组
let arr6: any[] = [1, '2', true] // 任意类型数组






// 2、数组的泛型
// 规则： Array<类型>
let arr7: Array<number> = [1, 2, 3]







// 3、 用接口表示数组
// 一般用来描述类数组
interface NumberArray {
  [index: number]: number
}
let arr8: NumberArray = [1, 2] // 表示：只要索引的类型是数字时，那么值的类型必须是数字






// 4、多维数组
let data: number[][] = [[1, 2], [1, 2]]
let data2: Array<Array<Number>> = [[1, 2], [1, 2]]






// 5、arguments类数组
function Arr(...args: any) {
  console.log(arguments)
  // 类数组的定义
  let arr: IArguments = arguments
}
/*
  IArguments是ts中定义好了的类型，它实际上就是：
  interface IArguments {
    [index: number]: number,
    length: number,
    callee: function
  }
*/
Arr(111, 222, 333)






// 6、any在数组中的应用
// 一个常见的例子数组中可以存在任意类型
let list: any[] = [1, '123', true]
