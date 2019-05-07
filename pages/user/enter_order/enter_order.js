// pages/user/enter_order/enter_order.js
const orderData = require('../order_data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statu: [
      { type: 0, name: '物流配送' },
      { type: 1, name: '门店自提' }
    ],
    nav: 0,
    order: {}
  },

  // 配送方式切换
  nav_tab: function (e) {
    this.setData({
      nav: e.detail
    });
  },

  //跳转会员
  skip_vip:function(){
    wx.navigateTo({
      url: '/pages/user/vip/vip',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      order: orderData[0],
    });
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