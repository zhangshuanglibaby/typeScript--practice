/*
 * @Date: 2022-11-13 19:30:26
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-13 19:41:33
 * @Description: 这是****文件
 */

// typescript 将使用never类型来表示不应该存在的状态

// 因为必定会抛异常，所以error将不会有返回值
function error(meesage: string): never {
  throw new Error(meesage)
}
error('11')

// 因为存在死循环，所以loop将不会有返回值
function loops(): never {
  while(true) {

  }
}


// never 与 void的差异
// void类型只是没有返回值，但本身不会出错
function Void(): void {
  console.log()
}
// 只会抛出异常，没有返回值
function Never(): never {
  throw new Error('aaa')
}


// never类型的一个应用场景
interface A12 {
  type: '苹果'
}
interface A13 {
  type: '雪梨'
}
interface A14 {
  type: '菠萝'
}

type All = A12 | A13
// type All = A12 | A13 | A14  // 这里会进入兜底逻辑，导致default里的类型检查会报错
function handleValue(val: All) {
  switch(val.type) {
    case '苹果':
      break;
    case '雪梨':
      break;
    default:
      // 兜底逻辑一般是不会进入这儿的，如果进来了 就是程序异常了
      const check: never = val
      break
  }
}

/*
  如果后续新增了一个接口，我们必须手动找到所有switch代码并处理
*/

