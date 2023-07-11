/**
 * 公共属性和方法
 *
 * 默认就是public
 */
class Animal {
  public name: string
  public constructor(theName: string) {
    this.name = theName
  }

  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

const an = new Animal('an')
// 实例可以正常访问 public 属性和方法
an.name
an.move(123)

export {}
