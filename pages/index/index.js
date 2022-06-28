// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '人单合一 测试应用',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false

    // 获取input值
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    result_str: "",

    //下拉选择框
    tabType: 'tab1',
    key: 'tab1',
    conditionList: [{
            title: '0-10',
            id: '1',
            select: true
        },
        {
            title: '11-20',
            id: '2',
            select: false
        },
        {
            title: '21-30',
            id: '3',
            select: false
        },
    ],
    choosedCondition: {
        title: '请输入',
        id: '1'
    },
    conditionVisible: false,
    
    // 复选框
    items: [
      {name: 'YES', value: '是'},
      {name: 'NO', value: '否'},
      // {name: 'NO', value: '否', checked: 'true'},
    ],
    item_1_checked:'NO'

  },
  Input_1:function(e){
    this.data.input1=e.detail.value;
  },
  Input_2:function(e){
    this.data.input2=e.detail.value;
  },

  LoadMydata(){
    var app = getApp();
    app.globalData.result_str = this.data.result_str
  },

  aaa(){
    // 将input赋值到全局变量
    var that = this
    var app = getApp();
    app.globalData.input1 = this.data.input1
    app.globalData.input2 = this.data.input2
    console.log(this.data.choosedCondition)
    
    // 跳转到page1 等待响应
        wx.navigateTo({
          url: '../page1/page1',
        }),
    
        //request 请求
    wx.request({
      url: 'https://lqyj.xyz', //仅为示例，并非真实的接口地址
      data: {
        in_1:app.globalData.input1,
        in_2:app.globalData.input2
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        that.setData({
          result_str:res.data
        })
        that.LoadMydata()        
      }
    }
    )
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 下拉框
  showCondition() {
    this.setData({
        conditionVisible: !this.data.conditionVisible
    })
},
// 改变查询项
onChnageCondition(e) {
    const list = this.data.conditionList
    list.forEach(item => {
        if (item.id === e.currentTarget.dataset.id) {
            item.select = true
            this.setData({
                'choosedCondition.title': item.title,
                'choosedCondition.id': item.id
            })
        } else {
            item.select = false
        }
    })
    this.setData({
        conditionList: list
    })
},
// 复选框点击事件
checkboxChange: function(e) {
  this.data.item_1_checked = e.detail.value;
  console.log('checkbox发生change事件，携带value值为：',this.data.item_1_checked)
}
})