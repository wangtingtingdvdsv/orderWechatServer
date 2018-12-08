const mysql = require('mysql');
const config = require('../config');
var connection = mysql.createConnection(config);
const commentTable = require('./product.js');

async function getCommentList(orderId) {

    let sql = `select * from comment_table where order_id='${orderId}'`;
    let result = await query(sql);

    for(let i = 0; i < result.length; i++) {
        let productName= await commentTable.getProductNameByproductId(result[i].product_id);//获取productId对应的名字
        result[i].product_name = productName;
    }
    
    return result;
}

async function searchCommentByProductId(productId) {
    let sql = `select * from comment_table where product_id='${productId}'`;
    let result = await query(sql);
    return result;
}

async function createComment(commentInfo) {
   // console.log("#####", commentInfo);
    commentInfo.forEach(async function(comment) {
        let sql = `insert into comment_table(quality_score, taste_score, packing_score ,product_id ,user_openid , order_id) 
        values ('${comment.qualityScore}', '${comment.tasteScore}', '${comment.packingScore}'
        ,'${comment.productId}', '${comment.userOpenid}', '${comment.orderId}')`;
        //console.log('&&&&&&&&&&sql', sql);
        await  query(sql);
     
    })
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
    getCommentList,
    createComment,
    searchCommentByProductId
};