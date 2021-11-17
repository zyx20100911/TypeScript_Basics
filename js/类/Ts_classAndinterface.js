(function () {
    //类 类型 （class）
    //与c#，java类似，ts也能用它来明确一个类去符合某种约束
    //实现接口
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.fly = function () {
            console.log('flying');
        };
        Animal.prototype.swim = function () {
            console.log('swimming');
        };
        return Animal;
    }());
    //实例化对象
    var animalA = new Animal();
    animalA.fly();
    animalA.swim();
    //一个类实现多个接口
    var AnimalB = /** @class */ (function () {
        function AnimalB() {
        }
        AnimalB.prototype.fly = function () {
            console.log('正在飞');
        };
        AnimalB.prototype.swim = function () {
            console.log('正在游');
        };
        return AnimalB;
    }());
    //实例化对象
    var animalB = new AnimalB();
    animalB.fly();
    animalB.swim();
})();
