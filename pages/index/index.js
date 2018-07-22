//index.js
const QQMapWX = require('../../libs/qqmap-wx-jssdk.js')
let qqmapsdk
//获取应用实例
const app = getApp()

Page({
  data: {
    country: '',
    city: '',
    hasLocation: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    qqmapsdk = new QQMapWX({
      key: '**************' // 开发秘钥
    })
    // 获取用户位置
    wx.getLocation({
      success: res => {
        this.setData({
          hasLocation: true
        })
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            this.setData({
              country: res.result.address_component.nation,
              city: res.result.address_component.city.replace(/[市]+$/, '')
            })
          },
          fail: res => {
            console.log('fail>>> reverse geocoder')
            console.log(res)
            this.setData({
              hasLocation: false
            })
          }
        })
      },
      fail: res => {
        console.log('fail>>> get location')
        console.log(res)
        this.setData({
          hasLocation: false
        })
      }
    })
    // 获取用户基本信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        lang: "zh_CN",
        withCredentials: false,
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {

  },
  getUserInfo: function (res) {
    if (res.detail.userInfo) {
      app.globalData.userInfo = res.detail.userInfo
      this.setData({
        userInfo: res.detail.userInfo,
        hasUserInfo: true
      })
      // 用户授权成功，导航到首页
      wx.switchTab({
        url: '../home/home',
        success: (res) => {
          console.log(res)
        },
        fail: (res) => {
          console.log(res)
        }
      })
    } else {
      this.setData({
        hasUserInfo: false
      })
    }
  }
})
