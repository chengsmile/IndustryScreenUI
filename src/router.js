const assetTrend_asset = _ => import(/* webpackChunkName: 'assetTrend_asset' */ 'views/assetTrend/asset/index.vue')
const assetTrend_cloud = _ => import(/* webpackChunkName: 'assetTrend_cloud' */ 'views/assetTrend/cloud/index.vue')
const baseInfo_company = _ => import(/* webpackChunkName: 'baseInfo_company' */ 'views/baseInfo/company/index.vue')
const baseInfo_librarys = _ => import(/* webpackChunkName: 'baseInfo_librarys' */ 'views/baseInfo/librarys/index.vue')
const layout = _ => import(/* webpackChunkName: 'layout' */ 'views/layout/index.vue')
const ministry_disposal = _ => import(/* webpackChunkName: 'ministry_disposal' */ 'views/ministry/disposal/index.vue')
const ministry_linkage = _ => import(/* webpackChunkName: 'ministry_linkage' */ 'views/ministry/linkage/index.vue')
const safeSate_attackSource = _ => import(/* webpackChunkName: 'safeSate_attackSource' */ 'views/safeSate/attackSource/index.vue')
const safeSate_cloud = _ => import(/* webpackChunkName: 'safeSate_cloud' */ 'views/safeSate/cloud/index.vue')
const safeSate_country = _ => import(/* webpackChunkName: 'safeSate_country' */ 'views/safeSate/country/index.vue')
const safeSate_huawei = _ => import(/* webpackChunkName: 'safeSate_huawei' */ 'views/safeSate/huawei/index.vue')
const safeSate_hydroelectricity = _ => import(/* webpackChunkName: 'safeSate_hydroelectricity' */ 'views/safeSate/hydroelectricity/index.vue')
const safeSate_industry = _ => import(/* webpackChunkName: 'safeSate_industry' */ 'views/safeSate/industry/index.vue')
const safeSate_loophole = _ => import(/* webpackChunkName: 'safeSate_loophole' */ 'views/safeSate/loophole/index.vue')
const safeSate_riskDraw = _ => import(/* webpackChunkName: 'safeSate_riskDraw' */ 'views/safeSate/riskDraw/index.vue')
const wrapperView = _ => import(/* webpackChunkName: 'wrapperView' */ 'views/wrapperView/index.vue')

export default {
  '/assetTrend/asset': assetTrend_asset,
  '/assetTrend/cloud': assetTrend_cloud,
  '/baseInfo/company': baseInfo_company,
  '/baseInfo/librarys': baseInfo_librarys,
  '/layout': layout,
  '/ministry/disposal': ministry_disposal,
  '/ministry/linkage': ministry_linkage,
  '/safeSate/attackSource': safeSate_attackSource,
  '/safeSate/cloud': safeSate_cloud,
  '/safeSate/country': safeSate_country,
  '/safeSate/huawei': safeSate_huawei,
  '/safeSate/hydroelectricity': safeSate_hydroelectricity,
  '/safeSate/industry': safeSate_industry,
  '/safeSate/loophole': safeSate_loophole,
  '/safeSate/riskDraw': safeSate_riskDraw,
  '/wrapperView': wrapperView
}