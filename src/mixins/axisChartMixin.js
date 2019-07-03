// import chartColors from 'constants/chartColors'
import echarts from 'echarts'
import storage from "utils/storage"
const chartColors = storage.get('tColors')
export default {
  props: {
    rotate: {
      type: Number,
      default: 0
    },
    xAxisValue: {
      type: Boolean,
      default: false
    },
    axisType: {
      type: String,
      default: 'value'
    },
    logBase: {
      type: Number,
      default: 10
    },
    xAxisTickShow: {
      type: Boolean,
      default: true
    },
    yAxisTickShow: {
      type: Boolean,
      default: true
    },
    xAxisLineShow: {
      type: Boolean,
      default: true
    },
    yAxisLineShow: {
      type: Boolean,
      default: true
    },
    axisLineSymbol: {
      type: Array,
      default: () => ['none', 'arrow']
    },
    axisLineColor: {
      type: String,
      default: chartColors.axis.line
    },
    axisLabelColor: {
      type: String,
      default: chartColors.axis.label
    },
    xSplitLineShow: {
      type: Boolean,
      default: false
    },
    ySplitLineShow: {
      type: Boolean,
      default: false
    },
    splitLineType: {
      type: String,
      default: 'dotted'
    },
    axisSplitLineColor: {
      type: String,
      default: chartColors.axis.splitLine
    },
    labelLimit: {
      type: Boolean,
      default: false
    },
    labelLimitWidth: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {}
  },
  watch: {
    rotate(newVal, oldVal) {
      // console.log(`${this.chartName}rotate[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    xAxisValue(newVal, oldVal) {
      // console.log(`${this.chartName}xAxisValue[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisType(newVal, oldVal) {
      // console.log(`${this.chartName}axisType[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    logBase(newVal, oldVal) {
      // console.log(`${this.chartName}logBase[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    xAxisTickShow(newVal, oldVal) {
      // console.log(`${this.chartName}xAxisTickShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    yAxisTickShow(newVal, oldVal) {
      // console.log(`${this.chartName}yAxisTickShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    xAxisLineShow(newVal, oldVal) {
      // console.log(`${this.chartName}xAxisLineShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    yAxisLineShow(newVal, oldVal) {
      // console.log(`${this.chartName}yAxisLineShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisLineSymbol(newVal, oldVal) {
      // console.log(`${this.chartName}axisLineSymbol[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisLineColor(newVal, oldVal) {
      // console.log(`${this.chartName}axisLineColor[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisLabelColor(newVal, oldVal) {
      // console.log(`${this.chartName}axisLabelColor[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    xSplitLineShow(newVal, oldVal) {
      // console.log(`${this.chartName}xSplitLineShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    ySplitLineShow(newVal, oldVal) {
      // console.log(`${this.chartName}ySplitLineShow[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    splitLineType(newVal, oldVal) {
      // console.log(`${this.chartName}splitLineType[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    axisSplitLineColor(newVal, oldVal) {
      // console.log(`${this.chartName}axisSplitLineColor[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    labelLimit(newVal, oldVal) {
      // console.log(`${this.chartName}labelLimit[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    },
    labelLimitWidth(newVal, oldVal) {
      // console.log(`${this.chartName}labelLimitWidth[新值:${this.newVal};旧值:${this.oldVal}]`)
      this.refresh()
    }
  },
  methods: {
    axisOpt() {
      let [xAxisType, yAxisType] = ['', '']
      if (this.xAxisValue) {
        xAxisType = this.axisType
        yAxisType = 'category'
      } else {
        xAxisType = 'category'
        yAxisType = this.axisType
      }
      return {
        xAxis: {
          type: xAxisType,
          splitLine: {
            show: this.xSplitLineShow,
            lineStyle: {
              width: 1,
              type: this.splitLineType,
              color: this.axisSplitLineColor
            }
          },
          axisTick: {
            show: this.xAxisLineShow && this.xAxisTickShow
          },
          axisLine: {
            show: this.xAxisLineShow,
            lineStyle: {
              width: 1,
              color: this.axisLineColor
            },
            symbol: this.axisLineSymbol
          },
          axisLabel: {
            show: true,
            color: this.axisLabelColor,
            rotate: this.rotate
          }
        },
        yAxis: {
          type: yAxisType,
          splitLine: {
            show: this.ySplitLineShow,
            lineStyle: {
              width: 1,
              type: this.splitLineType,
              color: this.axisSplitLineColor
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: this.axisLabelColor
            }
          },
          axisTick: {
            show: this.yAxisLineShow && this.yAxisTickShow
          },
          axisLine: {
            show: this.yAxisLineShow,
            lineStyle: {
              width: 1,
              color: this.axisLineColor
            },
            symbol: this.axisLineSymbol
          }
        }
      }
    },
    axisValueOpt(option, maxValue, minValue) {
      if (maxValue > 100000000 || minValue < -100000000) {
        option.name = '亿'
        option.axisLabel.formatter = (value) => {
          return value / 100000000
        }
      } else if (maxValue > 10000 || minValue < -10000) {
        option.name = '万'
        option.axisLabel.formatter = (value) => {
          return value / 10000
        }
      }
    },
    returnAxisOptions(legendData, categoryData, series, maxValue, minValue) {
      let chartOpts = {
        color: this.colors,
        tooltip: {
          ...this.tooltipOpt()
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
        grid: {
          ...this.gridOpt(),
          containLabel: true
        },
        ...this.axisOpt(),
        series: series
      }

      if (this.xAxisValue) {
        chartOpts.yAxis.data = categoryData
        chartOpts.yAxis.axisLabel.interval = 0
        if (this.labelLimit) {
          chartOpts.yAxis.axisLabel.formatter = name => {
            return echarts.format.truncateText(name, this.labelLimitWidth)
          }
        }
      } else {
        chartOpts.xAxis.data = categoryData
        chartOpts.xAxis.axisLabel.interval = 0
        if (this.labelLimit) {
          chartOpts.xAxis.axisLabel.formatter = name => {
            return echarts.format.truncateText(name, this.labelLimitWidth)
          }
        }
      }

      if (this.axisType === 'log') {
        this.xAxisValue ?
          (chartOpts.xAxis.logBase = this.logBase) :
          (chartOpts.yAxis.logBase = this.logBase)
      }
      // console.log(this.logBase, '=====this.logBase=====')
      // 数值过大，添加相应单位
      if (maxValue > 10000 || minValue < -10000) {
        //添加单位
        if (this.xAxisValue) {
          this.axisValueOpt(chartOpts.xAxis, maxValue, minValue)
        } else {
          this.axisValueOpt(chartOpts.yAxis, maxValue, minValue)
        }
      }

      return chartOpts
    }
  }
}
