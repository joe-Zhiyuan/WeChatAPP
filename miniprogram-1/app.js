// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录 获取wxCode
    if (!this.globalData.wxCode && this.globalData.wxCode == '') {
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          this.globalData.wxCode = res.code;
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    wxCode: '',
    xClientId: 'TTSD_WX_XCX',
    formal: "https://oapi.tticar.com/ttsd", // 正式地址
    test: "https://tapi.tticar.com/ttsd", // 测试地址
  }
})
