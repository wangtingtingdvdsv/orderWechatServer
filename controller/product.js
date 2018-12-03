const product = require('../dataBase/product.js');
const categoryTable = require('../dataBase/category.js');

var getProductList = async function(ctx, next) { //商品列表查询
    let sort = 1;
    if(ctx.request.query.sort) {
        sort = ctx.request.query.sort;
    }
     
    let category = await categoryTable.getAllCategory();
    console.log("$");
    let search = await product.getProductList(category, sort);
    console.log('商品列表', search);
    let products = search.filter(function(categoryProducts) {
        return categoryProducts.products;
    })
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: products
    }
}

var productSearchByKey = async function(ctx, next) { //商品搜索查询
    console.log('query', ctx.request.query);
    let key = ctx.request.query.key;
    console.log('key', key);
    if(key == '') {
        return;
    }
    let products = await product.getProductBykey(key);

    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: products
    }
}

module.exports = {
    getProductList,
    productSearchByKey
};