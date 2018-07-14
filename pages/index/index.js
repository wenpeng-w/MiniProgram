//index.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js')
var qqmapsdk
//获取应用实例
const app = getApp()

Page({
  data: {
    country: '',
    city: '',
    userInfo: {}
  },
  onReady () {
    console.log('页面初始化完成')
    setTimeout(() => {
      wx.redirectTo({
        url: '../logs/logs'
      })
    }, 3000)
  },
  onLoad: function () {
    qqmapsdk = new QQMapWX({
      key: '*********' // 开发秘钥
    })
    // 获取用户位置
    wx.getLocation({
      success: res => {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            this.setData({
              'country': res.result.address_component.nation,
              'city': res.result.address_component.city.replace(/[市]+$/, '')
            })
          },
          fail: res => {
            console.log(res)
            // 获取用户基本信息
            wx.getUserInfo({
              lang: 'zh_CN',
              success: res => {
                console.log(res.userInfo)
                this.setData({
                  'userInfo': res.userInfo,
                  'country': res.userInfo.country,
                  'city': res.userInfo.province
                })
              }
            })
          }
        })
      },
    })
  }
})
