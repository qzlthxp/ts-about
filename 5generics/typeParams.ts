/**
 * 类型参数
 *
 * 函数参数类型也可以是一个变量
 */

function getProperty(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, 'a')
getProperty(x, 'm')
