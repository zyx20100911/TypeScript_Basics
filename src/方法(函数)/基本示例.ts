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
* */

