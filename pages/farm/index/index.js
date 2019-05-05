//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    page_full: "../../../images/page_full.jpg", //农场背景图
    motto: 'Hello World',
    showModal: false, //是否弹窗
    dataName: '', //弹窗标题
    dataID: '', //弹窗类别
    modal: {
      newsModal: false, //动态弹窗
      userModal: false, //会员权益弹窗
      friendModal: false //好友弹窗
    },
    userInfo: {},
    my_farm: {
      my_food: 32, //食物数
      my_egg: 12, //鸡蛋数
      my_grade: 2, //0是普通会员，1是200会员，2是365会员
      my_first_news: '*朗月成功收获6只鸡蛋' //消息
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //自定义顶部标题
    navTitleText: {
      "bg_color": "", //默认transparent
      "color": "", //默认transparent
      "flag": 0, //0: 无返回；1：返回上一级；2：home
      "name": "", //默认为空
    },
    show: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['张小姐的口碑农场', '李先生的口碑农场', '王阿姨的口碑农场'], //农场下拉列表的数据
    index: 0, //选择的下拉列 表下标

    friend: [{
        id: 1,
        name: '香水百合1',
        statu: '1',
        photo: '/images/default/180x180.jpg'
      },
      {
        id: 2,
        name: '香水百合2',
        statu: '0',
        photo: '/images/default/180x180.jpg'
      },
      {
        id: 3,
        name: '香水百合3',
        statu: '0',
        photo: '/images/default/180x180.jpg'
      },
      {
        id: 4,
        name: '香水百合4',
        statu: '0',
        photo: '/images/default/180x180.jpg'
      },
      {
        id: 5,
        name: '香水百合5',
        statu: '0',
        photo: '/images/default/180x180.jpg'
      },
      {
        id: 6,
        name: '香水百合6',
        statu: '0',
        photo: '/images/default/180x180.jpg'
      }
    ],

    news: [{
        time: '2019-04-11 08:50',
        title: '晚晴天 偷了你一只老母鸡'
      },
      {
        time: '2019-04-11 08:50',
        title: '晚晴天 暗中观察了一圈你的农场'
      },
      {
        time: '2019-04-11 08:50',
        title: 'Amy 偷了你一只老母鸡'
      },
      {
        time: '2019-04-11 08:50',
        title: '晚晴天 偷了你一只老母鸡'
      },
      {
        time: '2019-04-11 08:50',
        title: '香水小百合 偷了你一只老母鸡'
      },
      {
        time: '2019-04-11 08:50',
        title: '晚晴天 偷了你一只老母鸡'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    //在这里只需要判断是不是iphonex
    let isPhone = app.globalData.isIphoneX;
    if (isPhone) {
      this.setData({
        isIphoneX: true
      })
    };
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show,
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  //弹窗
  toShowModal(e) {
    var showid = e.currentTarget.dataset.id;
    var showname = e.currentTarget.dataset.name;
    var toShowModal = "modal." + showid;
    this.setData({
      [toShowModal]: true,
      showModal: true,
      dataID: showid,
      dataName: showname
    });
  },
  //关闭弹窗
  tohideModal(e) {
    var hidearr = e.currentTarget.dataset.id;
    var tohideModal = "modal." + hidearr;
    this.setData({
      [tohideModal]: false,
      showModal: false
    });
  }

})