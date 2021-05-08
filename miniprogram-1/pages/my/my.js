// pages/my/my.js
// 获取常用变量 app
const app = getApp()
// 引入util.js 用于请求方法处理等
const util = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImage: '/assets/defaultAvatar@2x.png',
    login: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 修改头部导航
    wx.setNavigationBarTitle({
      title: '我的',
    }),
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#4477FF',
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
    // 底部自定义导航 index设置
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  // 获取用户手机号码用于登录
  getPhoneNumber: (res) => {
    console.log(res)
    util.Request({
      method: 'POST',
      url: app.globalData.test + "/wxApp/oneKeyLogin/1.0",
      data: {
        code: app.globalData.wxCode,
        // signature: this.data.signature,
        // rawData: this.data.rawData,
        encryptedData: res.detail.encryptedData,
        iv: res.detail.iv
      },
    }).then(res => {
      console.log(res)
    }).catch((error) => {
      console.log(error);
    })
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