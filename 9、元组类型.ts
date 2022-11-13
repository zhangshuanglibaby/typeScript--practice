/*
 * @Date: 2022-11-13 14:18:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-13 14:36:45
 * @Description: 这是****文件
 */

// 如果需要一个固定大小的不同类型值的集合，我们需要使用元组

// 元组就是数组的变种
// 元组(Tuple)是固定数量的不同类型的元素的组合
/*
  元组与集合的不同之处在于，元组中的元素类型可以是不同的，而且数量固定
  元组的好处在于可以把多个元素作为一个单元传递。
  如果一个方法需要返回多个值，可以把这个值作为元组返回，而不需要创建额外的类来表示
*/

let arr2: [number, string] = [1, '123']
let arr3: readonly [number, boolean, string, undefined] = [1, true, '111', undefined]


// 当赋值或访问一个已知索引的元素时，会得到正确的类型
let arr9: [string, number] = ['22,', 22]
arr9[0].length
// arr9[1].length  // 会报错 ，因为number没有length属性


// 越界元素
let arr10: [string, number] = ['333', 333]
// 对于越界的元素它的类型被限制为联合类型
// arr10.push(true)  //会报错: 类型“boolean”的参数不能赋给类型“string | number”的参数
arr10.push(111)
arr10.push('111')
console.log(arr10, 'arr10')



// 应用场景: 例如定义excel返回的数据
let excel: [string, string, number, string][] = [
  ['title', 'name', 1, '123']
]