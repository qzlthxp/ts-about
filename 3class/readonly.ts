/**
 * 只读属性和方法
 *
 * 必须在声明或者构造函数内部初始化
 */
class Animal {
  readonly name: string
  readonly age: number = 18
  public constructor(theName: string) {
    this.name = theName
  }
}

const an = new Animal('an')
// 实例可以正常访问 public 属性和方法
an.name
an.age
export {}
