### 使用情况下会使用到Promise

1. 一般有异步操作时，使用Promise 对这个异步操作进行封装
2. new -> 构造函数 (1. 保存一些状态信息 , 2 执行传入的函数)
3. 在执行传入的回调函数时，会传入两个参数 resolve ,reject 这两个参数本身又是函数

`

    new  Promise((resolve, reject) => { setTimeout(()=>{ console.log("set time out "); // resolve("Hello World ")
    reject("deal failed ")
    },1000)
    }).then((date)=>{ console.log("set time out end date ",date)
    }).catch(err=>{ console.log("error msg :",err); })

`

### Promise 三种状态

- pending 等待状态 ，比如正在进行网络请求
- fulfill 满足状态 当我们主动回调resolve 时， 就处于该状态， 并且回调.then（）
- reject： 拒绝状态， 当我们主动调用了 reject 时， 就处于该回调状态，并且会调用 .catch（）

### 使用方式

1. 基本使用
2. 链式调用

`

    new Promise(resolve => {
    setTimeout(() => {
    resolve("Hello World")
    }, 1000)
    }).then(res => {
    console.log(res, "第一次 ");
    return res + "1111";
    }).then(res => {
        console.log(res, "第二次");
        return res + "2222";
    }).then(res => {
        console.log(res, "第三次 ");
        return res + "3333";
    }).then(res => {
        console.log("end result ", res)
    }).catch(res=>{
        console.log(res);
    })

`

3. all 多异步结果获取

