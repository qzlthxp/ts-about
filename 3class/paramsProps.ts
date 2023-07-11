/**
 * 参数属性
 *
 * 在之前的示例里，我们都是先声明变量，然后通过构造函数参数进行赋值
 * 其实这两步可以简化成一步操作
 *
 */

class Animal {
  constructor(public name: string, private age: number = 0, readonly hobbies: string[]) {
    this.name = name
    this.age = age
    this.hobbies = hobbies
  }
}

export {}
