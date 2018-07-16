Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    list_01: [
      {
        "iconUrl": "",
        "name": "扫一扫"
      },
      {
        "iconUrl": "",
        "name": "通讯录"
      },
      {
        "iconUrl": "",
        "name": "收藏"
      },
      {
        "iconUrl": "",
        "name": "发现"
      },
      {
        "iconUrl": "",
        "name": "卡卷"
      },
      {
        "iconUrl": "",
        "name": "我的小程序码"
      },
      {
        "iconUrl": "",
        "name": "版本"
      },
      {
        "iconUrl": "",
        "name": "关于唔嗯文"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      lang: "zh_CN",
      success: res => {
        this.setData({
          "userInfo": res.userInfo
        })
      }
    })
  },
  toPersonal: () => {
    wx.navigateTo({
      url: "../personal/personal"
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