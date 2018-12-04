const comment = require('../dataBase/comment.js');

async function searchCommentByProductId(ctx, next) { //商品评价查询
    let productId = ctx.request.query.productId;
   // console.log('productId', productId);
    let search = await comment.searchCommentByProductId(productId);
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: search
    }   
 
}
async function createComment(ctx, next) { //商品评价创建
    let commentInfo = ctx.request.body.commentInfo;
  //  console.log("commentInfo", commentInfo);
    await comment.createComment(commentInfo);
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: null
    }
}
async function getCommentList(ctx, next) { //订单评论查询
    let orderId = ctx.request.query.orderId;
    console.log('orderId', orderId);
    let search = await comment.getCommentList(orderId);
    //console.log('商品评论', search);
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