/*

mysql修改字段名：
ALTER  TABLE 表名 CHANGE 旧字段名 新字段名 新数据类型;	

 insert into product (product_name,  product_price,  product_sales,  product_description,  product_icon, seller_phone, category_type) values ('电饭锅', '503', '0', '真的很好', '1', '13232455678', '10');

    http://1.bp.blogspot.com/-6peIH-ag0y4/Uj1qWJQKN3I/AAAAAAAAAPM/wms5x3g2z5g/s1600/%E7%82%AE.jpg
http://1.bp.blogspot.com/-6peIH-ag0y4/Uj1qWJQKN3I/AAAAAAAAAPM/wms5x3g2z5g/s1600/%E7%82%AE.jpg
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Canon_155mm_TRF1_fh000024.jpg/300px-Canon_155mm_TRF1_fh000024.jpg
 insert into product_pic (productId, pic1, pic2, pic3) values (1, 'http://1.bp.blogspot.com/-6peIH-ag0y4/Uj1qWJQKN3I/AAAAAAAAAPM/wms5x3g2z5g/s1600/%E7%82%AE.jpg', 'http://1.bp.blogspot.com/-6peIH-ag0y4/Uj1qWJQKN3I/AAAAAAAAAPM/wms5x3g2z5g/s1600/%E7%82%AE.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Canon_155mm_TRF1_fh000024.jpg/300px-Canon_155mm_TRF1_fh000024.jpg'); 

ALTER TABLE  usertable  modify  user_phone  varchar(32)  NULL; 更改表字段
CREATE TABLE product_pic (
   picId INT(11) NOT NULL AUTO_INCREMENT,
   productId INT(11) NOT NULL,
   pic1 BLOB NULL,
   pic2 BLOB NULL,
   pic3 BLOB NULL,
   PRIMARY KEY ( picId )
) CHARSET=utf8;
*/
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

async function insertUser(data) {
    let dataInfo = await searchUser(data.openId);
    if(dataInfo.length != 0) {
        console.log(await searchUser(data.openId));
        return;//已经插入过了
    }
    var sql = `INSERT INTO usertable( user_name , user_openid, user_icon, user_gender) values ('${data.nickName}', '${data.openId}', '${data.avatarUrl}','${data.gender}')`;
    let result = await query(sql);
    return result;
}

// async function insertUserAddressAndPhone(address, phone) {
//     var sql = `INSERT INTO usertable(user_address, user_phone) values ('${address}', '${phone}')`;
//     let result = await query(sql);
//     console.log('insert2', result);
// }

async function modifyUserInfo(data){
    sql = `UPDATE usertable SET user_name='${data.userName}',  user_gender='${data.userGender}', user_phone='${data.userPhone}' WHERE user_openid ='${data.openId}'`;
    let result = await query(sql);
    return result;
}

async function searchUser(openId){
    var  sql = `SELECT * from usertable WHERE user_openid='${openId}'`;
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
    insertUser, 
   // insertUserAddressAndPhone,
    searchUser,
    modifyUserInfo
};