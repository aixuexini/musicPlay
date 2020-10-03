// pages/video/video.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //最新的MV
    mvs:[],
    //用于保存视频的url地址信息
    video:[],
    //保存播放的状态
    isplay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //mv社区
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/mv/first?limit=10',
      method:"GET",
      success:res=>{
        console.log(res.data);
        this.setData({
          mvs:res.data.data
        })
        //创建临时数组
        let arr=[];
        //获取视频的url
        for(let i=0;i<this.data.mvs.length;i++){
          let id=this.data.mvs[i].id;
          wx.request({
            url: 'http://neteasecloudmusicapi.zhaoboy.com/mv/url?id='+id,
            method:"GET",
            success:res=>{
              //创建一个对象
              let obj=Object();
              obj.cover=this.data.mvs[i].cover;
              obj.name=this.data.mvs[i].name;
              obj.artistName=this.data.mvs[i].artistName;
              obj.url=res.data.data.url;
              //将所有的查询结果放置在一个数组内
              arr.push(obj);
              //console.log(res.data);
              this.setData({
                video:arr
              })
            }
          })
        }
      }
    })
  },
  changeStatus(event){
    console.log(event)
    //wx.createVideoContext(string id, Object this)
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