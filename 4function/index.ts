// 函数类型

// 具名函数
function add(num1: number, num2: number): number {
  return num1 + num2
}

// 匿名函数
let myAdd = function (num1: number, num2: number): number {
  return num1 + num2
}
// 完整函数类型
let myadd: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}
// 在指定类型时的参数名称与具体实现时参数名称，不需要一致，只需要保证类型相同即可
let myaddd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y
}

// 推断类型
// myadddd has the full function type
let myadddd = function (x: number, y: number): number {
  return x + y
}

// The parameters `x` and `y` have the type number
let myaddddd: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y
}
// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
