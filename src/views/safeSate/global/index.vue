<template>
  <div class='global pr'>
    <el-row class="main-height" :gutter="10">
      <el-col :span="6">
        <div class="ratio12">
          <div class="row-h h-1">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox>
                <div slot="chart">
                  
                </div>
              </ChartBox>
            </div>
          </div>
          <div class="row-h h-2">
            <div class="wrapper pr">
              <CornerBg></CornerBg>
              <ChartBox title="安全事件分析">
                <div slot="chart">
                
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
              <el-row class="half-h" :gutter="10">
                <el-col :span="8">
                  <div class="wrapper pr">
                    <div class="progress-pie-value abs-center color1">{{progressPie0.value}}%</div>
                    <ProgressPieChart :chartData="progressPie0"></ProgressPieChart>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="wrapper pr">
                    <div class="progress-pie-value abs-center color2">{{progressPie1.value}}%</div>
                    <ProgressPieChart :chartData="progressPie1" :startColor="colors[1].start" :endColor="colors[1].end"></ProgressPieChart>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="wrapper pr">
                    <div class="progress-pie-value abs-center color3">{{progressPie2.value}}%</div>
                    <ProgressPieChart :chartData="progressPie2" :startColor="colors[2].start" :endColor="colors[2].end"></ProgressPieChart>
                  </div>
                </el-col>
              </el-row>
              <el-row class="half-h" :gutter="10">
                <el-col :span="8">
                  <div class="wrapper pr">
                    <div class="progress-pie-value abs-center color4">{{progressPie3.value}}%</div>
                    <ProgressPieChart :chartData="progressPie3" :startColor="colors[3].start" :endColor="colors[3].end"></ProgressPieChart>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="wrapper pr">
                    <div class="progress-pie-value abs-center color5">{{progressPie4.value}}%</div>
                    <ProgressPieChart :chartData="progressPie4" :startColor="colors[4].start" :endColor="colors[4].end"></ProgressPieChart>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="wrapper pr">
                    <div class="progress-pie-value abs-center color6">{{progressPie5.value}}%</div>
                    <ProgressPieChart :chartData="progressPie5" :startColor="colors[5].start" :endColor="colors[5].end"></ProgressPieChart>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="row-h h-1">
            <div class="wrapper">
              
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
                <div slot="chart">
                  
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
import CornerBg from 'components/cornerBg'
import ProgressPieChart from 'components/echarts/pie/progressPieChart'
import { on, off } from 'utils/dom'
import storage from "utils/storage"
const chartColors = storage.get('tColors')
export default {
  name: 'SafeSate-Global',
  props: {},
  components: { ChartBox, CornerBg, ProgressPieChart },
  data () {
    return {
      colors: chartColors.progressPie.gradualColor,
      progressPie0: {
        name: '有限责任公司',
        value: 42
      },
      progressPie1: {
        name: '外商投资',
        value: 53
      },
      progressPie2: {
        name: '港澳台',
        value: 23
      },
      progressPie3: {
        name: '国有企业',
        value: 42
      },
      progressPie4: {
        name: '集体所有制',
        value: 53
      },
      progressPie5: {
        name: '股份有限公司',
        value: 23
      }
    }
  },
  computed: {},
  mounted() {
    console.log()
    this.$nextTick(() => {
      // this.initSize()
      // on(window, 'resize', this.initSize)
    })
  },
  beforeDestroy() {
    // off(window, 'resize', this.initSize)
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