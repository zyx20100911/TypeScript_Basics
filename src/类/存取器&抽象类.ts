//存取器 getter setter
/*
* TypeScript 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
* 使用存取器以后，调用存取器的方式于调用属性一样，而不是调用方法
* */
(() => {
    class Person {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
      get nameAge(): string {
          console.log(1)
          return this.name+':'+this.age
      }
      set nameAge(value: string) {
          console.log(2)
          console.log(value)
          const name = value.split(':')
          this.name = name[0]
          this.age = parseInt(name[1])
      }

    }
    const p =new Person('罗小黑',3)
    console.log(p.nameAge)
    p.nameAge = '八嘎:20'
    console.log(p.name)
    console.log(p.age)
})()