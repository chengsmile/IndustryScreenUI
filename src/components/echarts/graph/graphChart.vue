<template>
  <div class="full-block">
    <ECharts :options="options" auto-resize></ECharts>
  </div>
</template>

<script>
  import globalChartMixin from 'mixins/globalChartMixin'
  import ECharts from 'vue-echarts/components/ECharts'
  import chartColors from 'constants/chartColors'

  export default {
    name: 'graphChart',
    components: {ECharts},
    mixins: [globalChartMixin],
    props: {
      chartData: {
        type: Object,
        default: () => {
          return {
            legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            seriesData: [
              {id: '1', name: '直接访问1', category: '直接访问', value: 10},
              {id: '2', name: '邮件营销1', category: '邮件营销', value: 10},
              {id: '3', name: '联盟广告1', category: '联盟广告', value: 10},
              {id: '4', name: '视频广告1', category: '视频广告', value: 10},
              {id: '5', name: '搜索引擎1', category: '搜索引擎', value: 10},
              {id: '6', name: '直接访问2', category: '直接访问', value: 10},
              {id: '7', name: '邮件营销2', category: '邮件营销', value: 10},
              {id: '8', name: '联盟广告2', category: '联盟广告', value: 10},
              {id: '9', name: '视频广告2', category: '视频广告', value: 10},
              {id: '10', name: '搜索引擎2', category: '搜索引擎', value: 10},
              {id: '11', name: '直接访问3', category: '直接访问', value: 10},
              {id: '12', name: '邮件营销3', category: '邮件营销', value: 10},
              {id: '13', name: '联盟广告3', category: '联盟广告', value: 10},
              {id: '14', name: '视频广告3', category: '视频广告', value: 10},
              {id: '15', name: '搜索引擎3', category: '搜索引擎', value: 10}
            ],
            seriesLinkData: [
              {target: '2', source: '1'},
              {target: '3', source: '1'},
              {target: '4', source: '1'},
              {target: '5', source: '1'},
              {target: '6', source: '5'},
              {target: '10', source: '5'},
              {target: '12', source: '5'},
              {target: '14', source: '5'},
              {target: '13', source: '4'},
              {target: '15', source: '4'},
              {target: '9', source: '3'},
              {target: '11', source: '3'},
              {target: '7', source: '2'},
              {target: '8', source: '2'}
            ]
          }
        }
      },
      colors: {
        type: Array,
        default: () => chartColors.graph.colors
      },
      centerPoint: {
        type: String,
        default: '邮件营销1'
      },
      symbolType: {
        type: String,
        default: 'circle'
      },
      symbolSize: {
        type: [String, Array, Number],
        default: '50'
      },
      graphLineColor: {
        type: String,
        default: chartColors.graph.line
      },
      graphTextColor: {
        type: String,
        default: chartColors.graph.text
      },
      setItemColor: {
        type: Boolean,
        default: true
      },
      symbolImage: {
        type: Array,
        default: () => [
          require('assets/img/star1.png'),
          require('assets/img/star2.png'),
          require('assets/img/star3.png'),
          require('assets/img/star4.png'),
          require('assets/img/star5.png'),
          require('assets/img/star6.png')
        ]
      }
    },
    data() {
      return {
        chartName: '[关系图模板]'
      }
    },
    mounted() {
      this.createTplCode('GraphChart')
    },
    watch: {
      chartData(newVal, oldVal) {
        console.log(`${this.chartName}chartData[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      colors(newVal, oldVal) {
        console.log(`${this.chartName}colors[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      centerPoint(newVal, oldVal) {
        console.log(`${this.chartName}centerPoint[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      symbolType(newVal, oldVal) {
        console.log(`${this.chartName}symbolType[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      symbolSize(newVal, oldVal) {
        console.log(`${this.chartName}symbolSize[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      symbolImage(newVal, oldVal) {
        console.log(`${this.chartName}symbolImage[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      graphTextColor(newVal, oldVal) {
        console.log(`${this.chartName}graphTextColor[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      graphLineColor(newVal, oldVal) {
        console.log(`${this.chartName}graphLineColor[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      },
      setItemColor(newVal, oldVal) {
        console.log(`${this.chartName}setItemColor[新值:${this.newVal};旧值:${this.oldVal}]`)
        this.refresh()
      }
    },
    methods: {
      setOptions() {
        let that = this
        let [seriesData, seriesLinkData, _categoriesData, legendData] = [this.chartData.seriesData, this.chartData.seriesLinkData, this.chartData.legendData, []]
        let categoriesData = []
        if (_categoriesData && _categoriesData.length !== 0) {
          _categoriesData.map(function(a, i) {
            legendData.push({
              // name: a.name,
              name: a,
              icon: that.symbolType === 'image' ? `image://${that.symbolImage[i]}` : that.symbolType
            })
            categoriesData.push({
              name: a
            })
          })
          seriesData.map(s => {
            const index = _categoriesData.indexOf(s.category)
            s.symbol = that.symbolType === 'image' ? `image://${this.symbolImage[index]}` : that.symbolType
          })
        }
        
        let graphOpts = {
          color: this.colors,
          tooltip: { show: false },
          legend: [
            {
              ...this.legendOpt(
                this.legendLeft,
                this.legendTop,
                this.legendRight,
                this.legendBottom,
                this.legendType,
                this.legendOrient
              ),
              show: this.legendShow,
              textStyle: {
                color: this.legendTextColor
              },
              data: legendData
            }
          ],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          animation: true,
          series: [
            {
              type: 'graph',
              layout: 'force',
              symbol: this.symbolType,
              symbolSize: this.symbolSize,
              roam: true, //禁止用鼠标滚轮缩小放大效果
              focusNodeAdjacency: true, //划过只显示对应关系
              lineStyle: {
                normal: {
                  opacity: 1,
                  width: 1,
                  curveness: 0.3,
                  color: this.graphLineColor
                }
              },
              // 圆圈内的文字
              label: {
                normal: {
                  show: true,
                  color: this.graphTextColor,
                  formatter: function(params) {
                    return params.name
                  },
                  position: this.symbolType === 'image' ? 'bottom' : 'inside'
                }
              },
              emphasis: {
                label: {
                  show: false
                }
              },
              force: {
                repulsion: 350
              },
              data: seriesData,
              categories: categoriesData,
              links: seriesLinkData
            }
          ]
        }
        return graphOpts
      }
    }
  }
</script>

<style scoped>

</style>
