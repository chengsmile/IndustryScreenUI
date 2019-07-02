<template>
  <div class='country pr'>
    <HeadBox :tabBtnActive="tabBtnActive" :tabsBtnList="tabsBtnList" :tabActive="tabActive" :tabsList="tabsList"></HeadBox>
    <el-row class="main-height" :gutter="10">
      <el-col :span="6">
        <div class="ratio12">
          <div class="row-h h-1">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox>
                <div slot="chart">
                  <TotalList :list="totalList"></TotalList>
                </div>
              </ChartBox>
            </div>
          </div>
          <div class="row-h h-2">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox title="安全事件分析">
                <div slot="chart" class="ratio111">
                  <div class="row-h h-1">
                    <div class="wrapper">
                      <el-row class="full-block" :gutter="10">
                        <el-col :span="8" class="gauge-pie-box">
                          <GaugePieChart :gradientStartColors="_tColors.gaugePie.colors[0]"></GaugePieChart>
                          <h3 class="gauge-pie-name">企业</h3>
                        </el-col>
                        <el-col :span="8" class="gauge-pie-box">
                          <GaugePieChart :gradientStartColors="_tColors.gaugePie.colors[1]"></GaugePieChart>
                          <h3 class="gauge-pie-name">设备</h3>
                        </el-col>
                        <el-col :span="8" class="gauge-pie-box">
                          <GaugePieChart :gradientStartColors="_tColors.gaugePie.colors[2]"></GaugePieChart>
                          <h3 class="gauge-pie-name">平台</h3>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="row-h h-1">
                    <div class="wrapper">
                      <h3 class="chart-explain">威胁类型TOP5</h3>
                      <div class="chart-div">
                        <BarChart :chartData="threatType" :legendShow="false" :barBorderRadius="[20,20,0,0]" :barGradientShow="true" :barShadowShow="true" :barStack="true"></BarChart>
                      </div>
                    </div>
                  </div>
                  <div class="row-h h-1">
                    <div class="wrapper">
                      <h3 class="chart-explain">攻击链趋势</h3>
                      <div class="chart-div">
                        <LineChart :chartData="attackChain" :smooth="true" :legendShow="false" ></LineChart>
                      </div>
                    </div>
                  </div>
                </div>
              </ChartBox>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="ratio21">
          <div class="row-h h-2">
            <div class="wrapper"></div>
          </div>
          <div class="row-h h-1">
            <div class="wrapper" ref="tableBox">
              <el-table :data="tableList" stripe size="mini" :height="tableHeight">
                <el-table-column prop="time" label="时间" show-overflow-tooltip></el-table-column>
                <el-table-column prop="" label="威胁类型" show-overflow-tooltip></el-table-column>
                <el-table-column prop="" label="攻击链" show-overflow-tooltip></el-table-column>
                <el-table-column prop="" label="攻击IP" show-overflow-tooltip></el-table-column>
                <el-table-column prop="" label="攻击国家" show-overflow-tooltip></el-table-column>
                <el-table-column prop="" label="被攻击IP" show-overflow-tooltip></el-table-column>
                <el-table-column prop="" label="被攻击省份" show-overflow-tooltip></el-table-column>
                <el-table-column prop="" label="被攻击地市" show-overflow-tooltip></el-table-column>
                <el-table-column prop="" label="被攻击企业" show-overflow-tooltip></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="ratio11">
          <div class="row-h h-1">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox title="漏洞分析">
                <div slot="chart" class="ratio112">
                  <div class="row-h h-1">
                    <div class="wrapper">
                      <el-row class="full-block" :gutter="10">
                        <el-col :span="8" class="full-h">
                          <PieChart></PieChart>
                        </el-col>
                        <el-col :span="8" class="full-h">
                          <PieChart></PieChart>
                        </el-col>
                        <el-col :span="8" class="full-h">
                          <PieChart></PieChart>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="row-h h-1">
                    <div class="wrapper">
                      
                    </div>
                  </div>
                  <div class="row-h h-2">
                    <div class="wrapper">
                      <h3 class="chart-explain">漏洞趋势</h3>
                      <div class="chart-div">
                        <LineChart :smooth="true" :legendShow="false" :chartData="loophole"></LineChart>
                      </div>
                    </div>
                  </div>
                </div>
              </ChartBox>
            </div>
          </div>
          <div class="row-h h-1">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox title="受害工业企业TOP10">
                <div slot="chart">
                </div>
              </ChartBox>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChartBox from 'components/chartBox'
import TotalList from 'components/totalList'
import CornerBg from 'components/cornerBg'
import HeadBox from 'components/headBox'
import PieChart from 'components/echarts/pie/pieChart'
import GaugePieChart from 'components/echarts/pie/gaugePieChart'
import LineChart from 'components/echarts/line/lineChart'
import BarChart from 'components/echarts/bar/barChart'
import { on, off } from 'utils/dom'
export default {
  name: 'SafeSate-Country',
  props: {},
  components: { ChartBox, CornerBg, HeadBox, PieChart, LineChart, BarChart, TotalList, GaugePieChart },
  data () {
    return {
      tabBtnActive: 0,
      tabsBtnList: [
        {label: '全国视角', value: 0},
        {label: '行业视角', value: 1}
      ],
      tabActive: 0,
      tabsList: [
        {label: '近24小时', value: 0},
        {label: '近7天', value: 1},
        {label: '近30天', value: 2}
      ],
      totalList: [
        {icon: 'iconanquan', iconBg: 'icon-bg1', label: '安全事件', value: '129180'},
        {icon: 'iconfuwuqi', iconBg: 'icon-bg2', label: '活跃漏洞', value: '33445'},
        {icon: 'iconshebei', iconBg: 'icon-bg3', label: '漏洞IP', value: '28434'},
        {icon: 'iconweb-icon-1', iconBg: 'icon-bg4', label: '漏洞企业', value: '2230'}
      ],
      tableHeight: 200,
      tableList: [
        {time: '2019-07-01 12:01:05'},
        {time: '2019-07-01 12:01:05'},
        {time: '2019-07-01 12:01:05'}
      ],
      threatType: {
        legendData: ['威胁类型'],
        seriesData: [[672, 445, 376, 298, 168]],
        categoryData: ['漏洞扫描', '僵尸网络', '情报外联', 'Dos攻击', '挖矿事件']
      },
      attackChain: {
        legendData: ['攻击链'],
        seriesData: [[672, 545, 876, 998, 768]],
        categoryData: ['1', '2', '3', '4', '5']
      },
      loophole: {
        legendData: ['漏洞'],
        seriesData: [[672, 545, 876, 998, 768]],
        categoryData: ['1', '2', '3', '4', '5']
      }
    }
  },
  computed: {},
  mounted() {
    console.log()
    this.$nextTick(() => {
      this.initSize()
      on(window, 'resize', this.initSize)
    })
  },
  beforeDestroy() {
    off(window, 'resize', this.initSize)
  },
  methods: {
    initSize() {
      this.tableHeight = this.$refs.tableBox.clientHeight
    }
  }
}
</script>
<style lang='less' scoped>
</style>