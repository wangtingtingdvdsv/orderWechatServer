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

async function getCommentList() {

    let sql = 'select * from comment';
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
    getCommentList
};