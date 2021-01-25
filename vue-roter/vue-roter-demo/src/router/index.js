// 配置路由的相关信息
import Vue from 'vue'
//1. 导入路由
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// 2. 通过Vue.use 来安装插件
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: "首页"
        },
        component: () => import("../components/Home.vue"),
        children: [
            {
                path: "",
                redirect: "news"
            },
            {
                path: "news",
                name: "News",
                component: () => import('../components/HomeNews.vue')
            },
            {
                path: "messages",
                name: "Messages",
                component: () => import('../components/HomeMessages.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: "关于"
        },
        component: () => import('../components/About.vue')
    },
    {
        path: '/user/:userId',
        name: 'User',
        meta: {
            title: "用户"
        },
        component: () => import('../components/User.vue'),
        beforeEnter:(to,from,next) =>{
            console.log('user enter ');
        }
    },
    {
        path: "/profile",
        name: "Profile",
        meta: {
            title: "档案"
        },
        component: () => import('../components/Profile.vue')
    }
]
// 3. 创建对象
const router = new VueRouter({
    routes,
    // 将路由的模式修改为history 模式
    mode: 'history'

    //linkActiveClass:""  统一active class  修改
})
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next();
    console.log('before');
})
router.afterEach((to,from)=>{
    console.log('after');
})
// 导出router
export default router
