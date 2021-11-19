//下面创建一个函数, 实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value 的数组 不用泛型的话，这个函数可能是下面这样：
let cV = (count: number, value: string): any[] => {
    let arr: any[] = []
    for (var i = 0; i < count; i++) {
        arr.push(value)
    }
    return arr
}
console.log(cV(4, 'nihao'));//输出 [ 'nihao', 'nihao', 'nihao', 'nihao' ]
// 这里使用的是any类型，any类型不会提示，也不会报错，相当于放弃类型检查了

//使用函数泛型 T相当于形参，调用方法的时候传入实际类型：createArray2<string>('笨比', 2)
function createArray2<T>(value: T, count: number): Array<T> {
    let arr: Array<T> = []
    for (let i = 0; i < count; i++) {
        arr.push(value)
    }
    return arr
}

console.log(createArray2<string>('笨比', 2))//输出 [ '笨比', '笨比' ]
console.log(createArray2<number>(55, 2))//输出 [ 55, 55 ]
//这里使用泛型以后，要求返回值数组的值的类型跟val一致

//函数泛型也可以使用多个
function createArray3<T, K, C>(value: T, count: K, obj: C): [T, C] {
    let arr: [T, C] = [value, obj];
    if (typeof count != 'number') {
        for (let i = 0; i < count.toString().length; i++) {
            arr.push(obj)
        }
    } else {
        for (let i = 0; i < count; i++) {
            arr.push(obj)
        }
    }
    return arr
}
console.log(createArray3<string, number, object>('nihao', 4, {name: '张三', age: 19})) //输出
// [
//   'nihao',
//   { name: '张三', age: 19 },
//   { name: '张三', age: 19 },
//   { name: '张三', age: 19 },
//   { name: '张三', age: 19 },
//   { name: '张三', age: 19 }
// ]

