// 继承 子类可以继承父类的属性和方法 -> super
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null')
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var Animal = /** @class */ (function () {
  function Animal(animalName) {
    this.name = animalName
  }
  Animal.prototype.move = function (distanceInMeters) {
    if (distanceInMeters === void 0) {
      distanceInMeters = 0
    }
    console.log(''.concat(this.name, ' moved ').concat(distanceInMeters, 'm.'))
  }
  return Animal
})()
var Snake = /** @class */ (function (_super) {
  __extends(Snake, _super)
  function Snake(snakeName) {
    return _super.call(this, snakeName) || this
  }
  Snake.prototype.move = function (distanceInMeters) {
    if (distanceInMeters === void 0) {
      distanceInMeters = 5
    }
    console.log('Slithering...')
    _super.prototype.move.call(this, distanceInMeters)
  }
  return Snake
})(Animal)
var Horse = /** @class */ (function (_super) {
  __extends(Horse, _super)
  function Horse(horseName) {
    return _super.call(this, horseName) || this
  }
  Horse.prototype.move = function (distanceInMeters) {
    if (distanceInMeters === void 0) {
      distanceInMeters = 45
    }
    console.log('Galloping...')
    _super.prototype.move.call(this, distanceInMeters)
  }
  return Horse
})(Animal)
var sam = new Snake('Sammy the Python')
var tom = new Horse('Tommy the Palomino')
sam.move()
tom.move(34)
