/*
* 和 JavaScript 一样，TypeScript 函数可以创建有名字的函数和匿名函数。你可以随意选择适合应用程序的方式，不论是定义一系列 API 函数还是只使用一次的函数。
通过下面的例子可以迅速回想起这两种 JavaScript 中的函数：
* */
/*
//命名函数
function add(x,y) {
    return x + y
}

// 匿名函数
let myAdd = function (x, y) {
    return x + y;
}
//箭头函数
let add1 = (x,y) => { return x + y } //可以简写成 let add1 = (x,y) => return x + y

*/

/*
//为函数定义类型
//命名函数
function add(x: string, y: string): string {
    return x + y
}

// 匿名函数
let myAdd = function (x: number, y: number): number {
    return x + y
}
//箭头函数
let adds = (x: number, y: number): number => {
    return x + y
}
//书写完整函数类型
let add2:(x:number, y:number)=> number = function (x: number, y: number): number{
    return x + y
}
*/

//可选参数和默认参数
/*TypeScript 里的每个函数参数都是必须的,传递给一个函数的参数个数必须与函数期望的参数个数一致。
* JavaScript 里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是 undefined。
* 在TypeScript 里我们可以在参数名旁使用 ? 实现可选参数的功能。
* 在 TypeScript 里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是 undefined 时。 它们叫做有默认初始化值的参数。
* 直接赋值的就是默认初始化值的参数，参数名?:类型则表示可选参数 (firstName: string = 'one', lastName?: string)
* */

/*
let buildName = (firstName: string = 'one', lastName?: string):string => {
    if(lastName){
        return firstName+'-'+lastName
    }else {
        return firstName
    }

}
console.log(buildName('东方','不败'))
console.log(buildName());
*/
//剩余参数
/*
* 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在 JavaScript 里，你可以使用 arguments 来访问所有传入的参数。
在 TypeScript 里，你可以把所有参数收集到一个变量里：
剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
* 剩余参数的语法：func(参数1：string，参数2：number，...args:string[])
* tips：...[arr]是es6的新语法，扩展运算符。
* */
/*
let arr = (str: string,age: number,...arrs:string[]):string =>{

    return str + age + arrs
}
console.log(arr('xiamign', 2, '是个小天才', 'str + age + arrs','不会吧不会吧不会吧'))
*/


//函数重载
/*
* 函数重载: 函数名相同, 而形参不同的多个函数
*需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加
* */

// 重载函数声明
function add(parameA: string, parameB: string): string
function add(parameA: number, parameB: number): number
//定义函数（得使用命名函数，用匿名|箭头函数的方式会报错）
function add(parameA: string | number, parameB: string | number): string | number {
    if (typeof parameA === 'string' && typeof parameB === 'string') {
        return parameA + parameB
    } else if (typeof parameA === 'number' && typeof parameB === 'number') {
        return parameA + parameB
    }
}

console.log(add('参数1', '参数2'))
console.log(add('参数1', '2'))

