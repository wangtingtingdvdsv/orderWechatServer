const Router = require('koa-router');
const router = new Router();

var wechatUser = require('../controller/wechatUser.js');

router.get('/wechat/login', wechatUser.login) //登录
router.get('/user/info/search', wechatUser.searchUserInfo) //查询
router.post('/user/info/modify', wechatUser.modifyUserInfo) //更新




module.exports = router;