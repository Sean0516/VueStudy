import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path: "/home",
        name:"Home",
        component: () => import("../views/home/Home"),
    },
    {
        path: "/category",
        name:"Category",
        component: () => import("../views/category/Category"),
    },
    {
        path: "/car",
        name:"Car",
        component: () => import("../views/car/Car"),
    },
    {
        path: "/person",
        name:"Person",
        component: () => import("../views/person/Person"),
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
