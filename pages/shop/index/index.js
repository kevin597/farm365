// pages/shop/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList:[],
    navTitleText: {
      "bg_color": "#fff", //默认transparent
      "color": "#000", //默认transparent
      "flag": 1, //0: 无返回；1：返回上一级；2：home
      "name": "集市", //默认为空
    },
    //banner数据
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    //nav菜单数据
    nav_arry: [
      { src: "http://iph.href.lu/90x90", text: "母鸡" },
      { src: "http://iph.href.lu/90x90", text: "鸭子" },
      { src: "http://iph.href.lu/90x90", text: "乳品" },
      { src: "http://iph.href.lu/90x90", text: "蔬菜" },
      { src: "http://iph.href.lu/90x90", text: "鲜果" },
      { src: "http://iph.href.lu/90x90", text: "海鲜" },
      { src: "http://iph.href.lu/90x90", text: "鸡蛋" },
      { src: "http://iph.href.lu/90x90", text: "蔬菜" },
      { src: "http://iph.href.lu/90x90", text: "鸡蛋" },
      { src: "http://iph.href.lu/90x90", text: "蔬菜" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    let data = require('../../../utils/data.js');//拼团数据
    this.setData({
      productList: data.dataList    //赋值，productList里面就是我们要的数据了
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

  },
  btnanniu: function (e) {
    console.log(e.target.id)

    if (e.target.id == "0") {
      //wx.navigateTo({
      //  url: '/pages/info/info',
      //})
    } else if (e.target.id == "1") {
      //wx.navigateTo({
      //  url: '/pages/info1/info1',
      //})
    } else if (e.target.id == "2") {
      // ...
    }
  }
})