import Vue from 'vue'

//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

//全部导入
/* import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) */

// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'

import app from './app.vue'

// 导入路由模块
import router from './router.js'


let vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router
})