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
    ],
    storyList: [
      {
        image: '//upload-images.jianshu.io/upload_images/4885411-3f620ebee1bb9882?imageMogr2/auto-orient/strip%7CimageView2/2/w/700',
        title: '【设计】浅谈长图版式布局中的几种常用方法浅谈长图版式布局中的几种常用方法',
        time: '2018.08.01 14:10',
        tags: ['设计']
      },
      {
        image: '//upload.jianshu.io/admin_banners/web_images/4358/a52cb0d0ef97a08087a234f4e25702b2471d49a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        title: '【设计】浅谈长图版式布局中的几种常用方法',
        time: '2018.08.01 14:10',
        tags: ['产品']
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