// 使用泛型变量

// 泛型变量代表任意类型，如果我们直接访问参数的某个方法就会报错
function identity<T>(arg: T): T {
  // console.log(arg.length) // 类型 T 上不存在 length
  return arg
}

// 现在假设我们想操作T类型的数组而不直接是T。由于我们操作的是数组，所以.length属性是应该存在的。
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length) // Array has a .length, so no more error
  return arg
}

export {}
