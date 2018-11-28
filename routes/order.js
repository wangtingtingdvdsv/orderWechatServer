const Router = require('koa-router');
const router = new Router();

var order = require('../controller/order.js');

router.get('/buyer/searchOrderByopenid', order.searchOrderByopenid) //订单查询
router.post('/buyer/createOrder', order.createOrder) //订单创建
router.post('/buyer/orderPay', order.orderPay) //订单支付

module.exports = router;

