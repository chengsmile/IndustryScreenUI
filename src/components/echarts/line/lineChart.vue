<template>
  <ECharts :options="options" :autoresize="true" @click="chartClick"></ECharts>
</template>

<script>
  import globalChartMixin from 'mixins/globalChartMixin'
  import gridChartMixin from 'mixins/gridChartMixin'
  import axisChartMixin from 'mixins/axisChartMixin'
  import colorChartMixin from 'mixins/colorChartMixin'
  import tooltipChartMixin from 'mixins/tooltipChartMixin'
  import storage from "utils/storage"
  const chartColors = storage.get('tColors')
  import { getMaxValue, getMinValue } from 'constants/utils'
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/legendScroll'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/markLine'
  import 'echarts/lib/component/markPoint'

  export default {
    name: 'lineChart',
    components: { ECharts },
    mixins: [ globalChartMixin, axisChartMixin, gridChartMixin, colorChartMixin, tooltipChartMixin ],
    props: {
      chartData: {
        type: Object,
        default: () => {
          return {
            legendData: ['告警事件'],
            seriesData: [
              [1432, 1568, 1125, 1359, 1654, 1852, 1523, 1369, 1459, 1854, 1635, 1364]
            ],
            categoryData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        }
      },
      colors: {
        type: Array,
        default: () => chartColors.line.colors
      },
      smooth: {
        type: Boolean,
        default: false
      },
      markLineAverage: {
        type: Boolean,
        default: false
      },
      markLineAverageLabel: {
        type: String,
        default: '平均值'
      },
      markLineColor: {
        type: String,
        default: chartColors.line.markLine
      },
      showLineArea: {
        type: Boolean,
        default: false
      },
      areaStartColors: {
        type: Array,
        default: () => chartColors.line.gradualStart
      },
      areaEndColors: {
        type: Array,
        default: () => chartColors.line.gradualEnd
      }
    },
    data() {
      return {
        chartName: '[折线图模板]',
        startColors: this.areaStartColors,
        endColors: this.areaEndColors,
        currColors: []
      }
    },
    watch: {
      chartData(newVal, oldVal) {
        // console.log(`${this.chartName}chartData[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      colors() {
        // console.log(`${this.chartName}colors[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      smooth(newVal, oldVal) {
        // console.log(`${this.chartName}smooth[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      markLineAverage(newVal, oldVal) {
        // console.log(`${this.chartName}markLineAverage[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      markLineColor(newVal, oldVal) {
        // console.log(`${this.chartName}markLineColor[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      showLineArea(newVal, oldVal) {
        // console.log(`${this.chartName}showLineArea[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      areaStartColors(newVal, oldVal) {
        // console.log(`${this.chartName}areaStartColors[新值:${newVal};旧值:${oldVal}]`)
        this.startColors = newVal
        this.refresh()
      },
      areaEndColors(newVal, oldVal) {
        // console.log(`${this.chartName}areaEndColors[新值:${newVal};旧值:${oldVal}]`)
        this.endColors = newVal
        this.refresh()
      }
    },
    computed: {

    },
    methods: {
      markLineAverageData(item, index) {
        // 判断是否绘制平均值标线
        let oMarkLineAverage = {}
        if (this.markLineAverage) {
          oMarkLineAverage = {
            markLine: {
              precision: 0,
              lineStyle: {
                normal: {
                  color: this.markLineColor
                }
              },
              label: {
                normal: {
                  position: 'middle',
                  formatter: this.markLineAverageLabel + '：{c}'
                }
              },
              data: [{
                type: 'average',
                name: '平均值'
              }]
            },
            markPoint: {
              data: [{
                type: 'max',
                name: '最大值'
              },
              {
                type: 'min',
                name: '最小值'
              }
              ]
            }
          }
        }
        return oMarkLineAverage
      },
      setOptions() {
        let [ legendData, seriesData, categoryData ] = [ this.chartData.legendData, this.chartData.seriesData, this.chartData.categoryData ]
        const series = []
        let maxValue = 0, minValue = 0

        // 构造数据
        if (legendData && legendData.length !== 0) {
          legendData.forEach((item, index) => {
            series.push({
              name: item,
              type: 'line',
              smooth: this.smooth,
              data: seriesData[index],
              ...this.markLineAverageData(item, index)
            })
            if (this.showLineArea) {
              this.initColors()
              series[index].areaStyle = {
                color: this.currColors[index]
              }
            }
            maxValue = getMaxValue(seriesData[index], maxValue)
            minValue = getMinValue(seriesData[index], minValue)
          })
        }

        // 构造折线图的选项
        let lineOpt = this.returnAxisOptions(legendData, categoryData, series, maxValue, minValue)

        // console.log('lineChart', lineOpt)

        return lineOpt
      }
    }
  }
</script>

<style scoped>

</style>
