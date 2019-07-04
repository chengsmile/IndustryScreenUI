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
                        <el-col :span="8">
                          <GaugePieChart :chartData="gaugePie1" :gradientStartColors="_tColors.gaugePie.colors[0]"></GaugePieChart>
                        </el-col>
                        <el-col :span="8">
                          <GaugePieChart :chartData="gaugePie2" :gradientStartColors="_tColors.gaugePie.colors[1]"></GaugePieChart>
                        </el-col>
                        <el-col :span="8">
                          <GaugePieChart :chartData="gaugePie3" :gradientStartColors="_tColors.gaugePie.colors[2]"></GaugePieChart>
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
            <div class="wrapper">
              <el-row class="full-block" :gutter="10">
                <el-col :span="12">
                  <ScatterBarChart gridLeft="10%" gridRight="15%"></ScatterBarChart>
                </el-col>
                <el-col :span="12">
                  <div class="wrapper">
                    <div class="half-h">
                      <Pie3dChart id="pie3d1"></Pie3dChart>
                    </div>
                    <div class="half-h">
                      <Pie3dChart id="pie3d2"></Pie3dChart>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
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
                <div slot="chart" class="ratio212">
                  <div class="row-h h-2">
                    <div class="wrapper">
                      <el-row class="full-block" :gutter="10">
                        <el-col :span="8">
                          <GaugePieChart :chartData="gaugePie4" :gradientStartColors="_tColors.gaugePie.colors[0]"></GaugePieChart>
                        </el-col>
                        <el-col :span="8">
                          <GaugePieChart :chartData="gaugePie5" :gradientStartColors="_tColors.gaugePie.colors[1]"></GaugePieChart>
                        </el-col>
                        <el-col :span="8">
                          <GaugePieChart :chartData="gaugePie6" :gradientStartColors="_tColors.gaugePie.colors[2]"></GaugePieChart>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="row-h h-1">
                    <div class="wrapper">
                      <h3 class="chart-explain">风险指数</h3>
                      <div class="chart-div">
                        <PictorialBarChart></PictorialBarChart>
                      </div>
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
                <div slot="chart" class="ratio11">
                  <div class="row-h h-1">
                    <div class="wrapper">
                      <el-row class="full-block" :gutter="10">
                        <el-col :span="8">
                          <LiquidFillChart :chartData="liquidFillData1"></LiquidFillChart>
                        </el-col>
                        <el-col :span="8">
                          <LiquidFillChart :chartData="liquidFillData2"></LiquidFillChart>
                        </el-col>
                        <el-col :span="8">
                          <LiquidFillChart :chartData="liquidFillData3"></LiquidFillChart>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="row-h h-1">
                    <div class="wrapper">
                      <el-row class="full-block" :gutter="10">
                        <el-col :span="8">
                          <LiquidFillChart :chartData="liquidFillData1"></LiquidFillChart>
                        </el-col>
                        <el-col :span="8">
                          <LiquidFillChart :chartData="liquidFillData2"></LiquidFillChart>
                        </el-col>
                        <el-col :span="8">
                          <LiquidFillChart :chartData="liquidFillData3"></LiquidFillChart>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
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
// import PieChart from 'components/echarts/pie/pieChart'
import GaugePieChart from 'components/echarts/pie/gaugePieChart'
import LineChart from 'components/echarts/line/lineChart'
import BarChart from 'components/echarts/bar/barChart'
import ScatterBarChart from 'components/echarts/bar/scatterBarChart'
import PictorialBarChart from 'components/echarts/pictorialBar/pictorialBarChart'
import LiquidFillChart from 'components/echarts/liquidFill/liquidFillChart'
import Pie3dChart from 'components/highCharts/pie3d/pie3dChart'
import { on, off } from 'utils/dom'
export default {
  name: 'SafeSate-Country',
  props: {},
  components: { ChartBox, CornerBg, HeadBox, LineChart, BarChart, TotalList, GaugePieChart, PictorialBarChart, LiquidFillChart, ScatterBarChart, Pie3dChart },
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
      },
      gaugePie1: {value: 65, name: '企业'},
      gaugePie2: {value: 50, name: '设备'},
      gaugePie3: {value: 42, name: '平台'},
      gaugePie4: {value: 75, name: '高危'},
      gaugePie5: {value: 89, name: '中危'},
      gaugePie6: {value: 60, name: '低危'},
      liquidFillData1: { name: '供水', value: 0.1 },
      liquidFillData2: { name: '供电', value: 0.3 },
      liquidFillData3: { name: '天然气', value: 0.6 }
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