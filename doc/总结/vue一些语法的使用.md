###  mustache  响应式体验
###  vue 列表展示
v-for
### 事件监听 
click->methods
### options  中可以放的东西
    el：
    data:
    methods
    生命周期函数
### 插值语法
    mustache 语法
    v-once
    v-html
    v-text
    v-cloak
### v-bind 动态绑定基本属性
    v-bind:src
    :href
### v-bind 绑定class
    对象语法  :class={'类名 : boolean'}
    数组语法
### v-bind 动态绑定style
    同上

### 计算属性
    computed
### 计算属性computed 和methods 对比
    computed 会进行缓存，如果数据没有改变，只会调用一次，不会频繁调用

###  const  的使用
    1. 一旦给const 修饰的标识符赋值之后，不能修改
    2. 在使用const 定义标识符，必须进行赋值
    3. 常量的含义是指向的对象不能修改，但是可以修改对象内部的属性
