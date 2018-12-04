const mysql = require('mysql');
const config = require('../config');
var connection = mysql.createConnection(config);
connection.connect();
connection.on('error', 
function (err) {
  if (err) {
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connect();
    } else {
      console.error(err.stack || err);
    }
  }
});

async function searchOrderByopenid(openId) {
    let sql = `select * from orderSummary  WHERE user_openid='${openId}'`;
    let result = await query(sql);
    return result[0];
} 
async function createOrder(data){
    let sql = `INSERT INTO orderSummary( user_name , user_address ,  user_phone ,  user_openid, delivery_time) values ('${data.userName}', '${data.userAddress}', '${data.userPhone}','${data.openId}', '${data.deliveryTime}')`;
    let result = await query(sql);
    return result;
}

async function orderPay(userOpenid, orderId){//订单支付
    let sql = `UPDATE orderSummary SET  pay_status='1' WHERE  order_id ='${orderId}' AND user_openid='${userOpenid}'`;
    console.log('sql', sql);
    let result = await query(sql);
    return result;
}
async function query(sql) {
    return await new Promise((resolve, reject) => {
        connection.query(sql, ( err, result) => {
            if ( err ) {
                reject( err )
            } else {
               resolve(result);
               //console.log("r", result);
            }
        })  
    })
} 

module.exports = {
    searchOrderByopenid,
    createOrder,
    orderPay
};