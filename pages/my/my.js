Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    list_01: [
      {
        "iconUrl": "./images/sys_icon.png",
        "name": "扫一扫",
        "url": "../QRCodeResult/QRCodeResult",
        "type": 1
      },
      {
        "iconUrl": "./images/txl_icon.png",
        "name": "通讯录",
        "type": 2
      }
    ],
    list_02: [
      {
        "iconUrl": "./images/sc_icon.png",
        "name": "收藏"
      },
      {
        "iconUrl": "./images/fx_icon.png",
        "name": "发现"
      },
      {
        "iconUrl": "./images/kj_icon.png",
        "name": "卡卷"
      }
    ],
    list_03: [
      {
        "iconUrl": "./images/QRCode_icon.png",
        "name": "小程序码"
      },
      {
        "iconUrl": "./images/sm_icon.png",
        "name": "关于唔嗯文"
      },
      {
        "iconUrl": "./images/ver_icon.png",
        "name": "版本信息"
      }
    ]
  },
  // onAction: (e) => {
  //   switch (e.currentTarget.dataset.types) {
  //     case 1:
  //       console.log('调用扫一扫')
  //       wx.scanCode({
  //         scanType: ["qrCode", "barCode", "datamatrix", "pdf417"],
  //         success: res => {
  //           console.log(res)
  //           wx.navigateTo({
  //             url: "../QRCodeResult/QRCodeResult?res=" + JSON.stringify(res)
  //           })
  //         }
  //       })
  //       break
  //     case 2:
  //       console.log('调用通讯录')
  //       break
  //     default:
  //       console.log('没有监听到事件类型')
  //   }
  // },
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