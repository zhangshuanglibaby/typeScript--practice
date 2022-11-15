/*
 * @Date: 2022-11-15 19:45:30
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-15 19:55:51
 * @Description: 这是****文件
 */

type Person1 = {
  name: string,
  age: number,
  sex: string
}


const proxy = (target: any, key: any) => {
  return new Proxy(target, {
    get (target, key, receiver) {
      console.log('----->get', key)
      return Reflect.get(target, key)
    },
    set (target, key, value,receiver) {
      console.log('-------set', key)
      return Reflect.set(target, key, value)
    }
  })
}

const logAccess = <T>(obj: T, key: keyof T): T => {
  return proxy(obj, key)
}

let obj1: Person1 = logAccess({
  name: '大栗子',
  age: 20,
  sex: '女'
}, 'name')
obj1.name = '大猫'
console.log(obj1.name, 'obj1obj1')

let obj6 = logAccess({
  fruit: '苹果',
  color: 'red'
}, 'color')
console.log(obj6.color)
