<template>
  <div class="layout">
    <header ref="header">
      <h1>{{ title }}</h1>
    </header>
    <aside class="side-nav" v-show="isVisible && showToolSideNav" :class="{ collapse: showSideNav }">
      <div class="mask" @click="showSideNav = false"></div>
      <div class="menus-box">
        <ul class="menus">
          <li v-for="(menu, index) in menus" :key="menu.path" :class="[ 'menu-item', $route.path.search(menu.path) !== -1 ? 'is-active' : '', menu.childrenVisible ? 'has-sub-menus' : '']">
            <div class="menu-border" v-if="!menu.hidden">
              <a class="menu-bg" href="javascript:" @click="dropMenu(menu, index)">
                <!-- v-touch-ripple -->
                <span>{{ menu.meta && menu.meta.title }}</span>
              </a>
            </div>
            <ul class="sub-menus" v-if="menu.childrenVisible && $route.path.search(menu.path) !== -1">
              <li v-for="subMenu in menu.children" :key="subMenu.path" :class="['sub-menu-item',{ 'is-active': $route.path === subMenu.path }]"> 
                <!-- v-if="!subMenu.hidden" -->
                <a href="javascript:" @click="changeMenu(subMenu.path)">
                  <!-- v-touch-ripple -->
                  <span>{{ subMenu.meta && subMenu.meta.title }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
    <section class="container">
      <transition name="el-zoom-in-center">
        <router-view v-if="animated"></router-view>
      </transition>
    </section>
    <div :class="['nav-btn', { collapse: showSideNav }]" v-show="isVisible && showToolSideNav">
      <a href="javascript:" title="显示菜单" @click="showSideNav = !showSideNav">
        <i class="icon iconfont iconarrowrightdl"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { on, off } from "utils/dom"
import { mapGetters, mapMutations } from "vuex"
import storage from "utils/storage"
import chartThemeColors from 'constants/chartThemeColors'
export default {
  name: "Layout",
  components: {},
  data() {
    return {
      showSideNav: false,
      showToolSideNav: true,
      animation: "animated zoomIn",
      animated: true,
      admin: "Admin",
      breadcrumbs: []
    }
  },
  computed: {
    ...mapGetters(["activeMenu", "menus", "bg", "title"]),
    isVisible() {
      return true
    }
  },
  created() {
    this.setSkin(this._theme)
    // this.$root.$el.parentNode.className = storage.get('theme') || 'skin-blue'
  },
  watch: {
    $route: {
      handler(route) {
        this.breadcrumbs = []
        this.genBreadcrumbs(this.$router.options, route, 0)
      },
      deep: true,
      immediate: true
    },
    _theme: {
      immediate: true,
      handler(val) {
        this.setSkin(val)
        // this.themeColors = chartThemeColors[this._theme]
        this.setThemeColors(chartThemeColors[this._theme])
        // console.log(this.themeColors, '====this.themeColors')
      }
    }
  },
  mounted() {
    this.setInitHeight()
    on(window, "resize", this.setInitHeight)
  },
  beforeDestroy() {
    off(window, "resize", this.setInitHeight)
  },
  methods: {
    ...mapMutations({
      setActiveMenu: "SET_ACTIVE_MENU",
      setThemeColors: "SET_THEME_COLORS",
    }),
    setInitHeight() {
      const topH = this.$refs.header.clientHeight
      const h = window.innerHeight - topH - 15
      storage.set("workspaceHeight", h)
      // console.log(h,"====h===")
    },
    setSkin(val) {
      this.$root.$el.parentNode.className = val
    },
    genBreadcrumbs(data, routes, count) {
      let _data = data.children || data.routes
      const matched = this.$route.matched[count]
      if (_data && matched) {
        _data.some(item => {
          const path = matched.path === "" ? "/" : matched.path
          if (item.path === path) {
            count++
            if (item.path !== "/") {
              const _path = item.childrenVisible ? "" : item.path
              this.breadcrumbs.push({
                name: item.meta.title,
                hidden: item.hidden,
                path: _path
              })
            }
            this.genBreadcrumbs(item, routes, count)
            return true
          }
        })
      }
    },
    dropMenu(menu, index) {
      if (!menu.childrenVisible) {
        this.$router.push(menu.path)
      } else {
        this.setActiveMenu(menu.children)
        this.$router.push(menu.children[0].path)
      }
    },
    changeMenu(path) {
      this.$router.push(path)
    },
    goback() {
      // window.location.href = this.$root.platform_url
    }
  }
}
</script>
<style lang="less" src="assets/theme/skin.less"></style>
<style lang="less">
.layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.side-tool {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 999;
}
</style>

