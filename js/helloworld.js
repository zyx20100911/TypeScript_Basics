(function () {
    //boolean类型
    /* let isValid:boolean = true
     */
    /*    let str1:string = '测试'
        let str2:string = '5sf'
        let a1:number = 1.2345
        const info = `我是${str1},信息：${str2},数字：${a1}`*/
    //默认情况下 null 和 undefined 是所有类型的子类型。
    /*   let u:undefined =undefined
       let n:null = null
       let str1:string ='cesjo'
       str1 = u
       let num:number = 123
       num = n
     console.log(num)*/
    //数组,要指定数组元素的类型，且数组元素统一类型
    /*   let list1:object[] = [{name:'自用'},{name:'自用'},{name:'自用'}]
       let list2:Array<string> = ['22','33','55']
 */
    //Tuple 元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。
    /*  let t1: [string, number] = ['str', 1]
      t1 = ['测试数组', 1234.222] //ok
      /!*
      t1 = [1234,'2222'] //err
      *!/
      console.log(t1[0].substring(0)) //ok*/
    /*console.log(t1[1].substring(0)) //err 'number' 不存在 'substring' 方法*/
    //枚举类型，enum
    /*    enum colors {
            red = 2,
            green,
            blue,
            yellow
        }
    
        let myColor: string = colors[2]
        //枚举类型默认从0开始递增，根据特定名称拿到值，根据值拿到名称
        //也可以手动赋值改变值
        console.log(myColor)// red*/
    //any类型，相当于回到js了去掉类型检查
    /*   let a:any = 4
       a = 'something'
       a = true*/
    /*        let arr:Array<any> = [10,'22',33,{name:'123'}]
            console.log(arr[3].name,arr)*/
    //void类型 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
    /*
        let fn1 = (str:string|number,num:number):void => {
            console.log(str+num.toString())
            console.log(Number(str)+num)
          //  return 123
        }
         console.log(fn1('123',123))

    //声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null
    let unusable: void = undefined
    */
    //object类型
    //object 表示非原始类型，也就是除 number，string，boolean之外的类型。
    //
    // 使用 object 类型，就可以更好的表示像 Object.create 这样的 API。例如：
    /*   let fn1 = (obj:object):object => {
          for (let key in obj) {
              console.log(obj[key])
          }
           return obj
       }
       console.log(fn1(new String('anything')))
       console.log(fn1({name:'abc', description:'12345'}))*/
    //联合类型（Union Types）表示取值可以为多种类型中的一种
    // 需求1 定义一个函数，得到一个数字或者字符串值的字符串类型
    /*
        function getString(str: string|number):string {
            return str.toString()
        }
        console.log(getString('12345'))
    */
    //需求2 定义一个函数，得到数字或者字符串的长度
    /*   function getLength(str: string | number): number {
           return str.toString().length
       }
       console.log(getLength(12345678923))
   */
    ///类型断言,手动指定一个值的类型
    //语法1 <类型>变量名
    //语法2 变量名 as 类型
    /*function getLength(str:string|number):number{
        if((<string>str).length){
            return  (<string>str).length
        }else {
            return str.toString.length
        }
    }*/
    /*
        function getLength(str:string|number):number{
            if((str as string).length){
                return  (str as string).length
            }else {
                return str.toString.length
            }
        }
         console.log(getLength('12345'))
    */
    // 类型推断
    /*  let a = 100
      a = 'abcdefghijklmnopqrstuvwxyz' //err 类型推断a为number类型，这里赋值str就会报错
      console.log(a) //err
      */
    /*  let txt2 //声明变量不赋值，类型推断会自动认为他是any类型
      txt2 = 200
      txt2 = '12345'
      console.log(txt2) // '12345'*/
})();
