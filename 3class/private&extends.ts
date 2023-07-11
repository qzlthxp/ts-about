/**
 * 私有属性和方法
 *
 * 私有属性只能在声明该属性的类内部使用
 * 其他地方使用只能再写一个函数去返回这个值
 */
class Animal {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }

  public move(distanceInMeters: number) {
    // 类内部可以正常访问私有name属性
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }

  superName() {
    return this.name
  }
}

class Animal1 extends Animal {
  constructor(theName: string) {
    super(theName)
  }

  move(meter: number) {
    // console.log(`${this.name}`) // name只能在 Animal 内被访问
    // 通过接口拿到name的值
    console.log(`${super.superName()} moved ${meter}`)
  }
}

const an = new Animal('an')
const an1 = new Animal1('an1')
// an.name // 无法访问
// an1.name // 无法访问
// 实例可以正常访问 public 属性和方法
an.move(123)
an1.move(10) // 访问重写后的move

export {}
