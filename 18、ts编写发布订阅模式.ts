/*
 * @Date: 2022-11-15 15:00:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-15 15:32:03
 * @Description: 这是****文件
 */

interface MyEvent {
  on: (name: string, fn: Function) => void;
  emit: (name: string, ...args: Array<any>) => void;
  off: (name: string, fn:Function) => void;
  once: (name: string, fn: Function) => void;
}

interface List {
  [key: string]: Array<Function>
}

class Dispatch implements MyEvent {
  list: List  // 消息中心
  constructor () {
    this.list = {}
  }
  on(name: string, fn: Function): void{
    const callback = this.list[name] || []
    callback.push(fn)
    this.list[name] = callback
    // console.log(this.list)
  }

  emit(name: string, ...args: Array<any>):void{
    if(!this.list[name]) {
      return console.log('名称错误')
    }
    this.list[name].forEach(fn => {
      fn.apply(this, args)
    })
  }
  off(name: string, fn: Function): void {
    if(!this.list[name]) {
      return console.log('名称错误')
    }
    const index = this.list[name].findIndex(fnItem => fnItem === fn)
    this.list[name].splice(index, 1)
  }
  once(name: string, fn: Function):void {
    let dep = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, fn)
    }
    this.on(name, dep)
  }
}

const instance = new Dispatch()

instance.on('post', (...args) => {
  console.log('监听post 1', args)
})
const offFn = (...args) => {
  console.log('监听post 2', args)
}
instance.on('post', offFn)
setTimeout(() => {
  instance.off('post', offFn)
  instance.emit('post', 1, '2', false)
}, 1000)
instance.on('input', () => {
  console.log('监听input')
})
instance.once('blur', () => {
  console.log('监听blur')
})
instance.emit('post', 1, '2', false)
instance.emit('blur', 1, '2', false)
instance.emit('blur', 1, '2', false)