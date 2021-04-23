const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * 请求方法
 */
const Request = function (config) {
  // 添加loading
  wx.showLoading({
    title: 'Loading',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      header: {
        'content-type': 'application/json',
        "X-Client-Id": getApp().globalData.xClientId,
        "Authorization": getApp().globalData.loginUserInfo ? getApp().globalData.loginUserInfo.token:'',
        "X-Passport-Id": getApp().globalData.loginUserInfo ? getApp().globalData.loginUserInfo.gid : '',
      },
      success: res => {
        wx.hideLoading({
          complete() {
            resolve(res)
          }
        })
      },
      fail: res => {
        reject(res)
      }
    })
  })
}

module.exports = {
  formatTime,
  Request
}
