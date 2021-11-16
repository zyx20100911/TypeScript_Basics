//类 类型 （class）
//与c#，java类似，ts也能用它来明确一个类去符合某种约束

/*
* 类 class 类型
* 1，一个类可以实现多个接口 实现的关键字是implements
* 2，一个接口可以继承多个接口 继承的关键字是extends
* */

//定义一个接口
interface iFlying {

    fly()
}

interface iSwim {

    swim()
}

//一个接口继承多个接口
interface animal extends iFlying, iSwim {

    fly(),

    swim()
}

//实现接口
class Animal implements animal {
    fly() {
        console.log('flying')
    }

    swim() {
        console.log('swimming')
    }

}

//实例化对象
const animalA = new Animal();
animalA.fly()
animalA.swim()

//一个类实现多个接口
class AnimalB implements iFlying, iSwim {
    fly() {
        console.log('正在飞')
    }

    swim() {
        console.log('正在游')
    }

}

//实例化对象
const animalB = new AnimalB();
animalB.fly()
animalB.swim()
