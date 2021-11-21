(() => {
    //泛型接口
    /*
    * 在定义接口时, 为接口中的属性或方法定义泛型类型
    * 在使用接口时, 再指定具体的泛型类型
    * */


    interface fxJK<T> {
        data: T[],
        add: (t: T) => void
        getById: (id: string) => T
    }

    class User {
        name: string
        id?: string
        age: number

        constructor(name: string, age: number,id?:string) {
            this.name = name;
            this.age = age
            this.id =id
        }
    }

    class UserCRUB implements fxJK<User> {
        data: User[]=[]
        add(user: User): void {
            this.data.push(user)
        }
        getById(id:string):User {
        //    console.log(this.data.find(item => item.id === id))
            return this.data.find(item => item.id === id)
    }
    }
    const user =  new UserCRUB()
    user.add(new User('jack',22,'123'))
    user.add(new User('rose',25,'126'))
    user.add(new User('lucy',26,'123qwer'))
    user.add(new User('black',21,'21qweasdzxc'))
    console.log(user)

    console.log(user.getById('123'))

})()