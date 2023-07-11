/**
 * 私有属性和方法
 *
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
}

const an = new Animal('an')
an.name

// 实例可以正常访问 public 属性和方法
an.move(123)

export {}
