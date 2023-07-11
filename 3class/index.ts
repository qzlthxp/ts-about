// 一个简单的ts类
class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return 'hello' + this.greeting
  }
}
