/*
* 类的继承
* */

(() => {
    /*定义父类*/
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        run(distance: number) {
            console.log(`Animal'name: ${this.name},run ${distance}M`)
        }
    }

    /*定义子类*/
    class Dog extends Animal {
        constructor(name: string = '最勇敢的狗狗！') {
            //调用父类型构造方法,进行赋值
            super(name);
        }

        //重写父类方法
        run(distance = 10) {
            console.log(`wang wang wang！！！`)
            super.run(distance)
        }
    }


    class Snake extends Animal {
        constructor(name: string) {
            super(name)
        }

        run(distance) {
            super.run(distance)
        }
    }

    //实例化子类
    const dog = new Dog('god')
    dog.run(16)

    const snake = new Snake('sn')
    snake.run(7)


    // 父类型引用指向子类型的实例 ==> 多态
    const viper: Animal = new Snake('viper')
    viper.run(8)
    //  console.log(viper)
    //如果子类型没有扩展的方法(子类特有的方法), 可以让子类型引用指向父类型的实例
    const wang:Dog =new Animal('wangwangwang')
    wang.run(10)


})()