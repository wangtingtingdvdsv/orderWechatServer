const mysql = require('mysql');
const config = require('../config');
var connection = mysql.createConnection(config);

setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

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

async function modifyUserInfo(data){
    console.log("data", data);
    let sql = `UPDATE usertable SET user_address='${data.userAddress}', user_name='${data.userName}',  user_gender='${data.userGender}', user_phone='${data.userPhone}' WHERE user_openid ='${data.openId}'`;
    console.log("sql%", sql);
    let result = await query(sql);
    return result;
}

async function searchUser(openId){
    console.log("=============", openId);
    var  sql = `SELECT * from usertable WHERE user_openid='${openId}'`;
    let result = await query(sql);
    console.log("====================", result);
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
    insertUser, 
   // insertUserAddressAndPhone,
    searchUser,
    modifyUserInfo
};