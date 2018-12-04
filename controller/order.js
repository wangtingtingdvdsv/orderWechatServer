const orderSummary = require('../dataBase/orderSummary.js');
const orderDetails = require('../dataBase/orderDetails.js');
async function searchOrderByopenid(ctx, next) {
    let openId = ctx.request.query.openId;
    if(!openId) {
        return;
    }
    var search = await orderSummary.searchOrderByopenid(openId);
   console.log("+++++++++++-----------", search);
    for(let i = 0; i < search.length; i++) {
        let details = await orderDetails.getOrderDetails(search[i].order_id);
        search[i].orderDetailList = details;
    }
    

    
    console.log("+++++++++++-----------", search);
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: search
    }
}

async function createOrder(ctx, next) { //订单创建
    let data = ctx.request.body;
    console.log("--------------------------data", data);
    if(!(data.userName || data.userAddress || data.userPhone || data.userOpenid || data.deliveryTime || data.items)) {
        return;
    }
    let items = data.items;
    let result = await orderSummary.createOrder(data);
    console.log('#result#', items);
    items.forEach(function(item) {
        orderDetails.insertOrderDetail(item.productId, item.productQuantity, result.insertId);

    })
    
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: result.insertId
    }
    
}

async function orderPay(ctx, next) { //订单支付
    let data = ctx.request.body;
    if(!(data.userOpenid || data.orderId)) {
        return;
    }
    await orderSummary.orderPay(data.userOpenid, data.orderId);
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: null
    }
}

module.exports = {
    searchOrderByopenid,
    createOrder,
    orderPay
};