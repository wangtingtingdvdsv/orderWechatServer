const mysql = require('mysql');
const config = require('../config');
//const picTable = require('./productPicTable.js');
var connection = mysql.createConnection(config);

//通过关键字查询商品
async function getProductBykey(key) {
  
    let sql = `select * from product where product_name like '%${key}%'`;
    let result = await query(sql);
  
    // console.log('**', result);

    // if(result) {
    //     for(let i = 0; i < result.length; i++) {
    //         let pics = await picTable.getProductPic(result[i].product_id );
            
    //         result[i].pics = pics;
    //     }
    // }
    return result;
}
//通过productId获取商品信息
async function getProductByproductId(productId) {
   
    let sql =  `select * from product WHERE product_id ='${productId}'`;   
    let result = await query(sql);
    return result[0];
}


//通过categoryId获取商品信息
async function getProductById(categoryId, sort) {
    let sql;
    if(sort == 1) {
        sql = `select * from product WHERE category_type ='${categoryId}' order by product_score desc, product_price ASC`;  
    } else {
        sql = `select * from product WHERE category_type ='${categoryId}' order by  product_price ASC, product_score desc`;  
    }
   
 
    
    let result = await query(sql);


    // if(result && result[0]) {
    //     for(let i = 0; i < result.length; i++) {
    //         let pics = await picTable.getProductPic(result[i].product_id );
            
    //         result[i].pics = pics;
    //     }
    // }
    return result;
}

async function getProductNameByproductId(productId) { 
    let sql =  `select * from product WHERE product_id='${productId}'`; 
    let result = await query(sql);
    return result[0].product_name;
}

async function getProductList(categorys, sort) { //获取商品列表

    for(let i = 0; i < categorys.length; i++) {
        let products = await getProductById(categorys[i].category_id, sort);
        if(products) {
            categorys[i].products = products;
            console.log('products', products);
        }
        
       
    }
  
    return categorys;
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
    getProductList,
    getProductById,
    getProductBykey,
    getProductByproductId,
    getProductNameByproductId
};