let name = "Hello world "

function sum(a, b) {
    console.log(a + "+" + b + "=" )
    return a + b;
}

// 导出方式1
export {
    name, sum
}
// 导出方式2
export  var num=110
//  导出函数或类
export function say(){
    console.log("hello Sean")
}
export  class  Student{
    hello(){
        console.log("hello Master")
    }
}

