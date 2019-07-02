export const defaultLine = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': 'center',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#f8f8f8',
      'legendPageTextColor': '#666',
      'gridLeft': '',
      'gridTop': 30,
      'gridRight': '',
      'gridBottom': '',
      'rotate': 0,
      'xAxisValue': false,
      'axisType': 'value',
      'logBase': 10,
      'xAxisTickShow': true,
      'yAxisTickShow': true,
      'xAxisLineShow': true,
      'yAxisLineShow': true,
      'axisLineSymbol': ['none', 'arrow'],
      'axisLineColor': '#f8f8f8',
      'axisLabelColor': '#35e6ca',
      'xSplitLineShow': false,
      'ySplitLineShow': false,
      'splitLineType': 'dotted',
      'axisSplitLineColor': '#f8f8f8',
      'labelLimit': false,
      'labelLimitWidth': 100,
      'chartData': {
        'legendData': ['告警事件', '其他事件', '很多事件'],
        'seriesData': [
          [1432, 1568, 1125, 1359, 1654, 1852, 1523, 1369, 1459, 1854, 1635, 1364],
          [432, 568, 125, 359, 654, 852, 523, 369, 459, 854, 635, 364],
          [2432, 2568, 2125, 2359, 2654, 2852, 2523, 2369, 2459, 2854, 2635, 2364]
        ],
        'categoryData': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      'colors': ['rgba(86,196,249,1)', 'rgba(34,45,143,1)', 'rgba(213,82,84,1)', 'rgba(171,66,197,1)'],
      'smooth': true,
      'markLineAverage': false,
      'markLineAverageLabel': '平均值',
      'markLineColor': '#fff',
      'showLineArea': true,
      'areaStartColors': ['rgba(86,196,249,.2)', 'rgba(34,183,197,.2)', 'rgba(213,82,84,.2)', 'rgba(171,66,197,.2)'],
      'areaEndColors': ['rgba(86,196,249,0)', 'rgba(34,183,197,0)', 'rgba(213,82,84,0)', 'rgba(171,66,197,0)']
    }
  }
}

export const defaultBar = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': 'center',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#f8f8f8',
      'legendPageTextColor': '#f8f8f8',
      'gridLeft': '',
      'gridTop': 30,
      'gridRight': '',
      'gridBottom': '',
      'rotate': 0,
      'xAxisValue': false,
      'axisType': 'value',
      'logBase': 10,
      'xAxisTickShow': true,
      'yAxisTickShow': true,
      'xAxisLineShow': true,
      'yAxisLineShow': true,
      'axisLineSymbol': ['none', 'arrow'],
      'axisLineColor': '#f8f8f8',
      'axisLabelColor': '#35e6ca',
      'xSplitLineShow': false,
      'ySplitLineShow': false,
      'splitLineType': 'dotted',
      'axisSplitLineColor': '#f8f8f8',
      'labelLimit': false,
      'labelLimitWidth': 100,
      'chartData': {
        'legendData': ['IP', 'IPV4'],
        'seriesData': [
          [16672, 14345, 19876, 22098],
          [12672, 19345, 18876, 10098]
        ],
        'categoryData': ['IDC', 'IRCS', 'CDN', 'DNS']
      },
      'barGradientShow': true,
      'colors': ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53', '#EEDD78'],
      'barGradientStartColors': ['rgba(150,241,49,1)', 'rgba(235,36,199,1)', 'rgba(213,82,84,.2)', 'rgba(171,66,197,.2)'],
      'barGradientEndColors': ['rgba(126,223,57,0.5)', 'rgba(221,45,197,0.5)', 'rgba(213,82,84,0.1)', 'rgba(171,66,197,0.1)'],
      'barStack': false,
      'barCategoryGap': '40%',
      'barBorderRadius': [20, 20, 0, 0],
      'labelShow': false
    }
  }
}

export const defaultPie = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'scroll',
      'legendLeft': 5,
      'legendTop': '',
      'legendRight': 5,
      'legendBottom': '',
      'legendTextColor': '#f8f8f8',
      'legendPageTextColor': '#f8f8f8',
      'chartData': {
        'legendData': ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        'seriesData': [
          {'value': 335, 'name': '直接访问'},
          {'value': 310, 'name': '邮件营销'},
          {'value': 234, 'name': '联盟广告'},
          {'value': 135, 'name': '视频广告'},
          {'value': 1548, 'name': '搜索引擎'}
        ]
      },
      'colors': ['#da5df9', '#fbee64', '#fe9464', '#35e6ca', '#07dcfe', '#389aff', '#6e6aff', '#ff759f', '#2edd8e', '#9ea3ff', '#ff455a', '#b09d63'],
      'pieName': '分布情况',
      'seriesLabelShow': false,
      'pieAutoPlay': true,
      'center': ['50%', '50%'],
      'radius': ['55%', '70%'],
      'showPercent': false,
      'pieAutoPlayNumColor': '#20fd07',
      'pieAutoPlayNumFontSize': '22',
      'pieAutoPlayNumFontWeight': 'bold',
      'pieAutoPlayTextColor': '#f8f8f8',
      'pieAutoPlayTextFontSize': '14',
      'pieAutoPlayTextFontWeight': 'bold',
      'showRatio': true,
      'seriesLabelEmphasisShow': true
    }
  }
}

export const defaultMap = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'chartData': {
        'seriesData': [{'name': '北京', 'value': 177}, {'name': '天津', 'value': 42}, {
          'name': '河北',
          'value': 102
        }, {'name': '山西', 'value': 81}, {'name': '内蒙古', 'value': 47}, {'name': '辽宁', 'value': 67}, {
          'name': '吉林',
          'value': 82
        }, {'name': '黑龙江', 'value': 66}, {'name': '上海', 'value': 24}, {'name': '江苏', 'value': 92}, {
          'name': '浙江',
          'value': 114
        }, {'name': '安徽', 'value': 109}, {'name': '福建', 'value': 116}, {'name': '江西', 'value': 91}, {
          'name': '山东',
          'value': 119
        }, {'name': '河南', 'value': 137}, {'name': '湖北', 'value': 116}, {'name': '湖南', 'value': 114}, {
          'name': '重庆',
          'value': 91
        }, {'name': '四川', 'value': 125}, {'name': '贵州', 'value': 62}, {'name': '云南', 'value': 83}, {
          'name': '西藏',
          'value': 9
        }, {'name': '陕西', 'value': 80}, {'name': '甘肃', 'value': 56}, {'name': '青海', 'value': 10}, {
          'name': '宁夏',
          'value': 18
        }, {'name': '新疆', 'value': 67}, {'name': '广东', 'value': 123}, {'name': '广西', 'value': 59}, {
          'name': '海南',
          'value': 14
        }]
      },
      'colors': ['rgba(0, 86, 235, 1)', '#2f8cff', '#4cb4ed', '#4ddffc', '#df3e22', '#2cfb0a'],
      'dataTitle': ['告警事件'],
      'tooltipFormatter': '告警事件',
      'mapType': 'china',
      'mapZoom': 1.1,
      'symbolSize': 50,
      'symbolOffset': ['0%', '0%'],
      'layoutCenter': ['52%', '45%'],
      'showTooltip': true
    }
  }
}

export const defaultLineMap = () => {
  return {
    chartParams: {
      // 'legendShow': true,
      // 'legendOrient': 'horizontal',
      // 'legendType': 'plain',
      // 'legendLeft': '',
      // 'legendTop': '',
      // 'legendRight': '',
      // 'legendBottom': '',
      // 'legendTextColor': '#000',
      'chartData': {
        'moveLineData': [
          [{ 'name': '湖北' }, { 'name': '北京', 'value': 95 }],
          [{ 'name': '湖北' }, { 'name': '广东', 'value': 90 }],
          [{ 'name': '湖北' }, { 'name': '上海', 'value': 80 }],
          [{ 'name': '湖北' }, { 'name': '西藏', 'value': 70 }]
        ]
      },
      // 'colors': ['rgba(0, 86, 235, 1)', '#2f8cff', '#4cb4ed', '#4ddffc', '#df3e22', 'rgba(255,255,255,1)'],
      'mapItemAreaColor': '#3CC7FF',
      'mapItemHoverareaColor': '#389BB7',
      'mapItemborderColor': '#389BB7',
      'mapLineColor': '#ffa022',
      'effectScatterItemColor': '#2856E9',
      'mapLabelColor': 'rgba(255,255,255,1)',
      // 'dataTitle': ['告警事件'],
      'tooltipFormatter': '告警事件',
      'mapType': 'china',
      'mapZoom': 1.1,
      'roam': true,
      'symbol': ['none', 'arrow'],
      'symbolSize': 10,
      'symbolOffset': ['0%', '0%'],
      'effectSymbol': 'arrow',
      'effectSymbolSize': 8,
      'geoSymbolShow': true,
      // 'geoSymbolSize': 0,
      'layoutCenter': ['52%', '45%'],
      'showTooltip': true,
      'mapLabelShow': false,
      'mapLabelEmphasisShow': true
    }
  }
}
export const defaultVisualMap = () => {
  return {
    chartParams: {
      // 'legendShow': true,
      // 'legendOrient': 'horizontal',
      // 'legendType': 'plain',
      // 'legendLeft': '',
      // 'legendTop': '',
      // 'legendRight': '',
      // 'legendBottom': '',
      // 'legendTextColor': '#000',
      'chartData': {
        'seriesData': [
          { 'name': '北京', 'value': 1253 },
          { 'name': '广东', 'value': 965 },
          { 'name': '上海', 'value': 732 },
          { 'name': '湖北', 'value': 655 },
          { 'name': '湖南', 'value': 523 },
          { 'name': '西藏', 'value': 501 },
          { 'name': '天津', 'value': 425 },
          { 'name': '四川', 'value': 412 },
          { 'name': '浙江', 'value': 365 }
        ]
      },
      // 'colors': ['rgba(0, 86, 235, 1)', '#2f8cff', '#4cb4ed', '#4ddffc', '#df3e22', 'rgba(255,255,255,1)'],
      'mapItemAreaColor': '#3CC7FF',
      'mapItemHoverareaColor': '#389BB7',
      'mapItemborderColor': '#389BB7',
      // 'mapLineColor': '#ffa022',
      // 'effectScatterItemColor': '#2856E9',
      'mapLabelColor': 'rgba(255,255,255,1)',
      // 'dataTitle': ['告警事件'],
      'tooltipFormatter': '告警事件',
      'mapType': 'china',
      'mapZoom': 1.1,
      // 'roam': true,
      // 'symbol': ['none', 'arrow'],
      // 'symbolSize': 10,
      // 'symbolOffset': ['0%', '0%'],
      // 'effectSymbol': 'arrow',
      // 'effectSymbolSize': 8,
      // 'geoSymbolShow': true,
      // 'geoSymbolSize': 0,
      'layoutCenter': ['52%', '45%'],
      'showTooltip': true,
      'mapLabelShow': false,
      'mapLabelEmphasisShow': true,
      'visualMapShow': true,
      'visualMapOrient': 'vertical',
      'visualMapAlign': 'auto',
      'visualMapLeft': 0,
      'visualMapRight': 'auto',
      'visualMapTop': 'auto',
      'visualMapBottom': 0,
      'visualMapMin': 0,
      'visualMapMax': 1200,
      'visualMapText': ['高', '低'],
      'visualMapTextColor': '#3CC7FF',
      'visualMapRangeColor': ['#F8E71C', '#D0021B']
    }
  }
}

export const defaultScatter = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'rotate': 0,
      'xAxisValue': false,
      'axisType': 'value',
      'axisSplitLineColor': '#31396c',
      'axisLineColor': '#4d5897',
      'labelLimit': false,
      'labelLimitWidth': 100,
      'axisLabelColor': '#000',
      'xSplitLineShow': false,
      'ySplitLineShow': false,
      'chartData': {
        legendData: ['传播数量统计'],
        axisTypeTitle: {x: '访问量', y: '单位时间'},
        seriesData: [[
          [133119620, 31, 'www.58wg.co/'],
          [69355780, 25, 'm.yiqixiegushi.com/'],
          [54617180, 29, 'api-laxin.1sapp.com/'],
          [51598260, 32, '7xiav1.com2.z0.glb.qiniucdn.com/'],
          [43583280, 22, 'an.res.taozuiredian.com/'],
          [40691743, 12, 'yd8.jianzhousc.com/'],
          [40186091, 22, 'cdn.voole.com:3580/mp4'],
          [33400235, 15, '527575.com/kj.html'],
          [4386543, 21, 'css.c7k7.com/'],
          [4384227, 30, 'www.244500.com/'],
          [4377613, 26, 'www.bturl.cc/'],
          [4362099, 24, 'baicizhan.qiniucdn.com/'],
          [4337705, 18, 'img.sique.com/']
        ]]
      },
      'colors': ['#3CC7FF', '#ff6600', '#ff0000', '#ffe400', '#ff6600']
    }
  }
}

export const defaultGauge = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'chartData': {'seriesData': [{'name': '覆盖率', 'value': 92}]},
      'colors': ['rgba(46, 101, 149, 1)', 'rgba(46, 101, 149, 0.8)', 'rgba(46, 101, 149, 0.4)', '#fd666d', '#67e0e3', '#37a2da'],
      'gaugeTitle': '仪表盘',
      'gaugeTitleColor': '#000',
      'detailTextShadowColor': '#000',
      'shadowColor': '#000',
      'detailColor': '#000'
    }
  }
}

export const defaultGraph = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'graphLineColor': '#4d5897',
      'graphTextColor': '#fff',
      'colors': ['#C23531', '#4f52dc', '#C78620', '#5a99eb', '#37a2da', '#6348d0'],
      'chartData': {
        'legendData': ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        'seriesData': [
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
        'seriesLinkData': [{'target': '2', 'source': '1'}, {'target': '3', 'source': '1'}, {
          'target': '4',
          'source': '1'
        }, {'target': '5', 'source': '1'}, {'target': '6', 'source': '5'}, {
          'target': '10',
          'source': '5'
        }, {'target': '12', 'source': '5'}, {'target': '14', 'source': '5'}, {
          'target': '13',
          'source': '4'
        }, {'target': '15', 'source': '4'}, {'target': '9', 'source': '3'}, {
          'target': '11',
          'source': '3'
        }, {'target': '7', 'source': '2'}, {'target': '8', 'source': '2'}]
      },
      'centerPoint': '邮件营销1',
      'symbolType': 'circle',
      'symbolSize': '50',
      'symbolImage': [
        require('assets/img/echarts/graph/star1.png'),
        require('assets/img/echarts/graph/star2.png'),
        require('assets/img/echarts/graph/star3.png'),
        require('assets/img/echarts/graph/star4.png'),
        require('assets/img/echarts/graph/star5.png'),
        require('assets/img/echarts/graph/star6.png')
      ],
      'setItemColor': true
    }
  }
}

export const defaultRadar = () => {
  return {
    chartParams: {
      'legendShow': true,
      'legendOrient': 'horizontal',
      'legendType': 'plain',
      'legendLeft': '',
      'legendTop': '',
      'legendRight': '',
      'legendBottom': '',
      'legendTextColor': '#000',
      'chartData': {
        legendData: ['北京', '上海'],
        indicatorData: [
          {
            name: '移动恶意程序事件',
            max: 1500
          },
          {
            name: '暗链',
            max: 1500
          },
          {
            name: '漏洞',
            max: 1500
          },
          {
            name: '钓鱼',
            max: 1500
          },
          {
            name: '篡改',
            max: 1500
          },
          {
            name: '挂马',
            max: 1500
          }
        ],
        seriesArrayData: [
          {
            seriesData: [
              [1036, 1458, 1290, 998, 1048, 1398],
              [236, 558, 490, 398, 148, 298]
            ]
          },
          {
            seriesData: [
              [566, 958, 290, 598, 848, 698],
              [1236, 1158, 1090, 1298, 1088, 1458]
            ]
          }
        ]
      },
      'colors': ['rgba(46, 101, 149, 1)', 'rgba(46, 101, 149, 0.8)', 'rgba(46, 101, 149, 0.4)', '#fd666d', '#67e0e3', '#37a2da'],
      'shape': 'polygon',
      'radius': 120,
      'splitNumber': 6, //每圈线条数
      'startAngle': 90, //图形开始的角度
      'center': ['50%', '50%'], //图形的位置
      'type': 'solid', //线条的样式
      'shadowBlur': 10, //阴影的宽度
      // 'shadowColor': '#000'
      'symbol': 'circle',
      'width': 1, //线条的宽度
      'opacity': 1 //线条的透明度
    }
  }
}

export const defaultSunburst = () => {
  return {
    chartParams: {
      'highlightPolicy': 'descendant',
      'radius': [0, '80%'],
      'sort': 'desc',
      'center': ['50%', '50%'], //旭日图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
      'colors': ['#fd666d', '#67e0e3', '#37a2da', 'rgba(46, 101, 149, 1)', 'rgba(46, 101, 149, 0.8)', 'rgba(46, 101, 149, 0.4)'],
      'rotate': 0,
      'textColor': '#fff',
      'downPlayShow': false,
      'emphasisShow': false,
      'chartData': {
        data: [
          {
            name: 'A',
            children: [
              {value: 3, name: 'Aa'},
              {value: 5, name: 'Ab'},
              {value: 8, name: 'Ac'}
            ]
          },
          {
            name: 'B',
            value: 8,
            children: [
              {name: 'Ba', value: 4},
              {name: 'Bb', value: 2}
            ]
          },
          {
            name: 'C',
            value: 3
          }
        ]
      }
    }
  }
}
