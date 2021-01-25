import {name,sum} from "./demo.js";
console.log("name:" + name)
sum(10,20);
// 导入function 和class
import {say,Student} from "./demo.js";
const student=new Student();
console.log(student.name);
student.hello()
// 统一导入
import  * as demo from "./demo.js"
demo.say()
