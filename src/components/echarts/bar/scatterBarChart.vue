<template>
  <ECharts :options="options" :autoresize="true"></ECharts>
</template>

<script>
import globalChartMixin from "mixins/globalChartMixin"
import gridChartMixin from "mixins/gridChartMixin"
import ECharts from "vue-echarts/components/ECharts"
import "echarts/lib/chart/bar"
import "echarts/lib/chart/scatter"
import "echarts/lib/component/tooltip"
import "echarts/lib/component/legend"
import "echarts/lib/component/legendScroll"
import "echarts/lib/component/title"
import storage from "utils/storage"
const chartColors = storage.get("tColors")

export default {
  name: "barChart",
  components: { ECharts },
  mixins: [globalChartMixin, gridChartMixin],
  props: {
    chartData: {
      type: Object,
      default: () => {
        return {
          seriesData: [6647, 7473, 8190, 8488, 9491, 11726, 12745, 13170, 21319, 24934],
          categoryData:  ["南坪", "工贸", "石桥铺", "沙坪坝", "嘉州路", "红旗河沟", "两路口", "观音桥", "光电园", "小什字"]
        }
      }
    },
    colors: {
      type: Array,
      default: () => chartColors.scatterBar.colors
    },
    axisLabelColor: {
      type: String,
      default: chartColors.axis.label
    },
    labelNumColor: {
      type: String,
      default: chartColors.scatterBar.label
    },
    symbolSize: {
      type: Number,
      default: 35
    },
    barWidth: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      chartName: "[柱状图模板]",
      circleData: []
    }
  },
  mounted() {
    this.createTplCode("BarChart")
  },
  watch: {
    chartData(newVal, oldVal) {
      this.refresh()
    },
    colors(newVal, oldVal) {
      this.refresh()
    },
    axisLabelColor(newVal, oldVal) {
      this.refresh()
    },
    labelNumColor(newVal, oldVal) {
      this.refresh()
    },
    symbolSize(newVal, oldVal) {
      this.refresh()
    },
    barWidth(newVal, oldVal) {
      this.refresh()
    },
  },
  methods: {
    setOptions() {
      const _this = this
      this.circleData = []
      this.chartData.seriesData.forEach(item => {
        this.circleData.push(0)
      })
      let options = {
        grid: {
          ...this.gridOpt(),
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: {
          axisTick: "none",
          axisLine: "none",
          offset: "20",
          axisLabel: {
            textStyle: {
              color: this.axisLabelColor,
              fontSize: "16"
            }
          },
          data: this.chartData.categoryData
        },
        series: [
          {
            name: "条",
            type: "bar",
            data: this.chartData.seriesData,
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: this.labelNumColor,
                  fontSize: "16"
                }
              }
            },
            barWidth: this.barWidth,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = _this.colors.length
                  return _this.colors[params.dataIndex % num]
                }
              }
            },
            z: 1
          },
          {
            name: "圆圈",
            type: "scatter",
            hoverAnimation: false,
            data: this.circleData,
            symbolSize: this.symbolSize,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = _this.colors.length
                  return _this.colors[params.dataIndex % num]
                },
                opacity: 1
              }
            },
            z: 2
          }
        ]
      }
      return options
    }
  }
}
</script>

<style scoped></style>
