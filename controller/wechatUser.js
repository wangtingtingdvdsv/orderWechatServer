const axios = require('axios');
const {WXBizDataCrypt} = require('../utils.js');
const userTbale = require('../dataBase/userTable.js');

const appId = 'wx928bccfbb4ff4fda';
const secret = '506f274b47d9ae377446bf29ea31d39e'; 
// const data = { 
//     openId: 'oE3wM5Cv9iT52lJjGFGl6ZRnslWk',
//     nickName: '不畏将来，不念过往',
//     gender: 2,
//     language: 'zh_CN',
//     city: 'Xi\'an',
//     province: 'Shaanxi',
//     country: 'China',
//     avatarUrl:
//     'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL82pR12tiaOkBIGYiaMfPYRe3zEa8YfwGC4UiaMmATA2iazjfe8egQu1eKOh91jXbia7Egia7OymKuNq6w/132',
//     watermark: { timestamp: 1541386698, appid: 'wx33fdb2328d611917' } 
// }

var modifyUserInfo = async function(ctx, next) {//信息修改接口
    let data = ctx.request.body;
   // console.log('data', data)
    userTbale.modifyUserInfo(data)
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: null
    }
}

var searchUserInfo = async function(ctx, next) { //信息查询接口
    let openId = ctx.query.openId;
    let search = await userTbale.searchUser(openId);
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: search
    }
}

var login = async function (ctx, next) {  //登录接口
    var encryptedData = ctx.query.encryptedData;
    var code = ctx.query.code;
    var iv = ctx.query.iv;

    var data = await getOpenIdAndSessionKey(code);
    let openid = data.data.openid;
    let session_key = data.data.session_key;

   // console.log('session_key', session_key);

    let pc = new WXBizDataCrypt(appId, session_key)

    let info = pc.decryptData(encryptedData , iv)

    
    var result = await userTbale.insertUser(info)



    var search = await userTbale.searchUser(openid)
    ctx.status = 200;
        //console.log('se', search)
        ctx.body = {
            code: 0,
            msg: 'success',
            data: search
        }
}

async function getOpenIdAndSessionKey(code, encryptedData, iv) {
    return await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
        params: {
            grant_type: 'authorization_code',  
            appid: appId, //小程序的唯一标识
            secret: secret, //小程序的app secret
            js_code: code // code
        }
        })
      

}

module.exports = {
    login,
    searchUserInfo,
    modifyUserInfo
};


/*
session_key: 'F/ih5VxXSpctlET1y5awgA==',
openid: 'oE3wM5Cv9iT52lJjGFGl6ZRnslWk',
encryptedData: 'vLvtI06lwWKXSNqLyoCGuECv252v4RPWgJPcq/TyBkV9dMdtZKF+sXrVVq7hK3cjm2TwSSUMGhYaF+2sbkyIKEFbZh0Uth/rpdNZJLTfTiXb/X87Ibi5dExkPfEanVpzriYKjWcKh/PE2bQ7kEAxIBU5v6z0eT84SEO8EGZ9TBxcPwkCXq5yznO3KI4ICG5l38g0WTNA6VbMdcAEwEHFBDor0RNZeQbAWEAfi5YohoejTOSLcvH4VUmJTCjXDZaV9yrBdPOcWrzNnYy6JtqLs/b6CqWj7HLkk09OFM5YuRLg2Xd+mchP0RUwhs4hOIIqEjBn1LdBwa3HO/rTWdFvTyQiRKOBwAzVwPV5Ra6DvcbXrmON5N5uUgDxLoUpMsb3ttGFwKESQPc4TYyF8N9gx4+QOzv6OerL+yJnCyF7Wu1mFBAaHwzEpm3bNXrgjs9xwLaW19X4UPxmqqQeKeQEUNXTaPrIPIcLtwvCwiQw+2E51Kp7J0U0eCMJl7xNfSAK',
iv:'IbzKjyk1BMQQ6llgbG6GAw==' 
*/

/*
{ 
    openId: 'oE3wM5Cv9iT52lJjGFGl6ZRnslWk',
    nickName: '不畏将来，不念过往',
    gender: 2,
    language: 'zh_CN',
    city: 'Xi\'an',
    province: 'Shaanxi',
    country: 'China',
    avatarUrl:
    'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL82pR12tiaOkBIGYiaMfPYRe3zEa8YfwGC4UiaMmATA2iazjfe8egQu1eKOh91jXbia7Egia7OymKuNq6w/132',
    watermark: { timestamp: 1541386698, appid: 'wx33fdb2328d611917' } 
}
*/