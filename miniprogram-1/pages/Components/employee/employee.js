// pages/Components/employee/employee.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 用户服务协议
    employee() {
      wx.navigateTo({
        url: '../webView/employee?url=https://nprivacy.tticar.com/ttsd/employee.html'
      })
    },
  }
})
