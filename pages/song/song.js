// pages/song/song.js
//创建音频播放的上下文innerContent对象
const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song:{},
    //表示播放状态
    isplay:false,
    duration:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取单曲的id
    let id=options.id;
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/song/url?id='+id,
      method:"GET",
      success:res=>{ 
        console.log()
        this.setData({
          song:res.data.data[0]
        });
        //获取音频的播放路径
        console.log(this.data.song)
        innerAudioContext.src = this.data.song.url;
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
    //获取音频的播放路径
    //wx.request是异步请求，这里请求歌曲的url请求不到
    //因此写在onLoad声明周期内
    // console.log(this.data.song)
    // innerAudioContext.src = this.data.song.url;
  },
   //播放
   play: function () {     
    innerAudioContext.play();
    console.log(innerAudioContext.duration);
    //获取音频的总播放时长
    let duration=innerAudioContext.duration;
    console.log(duration);
    this.setData({
      duration:duration
    })
    this.setData({ isplay: true });
  },
  // 停止
  stop: function () {
    innerAudioContext.pause();
    this.setData({ isplay: false });
  },
  /**
   * 重播
   */
  review:function(){
    innerAudioContext.stop();
    innerAudioContext.play()
    this.setData({ isplay: true });
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