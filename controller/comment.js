const comment = require('../dataBase/comment.js');

async function searchCommentByProductId(ctx, next) { //商品评价查询
 
}
async function createComment(ctx, next) { //商品评价创建
    
}
async function getCommentList(ctx, next) { //订单评论查询
    let search = await comment.getCommentList();
    console.log('商品评论', search);
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: search
    }
}

module.exports = {
    searchCommentByProductId,
    createComment,
    getCommentList
};