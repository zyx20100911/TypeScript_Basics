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
//定义函数（得使用命名函数，用匿名|箭头函数的方式会报错）
function add(parameA, parameB) {
    if (typeof parameA === 'string' && typeof parameB === 'string') {
        return parameA + parameB;
    }
    else if (typeof parameA === 'number' && typeof parameB === 'number') {
        return parameA + parameB;
    }
}
console.log(add('参数1', '参数2'));
console.log(add('参数1', '2'));
