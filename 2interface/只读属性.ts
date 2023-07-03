interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5 // error

// ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// ro[0] = 12 // error
// ro.push(5)  // error
// ro.length = 100 // error
// a = ro // error 赋值操作也不允许
// 如何把ReadonlyArray赋值，断言
a = ro as number[]

/**
 * const 声明变量的时候同样不允许修改（内存地址不变），何时该用 const 何时用 readonly一般是作为变量使用 const，属性用 readonly
 */
