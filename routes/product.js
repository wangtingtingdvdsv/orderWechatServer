const Router = require('koa-router');
const router = new Router();

var product = require('../controller/product.js');

router.get('/buyer/product/list', product.getProductList) //商品列表查询
router.get('/buyer/product/key', product.productSearchByKey) //商品搜索查询



module.exports = router;