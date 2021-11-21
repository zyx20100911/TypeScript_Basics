(function () {
    //在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    var user = new User('jacky');
    console.log(user.name);
    user.getName = function (x, y) {
        return x + y;
    };
    console.log(user.getName(user.name, 'Love')); //有实体的函数进行调用
    //泛型约束
    // 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
    // 没有泛型约束↓
    function fn(x) {
        // console.log(x.length)  // error
    }
    function fn2(a) {
        console.log(a.length);
    }
    fn2('nishizhu');
    // fn2<number>(2345)//err
})();
