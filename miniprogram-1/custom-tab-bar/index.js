// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    hide: false,
    list: [{
        "showRedDot": false,
        "showBadge": false,
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/home@2x.png",
        "selectedIconPath": "/assets/homeActive@2x.png"
      },
      {
        "pagePath": "/pages/login/login",
        "iconPath": "/assets/piece@2x.png",
        "selectedIconPath": "/assets/pieceActive@2x.png"
      },
      {
        "pagePath": "/pages/my/my",
        "iconPath": "/assets/my@2x.png",
        "selectedIconPath": "/assets/myActive@2x.png"
      }],

  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      wx.switchTab({
        url: data.path
      })
      this.setData({
        selected: data.index
      })
    },
  }

})