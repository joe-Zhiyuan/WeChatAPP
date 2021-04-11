// pages/index/phoneLogin.js
// 声明工具类
const Util = require('../../utils/util')
const App = getApp()
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
  bindPhoneInput(e) { // 获取输入手机号
    this.setData({
      phoneInput: e.detail.value
    })
  },
  bindKeyInput(e) { // 获取输入验证码
    this.setData({
      keyInput: e.detail.value
    })
  },
  smsCode() { // 获取验证码
    // wx.login({ // 获取微信code
    //   success: res => {
    //     console.log(res)
    //     this.data.wxCode = res.code;
    //   }
    // })
    let phoneInput = this.data.phoneInput;
    if (phoneInput && phoneInput.length == 11) {
      Util.Request({
        method: 'POST',
        url: App.globalData.test + "/ttsd/wxApp/sms/1.0",
        data: {
          phone: this.data.phoneInput
        },
      }).then((res) => {
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
  phoneLogin() {
    Util.Request({
      method: 'POST',
      url: App.globalData.test + "/ttsd/wxApp/smslogin/1.0",
      data: {
        code: App.globalData.wxCode,
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