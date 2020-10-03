// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tracks:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    //获取路由传递过来的id值
    let id=options.id;
    //发送请求，获取服务器端的数据
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/playlist/detail?id='+id,
      method:"GET",
      success:res=>{
        console.log(res.data);
        let tracks=res.data.playlist.tracks;
        this.setData({
          tracks:tracks
        })
      }
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