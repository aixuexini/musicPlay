//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //轮播图
    banner:[],
    //榜单
    songs:[],
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //获取首页的轮播图
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/banner?type=2',
      success:res=>{
       // console.log(res.data.banners);
        this.setData({
          banner:res.data.banners
        });
      }
    });
    //请使用歌单详情接口,传入排行榜id获取排行榜详情数据(排行榜也是歌单的一种)
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/toplist',
      method:"GET",
      success:res=>{
        console.log(res.data);
        //获得所有的分类列表
        let list=res.data.list;
        //临时数组
        let data=[];
        //获得每个榜单的id值
        for(let i=0;i<6;i++){
          let id=list[i].id;
          //console.log(id);
          //发送请求得到每个榜单的详情
          wx.request({
            url: 'http://neteasecloudmusicapi.zhaoboy.com/playlist/detail?id='+id,
            success:res=>{
              let object = {}; 
              object.name = list[i].name; 
              object.coverImgUrl=list[i].coverImgUrl;
              object.tracks = res.data.playlist.tracks; 
              object.id=id;
              //将所有的查询结果放置在一个数组内
              data.push(object);
              //console.log(res.data.playlist.tracks);
              //输出榜单对应的榜单详情
              this.setData({
               songs:data
              })
              //console.log(data)
            }
          });
         
        }  
      }
    })
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
