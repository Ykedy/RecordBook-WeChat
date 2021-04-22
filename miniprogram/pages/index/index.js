// miniprogram/pages/index/index.js
let val = '';
let okText='no';
//点击发送清空文本框内容

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 输入的内容存放位置
    context:[],
    inputValue:'',
    
  },
  // 拿到输入框的内容
  inputq(e){
    val = e.detail.value;
    let noSpace = val.replace(/\s+/g,'');
   if(noSpace.length<2){
     okText='no'
   }
    // 否则，可以发送
    else{
      okText='ok';
    }
  },
  // 点击[发送]按钮的事件
  tapbtn(){
    var list =this.data.context
    if(okText==='ok'){ 
    list.push(val);
   this.setData({
     context:list,
     inputValue:''
   })
    }
    else{
      wx.showToast({

        title:'文字过少，请重新输入',
        icon:'none'

      })
    }
  },
  // 点击删除按钮删除数据
  deldata(e){
    let index = e.currentTarget.dataset.delindex;
    this.data.context.splice(index,1);
    let newdata = this.data.context
    this.setData({
      context:newdata
    })


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