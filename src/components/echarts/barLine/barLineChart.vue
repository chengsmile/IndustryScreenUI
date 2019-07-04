<template>
  <ECharts :options="options" :autoresize="true"></ECharts>
</template>

<script>
  import globalChartMixin from 'mixins/globalChartMixin'
  import gridChartMixin from 'mixins/gridChartMixin'
  import axisChartMixin from 'mixins/axisChartMixin'
  import colorChartMixin from 'mixins/colorChartMixin'
  import tooltipChartMixin from 'mixins/tooltipChartMixin'
  import storage from "utils/storage"
  const chartColors = storage.get('tColors')
  import { getMaxValue, getMinValue, getColumnMaxValue } from 'constants/utils'
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/legendScroll'
  import 'echarts/lib/component/title'

  export default {
    name: 'barLineChart',
    components: { ECharts },
    mixins: [ globalChartMixin, axisChartMixin, gridChartMixin, colorChartMixin, tooltipChartMixin ],
    props: {
      chartData: {
        type: Object,
        default: () => {
          return {
            barLegendData: ['IP'],
            barSeriesData: [
              [12672, 19345, 18876, 10098]
            ],
            lineLegendData: ['IPV4'],
            lineSeriesData: [
              [16672, 14345, 19876, 22098]
            ],
            categoryData: ['IDC', 'IRCS', 'CDN', 'DNS']
          }
        }
      },
      colors: {
        type: Array,
        default: () => chartColors.bar.colors
      },
      barStack: {
        type: Boolean,
        default: false
      },
      barCategoryGap: {
        type: String,
        default: '40%'
      },
      barBorderRadius: {
        type: Array,
        default: () => [0, 0, 0, 0]
      },
      labelShow: {
        type: Boolean,
        default: false
      },
      barGradientShow: {
        type: Boolean,
        default: false
      },
      barGradientStartColors: {
        type: Array,
        default: () => chartColors.bar.gradualStart
      },
      barGradientEndColors: {
        type: Array,
        default: () => chartColors.bar.gradualEnd
      },
      barShadowShow: {
        type: Boolean,
        default: false
      },
      barShadowRadius: {
        type: Array,
        default: () => [0, 0, 0, 0]
      },
      barShadowColors: {
        type: String,
        default: chartColors.bar.shadow
      },
      smooth: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        chartName: '[柱状图模板]',
        startColors: this.barGradientStartColors,
        endColors: this.barGradientEndColors,
        currColors: []
      }
    },
    mounted() {
      this.createTplCode('BarChart')
    },
    watch: {
      chartData(newVal, oldVal) {
        this.refresh()
      },
      colors(newVal, oldVal) {
        this.refresh()
      },
      barStack(newVal, oldVal) {
        this.refresh()
      },
      barCategoryGap(newVal, oldVal) {
        this.refresh()
      },
      barBorderRadius(newVal, oldVal) {
        this.refresh()
      },
      barShadowRadius(newVal, oldVal) {
        this.refresh()
      },
      labelShow(newVal, oldVal) {
        this.refresh()
      },
      barGradientShow(newVal, oldVal) {
        this.refresh()
      },
      barGradientStartColors(newVal, oldVal) {
        this.startColors = newVal
        this.refresh()
      },
      barGradientEndColors(newVal, oldVal) {
        this.endColors = newVal
        this.refresh()
      },
      barShadowShow(newVal, oldVal) {
        this.refresh()
      },
      barShadowColors(newVal, oldVal) {
        this.refresh()
      },
      smooth(newVal, oldVal) {
        this.refresh()
      },
    },
    methods: {
      setOptions() {
        let [ barLegendData, barSeriesData, categoryData, lineLegendData, lineSeriesData ] = [ this.chartData.barLegendData, this.chartData.barSeriesData, this.chartData.categoryData, this.chartData.lineLegendData, this.chartData.lineSeriesData ]
        let [ seriesLabelPosition, seriesLabelShow, series, maxbarSeriesData ] = [ 'inside', false, [], [] ]
        let [ maxValue, minValue ] = [ 0, 0 ]
        let [ barCategoryGap, barStack ] = [ this.barCategoryGap, this.barStack ]
        let legendData = barLegendData.concat(lineLegendData)
        let barLength = barLegendData.length

        if (this.barStack) {
          if (this.labelShow) {
            seriesLabelShow = true
            this.xAxisValue
              ? (seriesLabelPosition = 'insideRight')
              : (seriesLabelPosition = 'insideTop')
          }
          if (this.barShadowShow) {
            if (barLegendData.length !== 1) {
              barCategoryGap = '0%'
              barStack = true
            }
          }
        }

        if (barLegendData && barLegendData.length !== 0) {
          barLegendData.forEach((item, index) => {
            series.push({
              name: item,
              type: 'bar',
              barCategoryGap: barCategoryGap,
              label: {
                normal: {
                  show: seriesLabelShow,
                  position: seriesLabelPosition
                }
              },
              itemStyle: {
                normal: {
                  barBorderRadius: this.barBorderRadius,
                  color: this.colors[index]
                }
              },
              stack: barStack,
              data: barSeriesData[index],
              barMaxWidth: '20'
            })
            if (this.barGradientShow) {
              this.initColors()
              series[index].itemStyle.normal = {
                barBorderRadius: this.barBorderRadius,
                color: this.currColors[index]
              }
            }
            maxValue = getMaxValue(barSeriesData[index], maxValue)
            minValue = getMinValue(barSeriesData[index], minValue)
          })
        }
        if (this.barStack && this.barShadowShow) {
          if (barLegendData.length !== 1) {
            maxValue = getColumnMaxValue(barSeriesData)
          }
          for (var i = 0; i < categoryData.length; i++) {
            maxbarSeriesData.push(maxValue + 20)
          }
          series.push({
            name: '阴影',
            type: 'bar',
            barGap: '-100%',
            z: 0,
            label: {
              normal: {
                show: seriesLabelShow,
                position: seriesLabelPosition
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: this.barShadowRadius,
                color: this.barShadowColors
              }
            },
            data: maxbarSeriesData,
            barMaxWidth: '20'
          })
        }
        if (lineLegendData && lineLegendData.length !== 0) {
          lineLegendData.forEach((item, index) => {
            series.push({
              name: item,
              type: 'line',
              smooth: this.smooth,
              data: lineSeriesData[index],
              itemStyle: {
                normal: {
                  color: this.colors[barLength + index]
                }
              },
            })
          })
        }

        let barOpt = this.returnAxisOptions(legendData, categoryData, series, maxValue, minValue)
        return barOpt
      }
    }
  }
</script>

<style scoped></style>
