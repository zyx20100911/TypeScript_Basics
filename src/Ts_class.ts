//类：可以理解为模板，通过模板可以实例化对象
//面向对象的思想

(()=>{
    //ts中类的定义以及使用
    //定义一个类
    class Person {
        //定义属性
        name:string
        age:number
        sex:string
        //定义构造函数，在实例化对象的时候，可以直接对属性的值进行初始化。可以直接在构造函数里赋值，这个相当于是默认值，如果实例化对象的时候没有传值，那么就会使用默认值，如果没有默认值，实例化对象不传值会报错
        constructor(name:string = 'bb', age:number = 11,sex:string ='女'){
            //更新对象中的属性数据
            this.name=name
            this.age=age
            this.sex=sex
        }
        //定义实例化方法
        sayHi(str:string){
            console.log(`你好，我叫${this.name},今年${this.age},性别为${this.sex}`,str)
        }
    }

    //实例化对象
    const person_a = new Person('zs',19,'男')
    person_a.sayHi('您叫什么？')
})()