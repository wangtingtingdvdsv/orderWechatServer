const mysql = require('mysql');
const config = require('../config');
const picTable = require('./productPicTable.js');
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
//通过关键字查询商品
async function getProductBykey(key) {
  
    let sql = `select * from product where product_name like '%${key}%'`;
    let result = await query(sql);
  
    console.log('**', result);

    if(result) {
        for(let i = 0; i < result.length; i++) {
            let pics = await picTable.getProductPic(result[i].product_id );
            
            result[i].pics = pics;
        }
    }
    return result;
}

//通过categoryId获取商品信息
async function getProductById(categoryId) {
    console.log('id', categoryId);
    let sql = `select * from product WHERE category_type ='${categoryId}'`;   
    let result = await query(sql);
    console.log('**', result);

    if(result && result[0]) {
        for(let i = 0; i < result.length; i++) {
            let pics = await picTable.getProductPic(result[i].product_id );
            
            result[i].pics = pics;
        }
    }
    return result;
}

async function getProductList(categorys) { //获取商品列表

    for(let i = 0; i < categorys.length; i++) {
        let products = await getProductById(categorys[i].category_id);
        if(products) {
            categorys[i].products = products;
            console.log('products', products);
        }
        
       
    }
    console.log('categorys', categorys);
    return categorys;
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
    getProductList,
    getProductById,
    getProductBykey
};