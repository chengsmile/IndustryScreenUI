<template>
  <div class='industry'>
    <el-row class="main-height" :gutter="10">
      <el-col :span="6">
        <div class="ratio12">
          <div class="row-h h-1">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox>
                <div slot="chart">
                  <RadarChart></RadarChart>
                </div>
              </ChartBox>
            </div>
          </div>
          <div class="row-h h-2">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox title="安全事件分析">
                <div slot="chart">
                  <BarLineChart></BarLineChart>
                </div>
              </ChartBox>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="ratio11">
          <div class="row-h h-1">
            <div class="wrapper">
              <Rotate3d></Rotate3d>
            </div>
          </div>
          <div class="row-h h-1">
            <div class="wrapper">
             <TreeMapChart></TreeMapChart>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="ratio111">
          <div class="row-h h-1">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox title="漏洞分析">
                <div slot="chart">
                  <PieChart></PieChart>
                </div>
              </ChartBox>
            </div>
          </div>
          <div class="row-h h-1">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox title="受害工业企业TOP10">
                <div slot="chart" >
                  <PieChart :pieAutoPlay="true"></PieChart>
                </div>
              </ChartBox>
            </div>
          </div>
          <div class="row-h h-1">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox title="受害工业企业TOP10">
                <div slot="chart" >
                  <el-row class="full-block" >
                    <el-col :span="12">
                      <GradualPieChart :radius="['40%', '80%']"></GradualPieChart>
                    </el-col>
                    <el-col :span="12">
                      <GradualPieChart2 :radius="['40%', '80%']"></GradualPieChart2>
                    </el-col>
                  </el-row>
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
import Rotate3d from 'components/rotate3d'
import PieChart from 'components/echarts/pie/pieChart'
import GradualPieChart from 'components/echarts/pie/gradualPieChart'
import GradualPieChart2 from 'components/echarts/pie/gradualPieChart2'
import BarLineChart from 'components/echarts/barLine/barLineChart'
import RadarChart from 'components/echarts/radar/radarChart'
import TreeMapChart from 'components/echarts/treeMap/treeMapChart'
import { on, off } from 'utils/dom'
export default {
  name: 'SafeSate-Industry',
  props: {},
  components: { ChartBox, CornerBg, Rotate3d, RadarChart, BarLineChart, TreeMapChart, PieChart, GradualPieChart, GradualPieChart2 },
  data () {
    return {
    }
  },
  computed: {},
  mounted() {
   
  },
  methods: {
   
  }
}
</script>
<style lang='less' scoped>
</style>