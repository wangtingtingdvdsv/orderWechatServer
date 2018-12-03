const Router = require('koa-router');
const router = new Router();

var comment = require('../controller/comment.js');

router.get('/buyer/searchComment', comment.searchCommentByProductId) //商品评价查询
router.post('/buyer/createComment', comment.createComment) //商品评价创建
router.get('/buyer/commentList', comment.getCommentList) //订单评论查询



module.exports = router;