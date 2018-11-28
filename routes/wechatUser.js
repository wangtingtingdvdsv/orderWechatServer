const Router = require('koa-router');
const router = new Router();

var wechatUser = require('../controller/wechatUser.js');

router.get('/wechat/login', wechatUser.login) //登录
router.get('/user/info/search', wechatUser.searchUserInfo) //查询
router.post('/user/info/modify', wechatUser.modifyUserInfo) //修改

router.get('/q/w', function(ctx, next) {
    console.log('1111111111111');
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: 'hhhhhhhhhhh'
    }
})



module.exports = router;