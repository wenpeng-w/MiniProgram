// pages/story/story.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    indicatorColor: '#999999',
    indicatorActiveColor: '#ffffff',
    autoplay: true,
    interval: 5000,
    duration: 300,
    circular: true,
    types: [
      {
        iconPath: './images/chanp_icon.png',
        name: '产品'
      },
      {
        iconPath: './images/shej_icon.png',
        name: '设计'
      },
      {
        iconPath: './images/bianc_icon.png',
        name: '编程'
      },
      {
        iconPath: './images/shu_icon.png',
        name: '读书'
      },
      {
        iconPath: './images/kej_icon.png',
        name: '科技'
      },
      {
        iconPath: './images/diany_icon.png',
        name: '影视'
      },
      {
        iconPath: './images/shengh_icon.png',
        name: '生活'
      },
      {
        iconPath: './images/wujx_icon.png',
        name: '五角星'
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