// app.js
const api = require('./api/api');

App({
    data: { 
        HOST: 'http://127.0.0.1:8000',
        zLibraryHost: 'https://zh.z-library.se',
    },

    globalData: {
        openId: '',
    },  

    onLaunch() {
        const openId = wx.getStorageSync('openid');
        if (!openId) {
            this.getOpenId();
        } else {
            this.globalData.openId = openId;
        }
    },

    getOpenId() {
        let that = this;
        wx.login({
            success(res) {
                if (res.code) {
                    api.getOpenId({code: res.code}).then(res_1 => {
                        if (res_1.statusCode === 200) {
                            let data = res_1.data;
                            if (data.code == 1) {
                                let openId = data.data.openid;
                                that.globalData.openId = openId;
                                wx.setStorageSync('openid', openId);
                            } else {
                                console.log('res_1 data ===> ', data)
                            }
                        } else {
                            console.log('res_1 ===> ', res_1)
                        }
                    })

                    // wx.request({
                    //     url: that.data.HOST + '/item',
                    //     data: {
                    //         code: res.code
                    //     },
                    //     method: 'POST',
                    //     header: {
                    //         "Content-Type": 'application/x-www-form-urlencoded'
                    //     },
                    //     success(res_1) {
                    //         console.log('res_1 ===> ', res_1)
                    //     }
                    // })
                } else {
                    console.log('小程序登录失败 ===> ', res.errMsg)
                }
            }
        })
    }
})