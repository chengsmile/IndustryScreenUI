<template>
  <ECharts :options="options" :autoresize="true"></ECharts>
</template>

<script>
  import globalChartMixin from 'mixins/globalChartMixin'
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/legendScroll'
  import 'echarts/lib/component/title'
  import storage from "utils/storage"
  const chartColors = storage.get('tColors')
  export default {
    name: 'pieChart',
    components: { ECharts },
    mixins: [ globalChartMixin ],
    props: {
      chartData: {
        type: Object,
        default: () => {
          return {
            legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            seriesData: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
            ]
          }
        }
      },
      colors: {
        type: Array,
        default: () => chartColors.pie.colors
      },
      pieName: {
        type: String,
        default: '分布情况'
      },
      seriesLabelShow: {
        type: Boolean,
        default: false
      },
      pieAutoPlay: {
        type: Boolean,
        default: false
      },
      center: {
        type: Array,
        default: () => ['50%', '50%']
      },
      radius: {
        type: Array,
        default: () => ['40%', '65%']
      },
      showPercent: {
        type: Boolean,
        default: false
      },
      pieAutoPlayNumColor: {
        type: String,
        default: chartColors.pie.autoPlayNum
      },
      pieAutoPlayNumFontSize: {
        type: String,
        default: '22'
      },
      pieAutoPlayNumFontWeight: {
        type: String,
        default: 'bold'
      },
      pieAutoPlayTextColor: {
        type: String,
        default: chartColors.pie.autoPlayText
      },
      pieAutoPlayTextFontSize: {
        type: String,
        default: '14'
      },
      pieAutoPlayTextFontWeight: {
        type: String,
        default: 'bold'
      },
      showRatio: {
        type: Boolean,
        default: true
      },
      seriesLabelEmphasisShow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        chartName: '[饼图模板]',
        timeFlag: 0
      }
    },
    mounted() {
    },
    watch: {
      chartData(newVal, oldVal) {
        this.refresh()
      },
      colors(newVal, oldVal) {
        this.refresh()
      },
      pieName(newVal, oldVal) {
        this.refresh()
      },
      seriesLabelShow(newVal, oldVal) {
        this.refresh()
      },
      pieAutoPlay(newVal, oldVal) {
        this.refresh()
      },
      center(newVal, oldVal) {
        this.refresh()
      },
      radius(newVal, oldVal) {
        this.refresh()
      },
      showPercent(newVal, oldVal) {
        this.refresh()
      },
      pieAutoPlayNumColor(newVal, oldVal) {
        this.refresh()
      },
      pieAutoPlayNumFontSize(newVal, oldVal) {
        this.refresh()
      },
      pieAutoPlayNumFontWeight(newVal, oldVal) {
        this.refresh()
      },
      pieAutoPlayTextColor(newVal, oldVal) {
        this.refresh()
      },
      pieAutoPlayTextFontSize(newVal, oldVal) {
        this.refresh()
      },
      pieAutoPlayTextFontWeight(newVal, oldVal) {
        this.refresh()
      },
      showRatio(newVal, oldVal) {
        this.refresh()
      },
      seriesLabelEmphasisShow(newVal, oldVal) {
        this.refresh()
      }
    },
    methods: {
      refreshCallback() {
        if (this.pieAutoPlay) {
          this.startPieAutoPlay(this.chartData.seriesData)
        }
      },
      startPieAutoPlay(data) {
        let pieIndex = 0
        let allNum = 0
        for (let a = 0; a < data.length; a++) {
          allNum += parseFloat(data[a].value)
        }
        clearInterval(this.timeFlag)
        this.timeFlag = setInterval(() => {
          if (pieIndex > data.length - 1) {
            pieIndex = 0
          }
          for (let i = 0; i < data.length; i++) {
            data[i].selected = false
          }
          data[pieIndex].selected = true
          data.splice(pieIndex, 1, data[pieIndex])
          if (this.showPercent) {
            this.options.series[0].data[0].label.normal.formatter = (parseFloat(this.options.series[1].data[pieIndex].value) / allNum * 100).toFixed(1) + '%'
          } else {
            this.options.series[0].data[0].label.normal.formatter = '\n \n' + parseFloat(this.options.series[1].data[pieIndex].value).toFixed(0)
          }
          this.options.series[0].data[1].label.normal.formatter = this.options.series[1].data[pieIndex].name
          pieIndex++
        }, 2000)
      },
      setOptions() {
        let [ legendData, seriesData ] = [ this.chartData.legendData, this.chartData.seriesData ]
        let [ seriesLabelPos, seriesLabelEmphasis ] = [ '', true ]

        if (this.seriesLabelShow) {
          seriesLabelPos = 'outside'
        } else {
          seriesLabelPos = 'center'
        }
        if (this.pieAutoPlay) {
          seriesLabelEmphasis = false
        } else {
          this.seriesLabelEmphasisShow
            ? (seriesLabelEmphasis = true)
            : (seriesLabelEmphasis = false)
        }

        let pieOpts = {
          color: this.colors,
          backgroundColor: 'transparent',
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            ...this.legendOpt(),
            show: this.legendShow,
            data: legendData,
            textStyle: {
              color: this.legendTextColor
            },
            pageTextStyle: {
              color: this.legendPageTextColor
            }
          },
          series: [
            {
              name: '',
              type: 'pie',
              hoverAnimation: false,
              radius: [200, 200],
              center: ['50%', '43%'],
              label: {
                normal: {
                  position: 'center'
                }
              },
              data: [
                {
                  value: 0,
                  tooltip: {
                    show: false
                  },
                  label: {
                    normal: {
                      formatter: '',
                      textStyle: {
                        color: this.pieAutoPlayNumColor,
                        fontSize: this.pieAutoPlayNumFontSize,
                        fontWeight: this.pieAutoPlayNumFontWeight
                      }
                    }
                  }
                },
                {
                  tooltip: {
                    show: false
                  },
                  label: {
                    normal: {
                      formatter: '',
                      textStyle: {
                        color: this.pieAutoPlayTextColor,
                        fontSize: this.pieAutoPlayTextFontSize,
                        fontWeight: this.pieAutoPlayTextFontWeight
                      }
                    }
                  }
                }
              ]
            },
            {
              name: this.pieName,
              type: 'pie',
              radius: this.radius,
              center: this.center,
              hoverAnimation: true,
              avoidLabelOverlap: false,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: chartColors.shadowColor
                }
              },
              label: {
                normal: {
                  show: this.seriesLabelShow,
                  position: seriesLabelPos,
                  formatter: this.showRatio ? '{b}\n{d}%' : '{b}'
                },
                emphasis: {
                  show: seriesLabelEmphasis,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                  }
                }
              },
              data: seriesData
            }
          ]
        }

        return pieOpts
      }
    }
  }
</script>

<style scoped></style>
