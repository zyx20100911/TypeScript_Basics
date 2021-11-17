(function () {
    /*
访问修饰符: 用来描述类内部的属性/方法的可访问性
ps.基本跟Java里的差不多概念
* public 公有: 默认值, 公开的外部也可以访问
* private 私有:只能类内部可以访问
* protected 受保护:类内部和子类可以访问
* */
    //公有修饰符
    /*    class Animal {
            public name: string

            public constructor(name: string) {
                this.name = name
            }

            public run(): void {
                console.log('running...' + this.name)
            }
        }
        const dog:Animal = new Animal('可爱的猫~')
        console.log(dog.name)
        dog.run()*/
    //私有修饰符
    /*
        class Animal {
            private name: string

            private constructor(name: string = '你是笨蛋吗') {
                this.name = name
            }

            private run(): void {
                console.log('running...' + this.name)
            }
        }
        const cat = new Animal() //err 构造函数私有，此处不可使用
        cat.run()//err 方法私有不可访问
        cat.name = '笨笨的狗'//err 属性私有不可访问
    */
    //受保护 修饰符
    /*class Animal {
        protected name: string

        protected constructor(name: string) {
            this.name = name
        }

        protected run(): void {
            console.log('running...' + this.name)
        }
    }

    /!*const dog:Animal = new Animal('可爱的猫~') //err
    console.log(dog.name)//err
    dog.run()//err
    *!/
    class Cat extends Animal {
        constructor(name:string) {
            super(name);
        }

        run() {
            super.run();
            console.log('是方法重写哦~')
        }
    }
    const catA:Cat = new Cat('SOP')
    // const aA:Animal = new Animal('bbKings')//err 输出：Constructor of class 'Animal' is protected and only accessible within the class declaration.(类“Animal”的构造函数受保护，只能在类声明中访问。)
    catA.run() // 输出 running...SOP 是方法重写哦~ 需要子类继承父类然后公有才能访问

*/
    //readonly 只读属性修饰符
    //只读属性必须在声明时或构造函数里被初始化。
    /*    class Person {
            person_id: string
            readonly name: string //readonly放这儿

            constructor(person_id: string, name: string) {//或者放在构造函数的参数里，写成(person_id: string,readonly name: string)
                this.name = name
                this.person_id = person_id
            }
            run():void{
                console.log(this.name + 'running....')
            }

        }
        const stu:Person = new Person('12345','张三')
        stu.run()
        // stu.name = '李四' //err
        console.log(stu.name);
        */
    //参数属性
    /*
    * 在上面的例子中，我们必须在 Person 类里定义一个只读成员 name 和一个参数为 name 的构造函数，并且立刻将 name 的值赋给 this.name，这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 Person 类的修改版，使用了参数属性：
    * 注意看我们是如何舍弃参数 name，仅在构造函数里使用 readonly name: string 参数来创建和初始化 name 成员。 我们把声明和赋值合并至一处。
    * 参数属性通过给构造函数参数前面添加一个访问限定符来声明。使用 private 限定一个参数属性会声明并初始化一个私有成员；对于 public 和 protected 来说也是一样。
    * */
    /*   class Person2 {
           constructor(readonly name:string) {
               this.name=name
           }
       }
   
       const p2 = new Person2('刷漆')
       // p2.name = 'be22qweoidasf2131234' //err
       console.log(p2) //输出 Person2 { name: '刷漆' }
   */
})();
