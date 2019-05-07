// pages/shop/submit_order/submit_order.js
const orderData = require('../order_data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: [],
    totalPrice: 100,
    selectedNum: 1,
    currentTab: 0,
    time: '',
    address: {
      name: "张小姐",
      tel: "12345678910",
      address: "西湖国际C座1234",
      region: ["安徽省", "合肥市", "蜀山区"],
      switch: true
    },
    shopAddress: {
      name: "蜀山区鲜丰水果自营店",
      address: "安徽省合肥市蜀山区西湖国际C座1234",
      time: "16:00-20:00门店自提",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      order: orderData[0],
    });
    this.setData({
      time: this.getNowTime()
    });
  },
  //两天后的提货日期
  getNowTime: function() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate() + 2;
    if (month < 10) {
      month = '0' + month;
    };
    if (day < 10) {
      day = '0' + day;
    };

    var formatDate = year + '-' + month + '-' + day;
    return formatDate;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //console.log(this.data.order);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


  //点击切换tab
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //提交订单
  btn_submit_order: function() {
    var that = this;
    console.log(that.data.totalPrice);
    wx.showModal({
      title: '提示',
      content: '确认支付',
      success: function(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/shop/success/success'
          })
        } else {
          //console.log(res);
        }
      },
      fail: function(res) {
        console.log(res);
      }
    });
  }

})