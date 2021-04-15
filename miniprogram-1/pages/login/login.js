// index.js
// 获取应用实例
const app = getApp()
const Util = require('../../utils/util')

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    signature: '',
    rawData: '',
    encryptedData: '',
    iv: ''
  },
  // 事件处理函数
  // 微信快捷登录
  wxLogin() {
    // Util.Request({
    //   method: 'POST',
    //   url: app.globalData.test + "/wxApp/codeLogin/1.0",
    //   data: {
    //     code: app.globalData.wxCode
    //   },
    // }).then(res => {
    //   console.log(res)
    // }).catch((error) => {
    //   console.log(error)
    // })
    wx.getUserProfile({
      desc: '获取用户信息登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          signature: res.signature,
          rawData: res.rawData,
          encryptedData: res.encryptedData,
          iv: res.iv
        })
        // 微信一键登录
        this.wxKeyLogin();
      }
    })
  },
  // 一键登录方法
  wxKeyLogin() {
    Util.Request({
      method: 'POST',
      url: app.globalData.test + "/wxApp/oneKeyLogin/1.0",
      data: {
        code: app.globalData.wxCode,
        signature: this.data.signature,
        rawData: this.data.rawData,
        encryptedData: this.data.encryptedData,
        iv: this.data.iv
      },
    }).then(res => {
      console.log(res)
    }).catch((error) => {
      console.log(error);
    })
  },
  onLoad() {
    // 修改头部导航
    wx.setNavigationBarTitle({
      title: '登录'
    })
  },
  // 手机号登录
  phoneLogin() {
    wx.navigateTo({
      url: '../login/phoneLogin'
    })
  },
})
