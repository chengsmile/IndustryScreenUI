<template>
  <el-row class="head-box" :gutter="10">
    <el-col :span="6">
      <div class="date" v-if="leftShow">{{date}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{time}}</div>
    </el-col>
    <el-col :span="12">
      <ul class="tabs-btn flex-layout" v-if="centerShow">
        <li :class="['flex-1', tab1Active == tab.value ? 'active': '']" v-for="tab in tabsBtnList" :key="tab.value" @click="changeAngleTabs(tab.value)">
          <span>{{tab.label}}</span>
        </li>
      </ul>
    </el-col>
    <el-col :span="6">
      <ul class="tabs flex-layout" v-if="rightShow">
        <li :class="[tab2Active === tab.value ? 'active' : '']" v-for="tab in tabsList" :key="tab.value" @click="changeTabs(tab.value)">
          {{tab.label}}
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HeadBox',
  props: {
    leftShow: {
      type: Boolean,
      default: true
    },
    centerShow: {
      type: Boolean,
      default: true
    },
    tabBtnActive: {
      type: Number,
      default: 0
    },
    tabsBtnList: {
      type: Array,
      default: () => []
    },
    rightShow: {
      type: Boolean,
      default: true
    },
    tabActive: {
      type: Number,
      default: 0
    },
    tabsList: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  data () {
    return {
      date: '2019年7月1日',
      time: '17:56:43',
      tab1Active: this.tabBtnActive,
      tab2Active: this.tabActive
    }
  },
  computed: {},
  mounted() {},
  methods: {
    changeAngleTabs(val) {
      this.tab1Active = val
    },
    changeTabs(val) {
      this.tab2Active = val
    }
  }
}
</script>
<style lang='less' scoped>
</style>