const api = require('../../api/api');

Page({

    data: {
        currencyPage: 1,
        imageURL: "https://s3proxy.cdn-zlib.se/covers200/collections/userbooks/6b0625cfa8650e9b9270b099f8954d474150e6926785dca26673b1843f9d0546.jpg"
    },

    onSearch(e) {
        console.log('onSearch ===> ', e)
        let keyWord = e.detail;
        let page = this.data.currencyPage;
        if (e.detail) {
            setTimeout(() => {
                api.searchBook(keyWord, {page}).then(res => {
                    console.log('searchBook ===> ', res)
                })
            }, 200);
        }
    },

    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})