import Mock from 'mockjs'

export const queryList = Mock.mock({
  'rows|30-55': [{
    domain: '@domain',
    ip: '@ip',
    name: '@cname',
    'type|0-4': 0,
    'countryIcon|1': ['iconicon_CNzhongguo', 'iconicon_CAjianada', 'iconicon_JPriben', 'iconicon_KRhanguo', 'iconicon_USmeiguo', 'iconicon_UKyingguo'],
    'country|1': ['中国', '加拿大', '日本', '韩国', '美国', '英国'],
    currdate: '@datetime'
  }]
})
