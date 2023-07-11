/**
 * 受保护属性和方法
 *
 * 受保护属性能在声明该属性的类内部使用，也可在派生类直接访问
 *
 * 按照上述规则推断，如果类的构造函数设为保护，那么在派生类构造函数的时候可以通过super调用，但是无法实例化对象，也就是说 const obj = new ProtectedCons() 是无法执行的
 */
class Animal {
  protected name: string
  constructor(theName: string) {
    this.name = theName
  }

  public move(distanceInMeters: number) {
    // 类内部可以正常访问私有name属性
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Animal1 extends Animal {
  constructor(theName: string) {
    super(theName)
  }

  move(meter: number) {
    console.log(`${this.name} moved ${meter}`)
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
