(function () {
    //static  创建类的静态成员 静态属性存在于类本身上面而不是类的实例上
    /*静态属性, 是类对象的属性
    非静态属性, 是类的实例对象的属性
    */
    /*
        class Name {
            static name2: string = 'name2'
            name1: string = 'name1哦'

        }

        const n = new Name()
        console.log(n) //Name { name1: 'name1哦' }
        console.log(Name) //[Function: Name] { name2: 'name2' }
        console.log(n.name1)//name1哦
    //n.name2//err
        console.log(Name.name2)//name2
    //Name.name1//err
    */
    //抽象类
    /*
    * 抽象类做为其它子类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。 abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
    * 抽象类是为了子类服务的，而且大部分情况下都只会写方法，不放属性，抽象方法给子类实现，抽象属性没有意义
    */
    /*
    抽象类
      不能创建实例对象, 只有实现类才能创建实例
      可以包含未实现的抽象方法
      抽象方法没有方法体
    */
    /*   abstract class Animal {
           abstract run()
   
           abstract jump()
   
           abstract fly()
   
       }
   
       class Dog extends Animal {
           name: string
   
           constructor(name: string) {
               super() //tips:super()在最上面哦 在访问派生类的构造函数中的“this”之前，必须调用“super”。
               this.name = name
           }
   
           run() {
               console.log(this.name + '是跑着来的哦')
           }
   
           jump() {
               console.log(this.name + '在跳哦')
           }
   
           fly() {
               console.log(this.name + '不会飞的啦')
           }
       }
   
       const dog = new Dog('小狗')
       dog.run()
       dog.fly()
   */
})();
