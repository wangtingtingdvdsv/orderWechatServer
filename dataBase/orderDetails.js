const mysql = require('mysql');
const config = require('../config');
const productTable = require('./product');
var connection = mysql.createConnection(config);


async function insertOrderDetail(productId, productQuantity, orderId) { //插入订单详情
    let product = await productTable.getProductByproductId(productId);

    let sql = `INSERT INTO orderDetails(order_id, product_id , product_name, product_icon, product_price,product_quantity, seller_phone) values ('${orderId}', '${productId}', '${product.product_name}','${product.product_icon}', '${product.product_price}','${productQuantity}', '${product.seller_phone}')`;

    let result = await query(sql);
    return result;
} 

async function getOrderDetails(orderId) { //获取订单详情
    let sql = `select * from orderDetails WHERE order_id ='${orderId}'`;
    let result = await query(sql);
    //console.log("++++=========", result, orderId);
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
    insertOrderDetail,
    getOrderDetails
};