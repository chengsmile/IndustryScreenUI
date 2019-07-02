import { Message } from 'element-ui'

export function title(title) {
  title = title || '****系统'
  window.document.title = title
}
/**
 * async/await catch 错误
 * @param {Promise} promise
 * @param {String} errTxt
 * @return {Promise}
 */
export function asyncTo(promise, errTxt) {
  return promise
    .then(data => [null, data])
    .catch(err => {
      err = errTxt || '请求失败'
      return [err, undefined]
    })
}
/**
 * 睡眠函数
 * @param {number} time
 */
export const sleep = time => new Promise(resolve => setTimeout(resolve, time))

export function simpleAsyncTo(promise, errTxt) {
  return promise
    .then(data => {
      // 如果没有
      if (data.success === true) {
        return data
      } else {
        errCb(data.returnModel || errTxt)
        return null
      }
    })
    .catch(err => {
      process.env.NODE_ENV === 'development' && console.error(err)
      errCb('请求失败')
      return null
    })
}

/**
 * 处理报错
 * @param {string} msg
 */
export const errCb = msg => {
  process.env.NODE_ENV === 'development' && console.error(msg)
  Message.error({
    showClose: true,
    message: msg
  })
}

// 防抖函数
// 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时
export function debounce(fn, delay = 1000) {
  let timer = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    const context = this
    timer = setTimeout(_ => {
      fn.apply(context, arguments)
    }, delay)
  }
}

// 节流函数：当持续触发事件时，保证一定时间段内只调用一次事件处理函数
export function throttle(fn, delay = 1000) {
  let timer = null
  let start = Date.now()
  return function () {
    const cur = Date.now()
    const wait = delay - (cur - start)
    const context = this
    clearTimeout(timer)
    if (wait <= 0) {
      fn.aplly(context, arguments)
      start = Date.now()
    } else {
      timer = setTimeout(_ => {
        fn.apply(context, arguments)
      }, delay)
    }
  }
}