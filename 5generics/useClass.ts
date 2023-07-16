// 在泛型里使用类类型

//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
function create<T>(c: { new (): T }): T {
  return new c()
}

// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
  hasMask: boolean
}

class ZooKeeper {
  nametag: string
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: ZooKeeper
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag // typechecks!
createInstance(Bee).keeper.hasMask // typechecks!
