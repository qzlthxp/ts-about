/**
 * 泛型类
 * 通用的使用class 声明一个类的时候在类名后面添加泛型参数
 *
 * 类有两部分：静态部分和实例部分。泛型类指的是实例部分的类型，所以类的静态熟悉不能使用泛型类型
 */

class GenericNumber<T> {
  static defaultValue: number
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}
