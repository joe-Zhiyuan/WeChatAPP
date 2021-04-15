// pages/index/phoneLogin.js
// 声明工具类
const util = require('../../utils/util')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneInput: '',
    keyInput: '',
    smsText: '获取验证码',
    // wxCode: '', // 微信code
  },
  // 获取输入手机号
  bindPhoneInput(e) {
    this.setData({
      phoneInput: e.detail.value
    })
  },
  // 获取输入验证码
  bindKeyInput(e) {
    this.setData({
      keyInput: e.detail.value
    })
  },
  // 通过手机号获取验证码
  getSmsCode() {
    let phoneInput = this.data.phoneInput;
    if (phoneInput && phoneInput.length == 11) {
      util.Request({
        method: 'POST',
        url: app.globalData.test + "/wxApp/sms/1.0",
        data: {
          phone: this.data.phoneInput
        },
      }).then((res) => {
        let time = 61;
        console.log(time)
        let timer = setInterval(() => {
          time--;
          if (time <= 0) {
            clearInterval(timer);
            this.setData({
              smsText: "获取验证码"
            })
          } else {
            this.setData({
              smsText: time + "S"
            })
          }
        }, 1000)
        console.log("获取验证码成功！")
      }).catch((error) => {
        wx.showToast({
          title: '获取验证码出错，请联系管理员！',
          icon: 'none',
          duration: 500
        });
      })
    } else {
      wx.showToast({
        title: '请输入正确手机号！',
        icon: 'none',
        duration: 500
      });
    }
  },
  // 验证码登录
  phoneLogin() {
    util.Request({
      method: 'POST',
      url: app.globalData.test + "/wxApp/smslogin/1.0",
      data: {
        code: app.globalData.wxCode,
        // code: this.data.wxCode,
        phone: this.data.phoneInput,
        sms: this.data.keyInput
      },
    }).then((res) => {
      console.log(res)
    }).catch((error) => {
      wx.showToast({
        title: '登录出错，请联系管理员！',
        icon: 'none',
        duration: 500
      });
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 修改头部导航
    wx.setNavigationBarTitle({
      title: '登录'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})