// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImage: '/assets/defaultAvatar@2x.png',
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