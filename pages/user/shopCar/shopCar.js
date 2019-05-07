// pages/user/shopCar/shopCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:501,
        store:'蜀山区咸丰水果自营店',
        check:false,
        goods:[
          {
            id:6001,
            photo:'/images/default/180x180.jpg',
            name: '农家散养土鸡蛋纯天然鲜活有机柴鸡蛋正宗100个/箱（整箱装）',
            oth:'4个月大母鸡（大约30斤）',
            val:'50.00',
            num:1,
            check:false
          }
        ]
      }, {
        id: 502,
        store: '高新区咸丰水果自营店',
        check: false,
        goods: [
          {
            id: 6001,
            photo: '/images/default/180x180.jpg',
            name: '农家散养土鸡蛋纯天然鲜活有机柴鸡蛋正宗100个/箱（整箱装）',
            oth: '4个月大母鸡（大约30斤）',
            val: '50.00',
            num: 1,
            check: false
          }, {
            id: 6002,
            photo: '/images/default/180x180.jpg',
            name: '农家散养土鸡蛋纯天然鲜活有机柴鸡蛋正宗100个/箱（整箱装）',
            oth: '4个月大母鸡（大约30斤）',
            val: '50.00',
            num: 2,
            check: false
          }
        ]
      }
    ],
    total:0
  },

  //全选
  allChange:function(e){
    var id = e.currentTarget.dataset.val;
    var list = this.data.list;
    for(var i in list){
      if(list[i].id == id){
        if (!list[i].check){
          for(var p in list){
            if (list[p].id != id){
              list[p].check = false;
              for (var q in list[p].goods) {
                list[p].goods[q].check = false;
              };
            };
          };
        };
        list[i].check = !list[i].check;
        for(var j in list[i].goods){
          list[i].goods[j].check = list[i].check;
        };
      };
    };
    this.setData({
      list:list
    });
    this.total_val();
  },

  //单选
  checkboxChange:function(e){
    var id = e.currentTarget.dataset.val;
    var arr = e.detail.value;
    var list = this.data.list;
    for(var i in list){
      if (list[i].id == id) {
        var num = 0;
        for (var j in list[i].goods) {
          var isCheck = false;
          for(var d in arr){
            if (list[i].goods[j].id == arr[d]){
              isCheck = true;
              num++;
            };
          };
          list[i].goods[j].check = isCheck;
        };
        if (num == list[i].goods.length) {
          list[i].check = true;
        } else {
          list[i].check = false;
        };
      }else{
        list[i].check = false;
        for (var j in list[i].goods) {
          list[i].goods[j].check = false;
        };
      };
    };
    this.setData({
      list: list
    });
    this.total_val();
  },

  //删除门店
  del_list:function(e){
    var id = e.currentTarget.dataset.carId;
    var list = this.data.list;
    for(var i in list){
      if(list[i].id == id){
        list.splice(i,1);
      };
    };
    this.setData({
      list: list
    });
    this.total_val();
  },

  //减少数量
  reduce_btn:function(e){
    var id = e.currentTarget.dataset.orderId;
    var good_id = e.currentTarget.dataset.goodId;
    var list = this.data.list;
    for(var i in list){
      if(list[i].id == id){
        for(var j in list[i].goods){
          if (list[i].goods[j].id == good_id){
            if (list[i].goods[j].num > 0){
              list[i].goods[j].num --;
            };
          };
        };
      };
    };
    this.setData({
      list:list
    });
    this.total_val();
  },

  //增加数量
  add_btn:function(e){
    var id = e.currentTarget.dataset.orderId;
    var good_id = e.currentTarget.dataset.goodId;
    var list = this.data.list;
    for (var i in list) {
      if (list[i].id == id) {
        for (var j in list[i].goods) {
          if (list[i].goods[j].id == good_id) {
            list[i].goods[j].num ++;
          };
        };
      };
    };
    this.setData({
      list: list
    });
    this.total_val();
  },

  //合计
  total_val:function(){
    var list = this.data.list;
    var total = 0;
    for(var i in list){
      if(list[i].check){
        for(var j in list[i].goods){
          if(list[i].goods[j].check){
            total += list[i].goods[j].val * list[i].goods[j].num;
          };
        };
      };
    };
    total = total.toFixed(2);
    this.setData({
     total: total
    });
  },

  //去结算
  submit:function(){
    var list = this.data.list;
    var isPay = false;
    for (var i in list) {
      if (list[i].check) {
        isPay = true;
      }else{
        for(var j in list[i].goods){
          if(list[i].goods[j].check){
            isPay = true;
          };
        };
      };
    };
    if(isPay){
      //进入确认订单页面
      wx.navigateTo({
        url: '/pages/user/enter_order/enter_order',
      });
    }else{
      wx.showModal({
        title: '提示',
        content: '请先勾选您要结算的商品',
        showCancel: false,
        confirmText:'我知道了'
      })
    };
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