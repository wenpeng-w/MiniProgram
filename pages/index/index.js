//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    point: {
      latitude: '',
      longitude: '',
      address: ''
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getLocation({
      success: res => {
        this.setData({
          'point.latitude': res.latitude,
          'point.longitude': res.longitude,
          'point.address': res.accuracy
        })
      },
    })
  }
})
