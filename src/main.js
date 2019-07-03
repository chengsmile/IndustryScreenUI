import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
import store from '@/store'
import axios from 'axios'
import genRouters from './router'
import * as menuToRouter from 'utils/menuToRouter'
import * as utils from 'utils/util'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条 样式

import globalMixin from 'mixins/globalMixin'
import plugins from 'utils/plugins'
/**
 * 后端联调时，没有实现相应的接口，需要将mock拦截打开，展示前台的mock数据，打开下面的注释即可（如果打包联调，在打包前打开注释）
 * 前端开发时不需要打开此代码
 */
if (process.env.VUE_APP_MOCK) {
  // console.log('process.env.MOCK', process.env.VUE_APP_MOCK)
  require('../mock-server/interceptor')
}

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueTouchRipple)
Vue.use(Router)
Vue.mixin(globalMixin)
Vue.use(plugins)
Vue.prototype.$axios = axios

export const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  utils.title(to.meta.title)
  NProgress.start() // 开启Progress
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
  window.scrollTo(0, 0)
})

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      menuRouts: [],
      oriMenus: [],
      user_name: 'sharpxiajun'
    }
  },
  mounted() {
    this.initMenu()
  },
  methods: {
    initMenu() {
      // const originMenus = this.$store.state.originMenus
      // if (originMenus.length && originMenus instanceof Array) {
      //   this.setRoutes(originMenus)
      //   return
      // }
      const fun = require('mock/screen/init')
      const res = fun.menus()
      if (res) {
        const routes = this.setRoutes(res)
        const index = routes.findIndex(item => item.path === '/')
        this.$store.commit('SET_ORIGIN_MENUS', res)
        this.$store.commit('SET_TITLE', res[index].menuName)
        this.$store.commit('SET_MENUS', routes[index].children)
        this.$store.commit('SET_MENUS', routes[index].children)
      } else {
        alert('菜单初始化错误！！！！')
      }
    },
    setRoutes(menus) {
      let routes = []
      routes = menuToRouter.exec(menus, genRouters)
      router.options.routes = routes
      router.addRoutes(routes, {
        override: true
      })
      return routes
    }
  }
}).$mount('#app')
