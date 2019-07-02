'use strict'
const frontMockUrl = 'http://172.31.134.7:9090/mock/47'
const targetUrl = 'http://172.31.134.7:9090/mock/47'
const targetPort = 9001
const baseUrl = ''//虚拟的baseUrl，不是api的url已有的前缀
const apiPrefix = ['/mobileApp']//api的url已有的前缀
let proxyTable = {}
if(baseUrl) {
  proxyTable[baseUrl] = {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
      [`^${baseUrl}`]: ''
    }
  }
}else{
  apiPrefix.forEach(item => {
    proxyTable[item] = {
      target: targetUrl,
      changeOrigin: true
    }
  })
}

module.exports = {
  frontMockUrl,
  baseUrl,
  dev: {
    port: targetPort,
    proxy: {
      ...proxyTable
    }
  }
}