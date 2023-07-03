// boolean
let isDone: boolean = false

// number
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

// string
let username: string = 'bob'
username = 'smith'

// array
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// tuple 元组（已知元素数量和类型的数组）
let tuple: [string, number]
tuple = ['1', 1]
// tuple = [1, '1'] // error
// tuple[2] = '2' // 旧版本可以越界操作并且类型为元组的联合类型，但是新版本越界操作会有错误提示

// enum
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green // Red 0, Green 1, Blue 2

enum Color2 {
  Red = 1,
  Green,
  Blue
}
// Red 1, Green 2, Blue 3

enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4
}
// Red 1, Green 2, Blue 4
let colorName: string = Color[2] // Green

// enum Color4 {
//   Red = 1,
//   Green = '123',
//   // Blue 只写一个 Blue 会报错
//   Blue = '456'
//   Blue = 100
//   Orange // 101 又开始自增
// } 某个枚举元素值为字符串，那么后面的所有元素都要指定一个值

// any 任意类型
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

// void 没有任何类型，常用于函数没有返回值
function warnUser(): void {
  console.log('This is a my warning message')
}

// null 和 undefined
let u: undefined = undefined
let n: null = null
let vo: void = u // undefined 可以赋值给 void 类型
// vo = n // null 不能赋值给 void

// never 永远不存在的值的类型
function error(message: string): never {
  // 返回never的函数必须存在无法达到的终点
  throw new Error(message)
}
function fail() {
  // 推断的返回值类型为never
  return error('Something failed')
}
function infiniteLoop(): never {
  // 返回never的函数必须存在无法达到的终点
  while (true) {}
}

// Object 和 object 和 {}
/**
 * 
 Object vs object:
  1、两者原型上属性方法重写表现不一致；一个类型为 Object 的对象如果内部存在和原型上相同的方法例如：
  const obj: Object = {
    toString() {
      return 123
    }
  }
  这个就会报错，因为 toSting() 返回数据是字符串类型
  但是如果类型是 object 就不会报错，类似于实例上存在属性就不会去原型链上找了
  2、object类型值表示⾮原始类型，Object类型值可以为原始类型；
  3、Object可以通过new来定义类型；

  Object vs {}:
  1、两者类型值可以为原始类型；
  2、两者原型上属性方法重写表现不一致；{}和object类似
  3、Object可以通过new来定义类型；

  object vs {}：
  1、两者原型上属性方法重写表现一致；
  2、object类型值表示⾮原始类型，{} 类型值可以为原始类型；

  声明类型的时候 Object不常用，object 和 {}，还不如用 Record<string,any>
 */

// 类型断言
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
let strLength2: number = (someValue as string).length
