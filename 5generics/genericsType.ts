// 泛型类型

// 声明一个泛型函数的几种方式
function identity<T>(arg: T): T {
  return arg
}

interface GenericIdentityFn {
  <T>(arg: T): T
}

let myIdentity: <T>(arg: T) => T = identity
let myIdentity2: <U>(arg: U) => U = identity
let myIdentity3: { <T>(arg: T): T } = identity
let myIdentity4: GenericIdentityFn = identity

// 进阶版，把泛型参数当作整个接口的一个参数
interface GenericIdentityFn2<T> {
  (arg: T): T
}
let myIdentity5: GenericIdentityFn2<number> = identity

export {}
