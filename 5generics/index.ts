/**
 * 泛型其实就是一个类型变量
 *
 * 比如我们需要写一个函数，返回类型和传入参数类型一致，例如：
 * function identity(arg: number): number {
 *   return arg
 * }
 */

// 使用泛型
function identity<T>(arg: T): T {
  return arg
}

// 通过传入所有参数包含类型参数的方式使用泛型
let output = identity<string>('myString')

// 利用类型推论（编译器会根据传入参数自动地帮助我们确定 T 的类型）
output = identity('myString')
