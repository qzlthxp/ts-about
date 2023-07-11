// 接口也可以定义函数类型
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = (source, subString) => {
  let result = source.search(subString)
  return result > -1
}

// 函数参数名称不需要与接口定义的参数名称相同
mySearch = (src, sub) => {
  return src.search(sub) > -1
}
