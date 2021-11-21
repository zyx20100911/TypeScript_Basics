(() => {
    //在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
    class User<T> {
        name: T
        getName: (x: T, y: T) => T //定义该属性的类型为 function，差不多就是没有实体的函数名，对函数形参返回值进行了约束

        constructor(name: T) {
            this.name = name
        }
    }

    const user: User<string> = new User<string>('jacky')
    console.log(user.name)
    user.getName = (x, y): string => {//这里给该属性赋值，值是一个函数，符合类里约束的有实体的函数
        return x + y
    }
    console.log(user.getName(user.name, 'Love'))//有实体的函数进行调用


    //泛型约束
    // 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
    // 没有泛型约束↓
    function fn<T>(x: T): void {
        // console.log(x.length)  // error
    }

    //泛型约束通过继承接口来做约束
    interface iLength {
        length: number
    }

    function fn2<T extends iLength>(a: T) {
        console.log(a.length)
    }

    fn2<string>('nishizhu')
    // fn2<number>(2345)//err


})()