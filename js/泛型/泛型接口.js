(function () {
    //泛型接口
    /*
    * 在定义接口时, 为接口中的属性或方法定义泛型类型
    * 在使用接口时, 再指定具体的泛型类型
    * */
    var User = /** @class */ (function () {
        function User(name, age, id) {
            this.name = name;
            this.age = age;
            this.id = id;
        }
        return User;
    }());
    var UserCRUB = /** @class */ (function () {
        function UserCRUB() {
            this.data = [];
        }
        UserCRUB.prototype.add = function (user) {
            this.data.push(user);
        };
        UserCRUB.prototype.getById = function (id) {
            //    console.log(this.data.find(item => item.id === id))
            return this.data.find(function (item) { return item.id === id; });
        };
        return UserCRUB;
    }());
    var user = new UserCRUB();
    user.add(new User('jack', 22, '123'));
    user.add(new User('rose', 25, '126'));
    user.add(new User('lucy', 26, '123qwer'));
    user.add(new User('black', 21, '21qweasdzxc'));
    console.log(user);
    console.log(user.getById('123'));
})();
