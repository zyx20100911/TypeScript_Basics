
//TS中的接口(interfaces),使用接口来定义对象的类型
//接口是对象的状态（属性）和行为（方法）的抽象（描述），是一种约束，是一种类型

(() => {
    /*    //需求1 创建一个人的接口，有id,name,sex,age,
        //定义一个接口，将该接口作为对象的类型使用，限定\约束该对象中的属性数据
        interface IPerson {
            readonly id: string, //readonly 该属性只读
            //const id:string, ///err 在接口定义的属性里 使用const会报错
            name: string,
            sex: number,
            age?: number //？表示可有可无，非必要，没有加？的属性在在实例化对象里都是必须要有的属性
        }
        ///tips：readonly vs const,最简单的判断方式就是，作为变量使用用const，作为属性使用用readonly
        const person: IPerson = {
            id: '12345',
            name: 'John',
            sex: 0,
            //age: 18
        }
        // person.age = 18
        console.log(person)*/

    //函数类型：接口能描述js中，对象拥有的各种各样的外形，除了描述带有属性的普通对象外，接口也可以描述函数类型。
    /*
    为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
    他就像一个只有参数列表和返回值类型的函数定义。
    参数列表里的每一个参数都需要名字和类型。
    */
 /*   interface SeacherFunc {
        (searcherStr: string, source: string): boolean//函数签名
    }

    const funcs: SeacherFunc = (source: string, searcherStr: string): boolean => {
        return source.search(searcherStr) > -1
    }
    console.log(funcs('nihao', 'n'))*/



})()
