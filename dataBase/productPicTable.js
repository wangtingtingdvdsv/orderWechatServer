const mysql = require('mysql');
const config = require('../config');
var connection = mysql.createConnection(config);


async function getProductPic(productId) {

    let sql = `select * from product_pic where productId = ${productId}`;
    let result = await query(sql);
    return result;
}

async function query(sql) {
    return await new Promise((resolve, reject) => {
       
        connection.query(sql, ( err, result) => {
            if ( err ) {
                console.log("mysql",  err )
            } else {
               resolve(result);
               //console.log("r", result);
            }
        })  
       
    })
} 
module.exports = {
    getProductPic
};