"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 私有属性和方法
 *
 */
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        // 类内部可以正常访问私有name属性
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    Animal.prototype.superName = function () {
        return this.name;
    };
    return Animal;
}());
var Animal1 = /** @class */ (function (_super) {
    __extends(Animal1, _super);
    function Animal1(theName) {
        return _super.call(this, theName) || this;
    }
    Animal1.prototype.move = function (meter) {
        // console.log(`${this.name}`) // name只能在 Animal 内被访问
        // 通过接口拿到name的值
        console.log("".concat(_super.prototype.superName.call(this), " moved ").concat(meter));
    };
    return Animal1;
}(Animal));
var an = new Animal('an');
var an1 = new Animal1('an1');
// an.name // 无法访问
// an1.name // 无法访问
// 实例可以正常访问 public 属性和方法
an.move(123);
an1.move(10); // 访问重写后的move
