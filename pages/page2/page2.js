// pages/page2/page2.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
    // input值
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    msg: "test",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var arr = getApp()
        this.setData({
            input1 : arr.globalData.input1,
            input2 : arr.globalData.input2,
            input3 : arr.globalData.input3,
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