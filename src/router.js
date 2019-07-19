
// 1.0 导入 vue-router 包
import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
import SearchContainer from './components/SearchContainer.vue'

// 3.0 创建路由对象
let router = new VueRouter({
    routes: [
        { path: "/", component: HomeContainer },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/search", component: SearchContainer }
    ],
    linkActiveClass: 'mui-active'
})

export default router