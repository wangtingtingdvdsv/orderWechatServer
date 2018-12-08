const mysql = require('mysql');
const config = require('../config');
var connection = mysql.createConnection(config);
connection.connect();

async function searchOrderByopenid(openId) {
    let sql = `select * from orderSummary  WHERE user_openid='${openId}'`;
    let result = await query(sql);
    
    return result;
} 
async function createOrder(data){

    let sql = `INSERT INTO orderSummary( order_amount, user_name , user_address ,  user_phone ,  user_openid, delivery_time) values ('${data.orderAmount}', '${data.userName}', '${data.userAddress}', '${data.userPhone}','${data.userOpenid}', '${data.deliveryTime}')`;

    let result = await query(sql);
    return result;
}

async function orderPay(userOpenid, orderId){//订单支付
    let sql = `UPDATE orderSummary SET  pay_status='1' WHERE  order_id ='${orderId}' AND user_openid='${userOpenid}'`;

    let result = await query(sql);
    return result;
}
async function changeOrderStatus(orderId, userOpenid) { //将订单状态改为已评论
    let sql = `UPDATE orderSummary SET  comment_status='1' WHERE  order_id ='${orderId}' AND user_openid='${userOpenid}'`;
    console.log("##￥￥%%", sql);
    let result = await query(sql);
    return result;
}
async function query(sql) {
    return await new Promise((resolve, reject) => {
        connection.connect();
        connection.query(sql, ( err, result) => {
            if ( err ) {
                console.log( err )
            } else {
               resolve(result);
               //console.log("r", result);
            }
        })  
        connection.end()
    })
} 

module.exports = {
    searchOrderByopenid,
    createOrder,
    orderPay,
    changeOrderStatus
};