const myRequest = require('../utils/myRequest.js');

const api = {
    getOpenId(params) {
        return myRequest.doRequest("/user/getOpenId", params, 'POST')
    },
    getUserStatus(params) {
        return myRequest.doRequest("/user/status", params, 'POST')
    },
    searchBook(bookName, params) {
        return myRequest.doRequest("/books/" + bookName, params, 'GET')
    }
}

module.exports = api