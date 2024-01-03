const api = require('../../api/api');
const app = getApp()

Page({
    data: {

    },

    onLoad() {
        let that = this;
        let openid = '';
        var intervalId = setInterval(function() {
            openid = app.globalData.openId;
            if (openid !== '') {
                // 获取用户状态
                api.getUserStatus({openid}).then(res => {
                    console.log('res ===> ', res);
                    // todo 

                })
                clearInterval(intervalId)
            }
        }, 500);
    }



})