interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig) {}

// 对象字面量会被特殊对待而且会经过额外属性检查，当将他们赋值给变量或作为参数传递的时候。如果一个对象字面量存在任何 “目标类型”不包含的属性时，你会得到一个错误。
// { colour: 'red', width: 100 } 就是一个对象字面量
// 通过字面量形式声明变量就是 const obj = { colour: 'red', width: 100 }
createSquare({ colour: 'red', width: 100 })

/**
 * 如何通过检查？
 *
 * 1. 类型断言： as 或者 <>
 * 2. 给类型添加索引签名 [propName: string]: any
 * 3. 赋值给一个变量
 */
createSquare({ colour: 'red', width: 100 } as SquareConfig)
createSquare(<SquareConfig>{ colour: 'red', width: 100 })
let objParam = { colour: 'red', width: 100 }
createSquare(objParam)
