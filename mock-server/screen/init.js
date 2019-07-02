function menus() { // eslint-disable-line
  return [{
    'children': [
      {
        'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
        'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
        'isNewWindow': false,
        'isVisible': true,
        'menuCode': 'safeSate',
        'menuIcon': 'fa fa-edit',
        'menuName': '安全态势',
        'menuPath': '/safeSate',
        'homePage': true,
        'orderNum': 0,
        'childrenVisible': true,
        'children': [{
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/safeSate/country',
            'menuIcon': 'fa fa-edit',
            'menuName': '全国',
            'menuPath': '/safeSate/country',
            'homePage': false,
            'orderNum': 0
          }, {
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/safeSate/industry',
            'menuIcon': 'fa fa-edit',
            'menuName': '行业',
            'menuPath': '/safeSate/industry',
            'homePage': false,
            'orderNum': 1
          }, {
           'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/safeSate/huawei',
            'menuIcon': 'fa fa-edit',
            'menuName': '华为',
            'menuPath': '/safeSate/huawei',
            'homePage': false,
            'orderNum': 2
          }, {
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/safeSate/loophole',
            'menuIcon': 'fa fa-edit',
            'menuName': '漏洞分析',
            'menuPath': '/safeSate/loophole',
            'homePage': false,
            'orderNum': 3
          }, {
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/safeSate/riskDraw',
            'menuIcon': 'fa fa-edit',
            'menuName': '被攻击者风险画像',
            'menuPath': '/safeSate/riskDraw',
            'homePage': false,
            'orderNum': 4
          }, {
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/safeSate/attackSource',
            'menuIcon': 'fa fa-edit',
            'menuName': '攻击源国家行为',
            'menuPath': '/safeSate/attackSource',
            'homePage': false,
            'orderNum': 5
          }, {
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/safeSate/hydroelectricity',
            'menuIcon': 'fa fa-edit',
            'menuName': '水电气供应资产与安全分析',
            'menuPath': '/safeSate/hydroelectricity',
            'homePage': false,
            'orderNum': 6
          }, {
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/safeSate/cloud',
            'menuIcon': 'fa fa-edit',
            'menuName': '工业云服务平台资产与安全分析',
            'menuPath': '/safeSate/cloud',
            'homePage': false,
            'orderNum': 7
          }
        ]
      },
      {
        'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
        'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
        'isNewWindow': false,
        'isVisible': true,
        'menuCode': 'assetTrend',
        'menuIcon': 'fa fa-edit',
        'menuName': '资产态势',
        'menuPath': '/assetTrend',
        'homePage': false,
        'orderNum': 1,
        'childrenVisible': true,
        'children': [{
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/assetTrend/asset',
            'menuIcon': 'fa fa-edit',
            'menuName': '资产态势',
            'menuPath': '/assetTrend/asset',
            'homePage': false,
            'orderNum': 0
          }, {
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/assetTrend/cloud',
            'menuIcon': 'fa fa-edit',
            'menuName': '上云',
            'menuPath': '/assetTrend/cloud',
            'homePage': false,
            'orderNum': 1
          }
        ]
      },
      {
        'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
        'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
        'isNewWindow': false,
        'isVisible': true,
        'menuCode': '/ministry',
        'menuIcon': 'fa fa-edit',
        'menuName': '部省联动',
        'menuPath': '/ministry',
        'homePage': false,
        'orderNum': 2,
        'childrenVisible': true,
        'children': [{
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/ministry/linkage',
            'menuIcon': 'fa fa-edit',
            'menuName': '部省联动',
            'menuPath': '/ministry/linkage',
            'homePage': false,
            'orderNum': 0
          }, {
            'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
            'isNewWindow': false,
            'isVisible': true,
            'menuCode': '/ministry/disposal',
            'menuIcon': 'fa fa-edit',
            'menuName': '闭环处置',
            'menuPath': '/ministry/disposal',
            'homePage': false,
            'orderNum': 1
          }]
      }, {
        'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
        'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
        'isNewWindow': false,
        'isVisible': true,
        'menuCode': '/baseInfo',
        'menuIcon': 'fa fa-edit',
        'menuName': '基础信息库',
        'menuPath': '/baseInfo',
        'homePage': false,
        'orderNum': 3,
        'childrenVisible': true,
        'children': [{
          'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
          'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
          'isNewWindow': false,
          'isVisible': true,
          'menuCode': '/baseInfo/librarys',
          'menuIcon': 'fa fa-edit',
          'menuName': '基础信息库',
          'menuPath': '/baseInfo/librarys',
          'homePage': false,
          'orderNum': 0
        }, {
          'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
          'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
          'isNewWindow': false,
          'isVisible': true,
          'menuCode': '/baseInfo/company',
          'menuIcon': 'fa fa-edit',
          'menuName': '企业',
          'menuPath': '/baseInfo/company',
          'homePage': false,
          'orderNum': 1
        }]
      }
    ],
    'fatherId': Math.floor(Math.random() * 10000 + Math.random() * 10),
    'id': Math.floor(Math.random() * 10000 + Math.random() * 10),
    'isNewWindow': false,
    'isVisible': true,
    'menuCode': 'index',
    'menuIcon': 'fa fa-edit',
    'menuName': '工业互联网安全态势',
    'menuPath': '/',
    'orderNum': 0,
    'treeNodeType': 'Branch'
  }]
}
module.exports.menus = menus
