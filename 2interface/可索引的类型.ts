// 数组的可索引类型
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['1', '2']
let myStr: string = myArray[0]

// TypeScript索引签名参数类型必须是 “string”、“number”、“symbol”或模板文本类型。
interface More {
  [propName: string | number | symbol]: any
}

interface Animal {
  name: string
}

interface Dog extends Animal {
  breed: string
}
// 同时使用 字符串索引和数字索引时，数字索引对应值的类型必须是字符串索引的子类型
interface Okay {
  [x: string]: {}
  [x: number]: 1
}
interface Okay2 {
  [x: string]: Animal
  [x: number]: Dog
}

// 字符串索引前面同意可以表示对象内值的类型
interface NumberDictionary {
  [index: string]: number
  length: number
  name: string // 索引签名要求属性对应值的类型一定是number
}

// 在使用索引签名表示数组元素类型时，可以设置只读
interface ReadonlyStringArray {
  readonly [index: number]: string
}
let myArray2: ReadonlyStringArray = ['1']
// 类型“ReadonlyStringArray”中的索引签名仅允许读取。ts(2542)
myArray2[0] = '1'

// 当然可以直接设置
const arr: readonly string[] = ['1', '2']
arr[1] = 3
