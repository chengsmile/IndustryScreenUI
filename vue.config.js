const path = require('path')
let genRouter = require('./build/genRouter')
const getAllMockData = require('./mock-server/index').getAllMockData
const devServer = require('./build/devServer.config').dev
genRouter.exec()
//项目启动获取所有mock接口返回的数据
getAllMockData()

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        api: '@/api',
        components: '@/components',
        constants: '@/constants',
        layouts: '@/views/layouts',
        views: '@/views',
        utils: '@/utils',
        mixins: '@/mixins',
        mock: path.resolve(__dirname, './mock-server')
      }
    }
  },
  devServer: {
    port: 9001, // 端口号
    open: true, //配置自动启动浏览器
    ...devServer
    // before: app => {
    //   require('./mock-server')(app, devServer.proxy)
    // }
  },
  transpileDependencies: ['vue-echarts', 'resize-detector']
}
