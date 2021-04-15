// custom-tab-bar/index.js
// 获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPhoneX: false,
    selected: 0,
    hide: false,
    list: [
      {
        "showRedDot": false,
        "showBadge": false,
        "pagePath": "pages/index/index",
        "iconPath": "/assets/home@2x.png",
        "selectedIconPath": "/assets/homeActive@2x.png"
      },
      {
        "pagePath": "pages/login/login",
        "iconPath": "/assets/piece@2x.png",
        "selectedIconPath": "/assets/pieceActive@2x.png"
      },
      {
        "pagePath": "pages/my/my",
        "iconPath": "/assets/my@2x.png",
        "selectedIconPath": "/assets/myActive@2x.png"
      }
    ]
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
    this.setData({
      isPhoneX: app.globalData.device.isPhoneX
    })
  },
  methods: {
    switch (e) {
      const data = e.currenTarget.dataset;
      console.log("tabBar参数：", data);
      
    }
  }
})