/**
 * 泛型约束
 *
 * 因为泛型代表任意类型，所以之前我们访问 arg.length 的时候会报错
 * 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。
 * 首先需要定义一个约束类型，创建一个包含 .length 熟悉的接口，使用这个借口和 extends 关键字来实现约束
 */

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIdentity({ length: 10, value: 3 })
// 现在这个泛型函数被约束了不是任意类型，传入参数类型必须有 length 属性
// loggingIdentity(4) // 如果没有约束泛型，类型推论会将 T 推断为 number
