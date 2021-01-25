### vue-router 的使用
1. 导入路由对象,并调用 Vue.use(VueRouter) 来安装路由功能
   
`
import VueRouter from 'vue-router'

Vue.use(VueRouter)
`
2. 创建路由实例，并传入路由映射配置 

 `
   const routes = [
   {
   path: '/',
   name: 'Home',
   component: Home
   },
   {
   path: '/about',
   name: 'About',
   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   }
   ]

const router = new VueRouter({
routes
})

`  
3. 在Vue 实例中挂载创建的路由实例

`
   new Vue({
   router,
   render: h => h(App)
   }).$mount('#app')
   `
### router-link 属性
- to  跳转
- tag  指定router-link  之后渲染成什么组件 tag="button" 
- replace  replace 不会留下history记录，所以指定replace 的情况下，后退键返回不能返回到上一个页面
- active-class  当router-link 对应的路由匹配成功时， 会自动给当前元素设置一个class 。 设置active-class 可以修改默认的名称
   1. 在 进行高度显示的导航菜单或者底部tabbar 时，会使用到该类
   2. 但是通常不会修改类的属性，会直接使用默认的router-link-active 即可

### 动态路由的使用
- 使用 path: '/user/:userId', 进行路由配置
- 使用:to="/user/+userId" ，在path 后面跟上对应的值，进行参数传递
- 使用$route.params.userId 进行参数获取
   
### 路由的懒加载
- 路由懒加载的主要作用是将路由对应的组件打包成一个个的js 代码块
- 只有在这个路由被访问到的时候，才加载对应的组件
-  使用该代码实现  () => import('../components/User.vue')

### 嵌套路由的使用
- 使用 children 配置路由
- 在需要嵌套的vue 页面 配置 router-link 和 router-view
### 参数传递
##### params 参数传递
参考动态路由的使用
##### query  参数传递
- 路由配置
- 对象中使用query 的key 作为传递方式
- 传递后形成的路径: /demo?id=123&name=sean
### 导航守卫
- 首先，meta 定义一些参数
- 利用导航守卫来修改一些数据
##### 前置导航钩子的三个参数解析 (全局守卫)
- to  即将要进入的目标的路由对象
- from  当前导航即将要离开的路由对象
- next 调用该方法后，才能进入下一个钩子
`
router.beforeEach((to, from, next) => {
document.title = to.matched[0].meta.title
next();
})
`
##### afterEach 后置导航钩子  不需要调用next() 方法
#####  路由独享守卫
beforeEnter:(to,from,next) =>{
console.log('user enter ');
}
##### 组件内的守卫

### vue-router keep-alive



