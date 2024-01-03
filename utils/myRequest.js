const doRequest = (url, data, method) => {
    let app = getApp()
    
    // application/x-www-form-urlencoded
    let header = {
        "Content-Type": 'application/json'
    }

    if (!method) {
        method = "POST"
    }

    if (app) {
        url = app.data.HOST + url;
        header['Cookie'] = app.globalData.openId;
    }

    return new Promise(function (resolve, reject) {
        wx.request({
            url,
            method,
            data,
            header,
            success: resolve,
            fail: reject
        })
    })
}

module.exports = {
    doRequest
}