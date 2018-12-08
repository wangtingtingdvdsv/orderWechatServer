const mysql = require('mysql');
const config = require('../config');
var connection = mysql.createConnection(config);

async function getAllCategory() {
    let sql = 'select * from category';
    let result = await query(sql);
    return result;
}

async function query(sql) {
    return await new Promise((resolve, reject) => {
       
        connection.query(sql, ( err, result) => {
            if ( err ) {
                console.log( err )
            } else {
               resolve(result);
               //console.log("r", result);
            }
        }) 
       
    })
} 
module.exports = {
    getAllCategory
};