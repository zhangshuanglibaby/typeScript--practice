/*
 * @Date: 2022-11-11 22:32:41
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-11 23:11:30
 * @Description: 这是****文件
 */
// 任意类型： any类型 和 unknown类型

// 1. 没有强制限定哪种类型，随时切换类型都可以，我们可以对any进行任何操作，不需要检查类型
let anys:any = '123'
anys = 123
anys = true



// 2. 声明变量的时候没有指定任意类型的默认为any
let anys2
anys2 = '123'
anys2 = 123



// 3. 弊端：如果使用了any就失去ts检测类型的作用


// 4. typescript3.0 中引入unknown类型 也被认为是top type，但它更安全。与any一样，所有类型都可以分配给unknow
// unknown类型比any更加严格，当你要使用any的时候，可以尝试使用unknown

// unknow 可以定义任意类型
let value: unknown
value = true
value = 123
value = 'hello'
value = {}
value = []
value = null
value = undefined
value = Symbol('type')

// 这样子写会报错，unknown类型不能作为子类型，只能作为父类型，即unknown类型不能赋值给其他类型
// let names: unknown = '123'
// let names2: string = names

// any类型可以作为父类型和子类型
let names: any = '123'
let names2: string = names

// unknown类型可赋值对象只有unknown 和  null
let aaa: unknown = '123'
let bbb: any = '456'
bbb = aaa

// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
let obj: any = { a: 1 }
obj.b

// 如果是unknow 是不能调用属性和方法的
let obj2: unknown = { a: 1, b: ():number => 123}
// obj2.a // 报错
// obj2.b() // 报错

/**
 * 总结any 和 unknown
 * 1、any和unknown 在定义的时候可以定义人任何类型
 * 2、unknown类型可赋值对象只有unknown和null
 * 3、any类型在对象上访问不存在的属性时不会报错，unknown类型不能访问对象上的属性和方法会报错
 */
