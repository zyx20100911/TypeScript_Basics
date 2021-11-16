/*
* 类的继承
* */
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
(function () {
    /*定义父类*/
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.run = function (distance) {
            console.log("Animal'name: " + this.name + ",run " + distance + "M");
        };
        return Animal;
    }());
    /*定义子类*/
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            if (name === void 0) { name = '最勇敢的狗狗！'; }
            //调用父类型构造方法,进行赋值
            return _super.call(this, name) || this;
        }
        //重写父类方法
        Dog.prototype.run = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log("wang wang wang\uFF01\uFF01\uFF01");
            _super.prototype.run.call(this, distance);
        };
        return Dog;
    }(Animal));
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.run = function (distance) {
            _super.prototype.run.call(this, distance);
        };
        return Snake;
    }(Animal));
    //实例化子类
    var dog = new Dog('god');
    dog.run(16);
    var snake = new Snake('sn');
    snake.run(7);
    // 父类型引用指向子类型的实例 ==> 多态
    var viper = new Snake('viper');
    viper.run(8);
    //  console.log(viper)
    //如果子类型没有扩展的方法(子类特有的方法), 可以让子类型引用指向父类型的实例
    var wang = new Animal('wangwangwang');
    wang.run(10);
})();
