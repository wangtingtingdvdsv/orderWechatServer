const comment = require('../dataBase/comment.js');
const orderSummary = require('../dataBase/orderSummary.js');
const userTable = require('../dataBase/userTable.js');
const productTable = require('../dataBase/product.js');

async function searchCommentByProductId(ctx, next) { //商品评价查询
    let productId = ctx.request.query.product_id;
   // console.log('productId', productId);
    let search = await comment.searchCommentByProductId(productId);
    for(let i = 0; i < search.length; i++) {
        let user = await userTable.searchUser(search[i].user_openid)//通过openId获取姓名和图像
        console.log('user', user);
        search[i].user_name = user[0].user_name;
        search[i].user_icon = user[0].user_icon;
    }
 
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: search
    }   
 
}
async function createComment(ctx, next) { //商品评价创建
    let commentInfo = ctx.request.body.commentInfo;
    //console.log("commentInfo", ctx.request.body);
    await comment.createComment(commentInfo);
   
    commentInfo.forEach(async function(comment) {
        await orderSummary.changeOrderStatus(comment.orderId, comment.userOpenid)//更改订单状态为已评论
    })
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: null
    }
}
async function getCommentList(ctx, next) { //订单评论查询
    let orderId = ctx.request.query.orderId;
    console.log('------------orderId', orderId);
    var search = await comment.getCommentList(orderId);
    for(let i = 0; i < search.length; i++) {
        let productInfo = await productTable.getProductByproductId(search[i].product_id);
        search[i].product_icon = productInfo.product_icon;
    }
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