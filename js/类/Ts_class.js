//类：可以理解为模板，通过模板可以实例化对象
//面向对象的思想
(function () {
    //ts中类的定义以及使用
    //定义一个类
    var Person = /** @class */ (function () {
        //定义构造函数，在实例化对象的时候，可以直接对属性的值进行初始化。可以直接在构造函数里赋值，这个相当于是默认值，如果实例化对象的时候没有传值，那么就会使用默认值，如果没有默认值，实例化对象不传值会报错
        function Person(name, age, sex) {
            if (name === void 0) { name = 'bb'; }
            if (age === void 0) { age = 11; }
            if (sex === void 0) { sex = '女'; }
            //更新对象中的属性数据
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        //定义实例化方法
        Person.prototype.sayHi = function (str) {
            console.log("\u4F60\u597D\uFF0C\u6211\u53EB" + this.name + ",\u4ECA\u5E74" + this.age + ",\u6027\u522B\u4E3A" + this.sex, str);
        };
        return Person;
    }());
    //实例化对象
    var person_a = new Person('zs', 19, '男');
    person_a.sayHi('您叫什么？');
})();
