/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    host: '120.79.192.19',
    user: 'root',
    password: '',
    database: 'lingYunJunShi'
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//通过关键字查询商品
var getProductBykey = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key) {
        var sql, result, i, pics;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sql = 'select * from product where product_name like \'%' + key + '%\'';
                        _context.next = 3;
                        return query(sql);

                    case 3:
                        result = _context.sent;


                        console.log('**', result);

                        if (!result) {
                            _context.next = 15;
                            break;
                        }

                        i = 0;

                    case 7:
                        if (!(i < result.length)) {
                            _context.next = 15;
                            break;
                        }

                        _context.next = 10;
                        return picTable.getProductPic(result[i].product_id);

                    case 10:
                        pics = _context.sent;


                        result[i].pics = pics;

                    case 12:
                        i++;
                        _context.next = 7;
                        break;

                    case 15:
                        return _context.abrupt('return', result);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getProductBykey(_x) {
        return _ref.apply(this, arguments);
    };
}();

//通过categoryId获取商品信息


var getProductById = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(categoryId) {
        var sql, result, i, pics;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log('id', categoryId);
                        sql = 'select * from product WHERE category_type =\'' + categoryId + '\'';
                        _context2.next = 4;
                        return query(sql);

                    case 4:
                        result = _context2.sent;

                        console.log('**', result);

                        if (!(result && result[0])) {
                            _context2.next = 16;
                            break;
                        }

                        i = 0;

                    case 8:
                        if (!(i < result.length)) {
                            _context2.next = 16;
                            break;
                        }

                        _context2.next = 11;
                        return picTable.getProductPic(result[i].product_id);

                    case 11:
                        pics = _context2.sent;


                        result[i].pics = pics;

                    case 13:
                        i++;
                        _context2.next = 8;
                        break;

                    case 16:
                        return _context2.abrupt('return', result);

                    case 17:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getProductById(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var getProductList = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(categorys) {
        var i, products;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        i = 0;

                    case 1:
                        if (!(i < categorys.length)) {
                            _context3.next = 9;
                            break;
                        }

                        _context3.next = 4;
                        return getProductById(categorys[i].category_id);

                    case 4:
                        products = _context3.sent;

                        if (products) {
                            categorys[i].products = products;
                            console.log('products', products);
                        }

                    case 6:
                        i++;
                        _context3.next = 1;
                        break;

                    case 9:
                        console.log('categorys', categorys);
                        return _context3.abrupt('return', categorys);

                    case 11:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function getProductList(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

var query = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(sql) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return new Promise(function (resolve, reject) {
                            connection.query(sql, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                    //console.log("r", result);
                                }
                            });
                        });

                    case 2:
                        return _context4.abrupt('return', _context4.sent);

                    case 3:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function query(_x4) {
        return _ref4.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mysql = __webpack_require__(0);
var config = __webpack_require__(1);
var picTable = __webpack_require__(21);
var connection = mysql.createConnection(config);
connection.connect();
connection.on('error', function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
});

module.exports = {
    getProductList: getProductList,
    getProductById: getProductById,
    getProductBykey: getProductBykey
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var app = __webpack_require__(7);
var debug = __webpack_require__(32)('demo:server');
var http = __webpack_require__(33);
var path = __webpack_require__(34);

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '9006');
// app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function () {
  console.log('9006端口启动成功');
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Koa = __webpack_require__(8);
var app = new Koa();
var cors = __webpack_require__(9);

var json = __webpack_require__(10);
var onerror = __webpack_require__(11);

var koaBody = __webpack_require__(12);
var logger = __webpack_require__(13);

// const admin = require('./routes/admin')
// const category = require('./routes/category')
var comment = __webpack_require__(14);
var order = __webpack_require__(17);
var product = __webpack_require__(22);
var wechatUser = __webpack_require__(25);

// error handler
onerror(app);

app.use(koaBody());
app.use(cors());
// middlewares

app.use(json());
app.use(logger());
app.use(__webpack_require__(31)(__dirname + '/public'));

// logger
app.use(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
    var start, ms;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = new Date();
            _context.next = 3;
            return next();

          case 3:
            ms = new Date() - start;

            console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// routes
// app.use(admin.routes(), admin.allowedMethods())
// app.use(category.routes(), category.allowedMethods())
app.use(order.routes(), order.allowedMethods());
app.use(comment.routes(), comment.allowedMethods());

app.use(product.routes(), product.allowedMethods());
app.use(wechatUser.routes(), wechatUser.allowedMethods());

// error-handling
app.on('error', function (err, ctx) {
  console.error('server error', err, ctx);
});

module.exports = app;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa2-cors");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa-json");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("koa-onerror");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-body");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Router = __webpack_require__(2);
var router = new Router();

var comment = __webpack_require__(15);

router.get('/buyer/searchComment', comment.searchCommentByProductId); //商品评价查询
router.post('/buyer/createComment', comment.createComment); //商品评价创建
router.get('/buyer/commentList', comment.getCommentList); //订单评论列表


module.exports = router;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var searchCommentByProductId = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function searchCommentByProductId(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createComment = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function createComment(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var getCommentList = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, next) {
        var search;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return comment.getCommentList();

                    case 2:
                        search = _context3.sent;

                        console.log('商品评论', search);
                        ctx.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: search
                        };

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function getCommentList(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var comment = __webpack_require__(16);

module.exports = {
    searchCommentByProductId: searchCommentByProductId,
    createComment: createComment,
    getCommentList: getCommentList
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getCommentList = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var sql, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sql = 'select * from comment';
                        _context.next = 3;
                        return query(sql);

                    case 3:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getCommentList() {
        return _ref.apply(this, arguments);
    };
}();

var query = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sql) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return new Promise(function (resolve, reject) {
                            connection.query(sql, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                    //console.log("r", result);
                                }
                            });
                        });

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function query(_x) {
        return _ref2.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mysql = __webpack_require__(0);
var config = __webpack_require__(1);
var connection = mysql.createConnection(config);
connection.connect();
connection.on('error', function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
});

module.exports = {
    getCommentList: getCommentList
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Router = __webpack_require__(2);
var router = new Router();

var order = __webpack_require__(18);

router.get('/buyer/searchOrderByopenid', order.searchOrderByopenid); //订单查询
router.post('/buyer/createOrder', order.createOrder); //订单创建
router.post('/buyer/orderPay', order.orderPay); //订单支付

module.exports = router;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var searchOrderByopenid = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        var openId, search, details;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        openId = ctx.request.query.openId;

                        if (openId) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt('return');

                    case 3:
                        _context.next = 5;
                        return orderSummary.searchOrderByopenid(openId);

                    case 5:
                        search = _context.sent;

                        console.log('订单列表', search);
                        _context.next = 9;
                        return orderDetails.getOrderDetails(search.order_id);

                    case 9:
                        details = _context.sent;

                        console.log('^details^', details);
                        search.orderDetailList = details;
                        ctx.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: search
                        };

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function searchOrderByopenid(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createOrder = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        var data, items, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        //订单创建
                        data = ctx.request.body;

                        if (data.userName || data.userAddress || data.userPhone || data.userOpenid || data.deliveryTime || data.items) {
                            _context2.next = 3;
                            break;
                        }

                        return _context2.abrupt('return');

                    case 3:
                        items = data.items;
                        _context2.next = 6;
                        return orderSummary.createOrder(data);

                    case 6:
                        result = _context2.sent;

                        console.log('#result#', items);
                        items.forEach(function (item) {
                            orderDetails.insertOrderDetail(item.productId, item.productQuantity, result.insertId);
                        });

                        ctx.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: null
                        };

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function createOrder(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var orderPay = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, next) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        //订单支付
                        data = ctx.request.body;

                        if (data.userOpenid || data.orderId) {
                            _context3.next = 3;
                            break;
                        }

                        return _context3.abrupt('return');

                    case 3:
                        _context3.next = 5;
                        return orderSummary.orderPay(data.userOpenid, data.orderId);

                    case 5:
                        ctx.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: null
                        };

                    case 7:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function orderPay(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var orderSummary = __webpack_require__(19);
var orderDetails = __webpack_require__(20);


module.exports = {
    searchOrderByopenid: searchOrderByopenid,
    createOrder: createOrder,
    orderPay: orderPay
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var searchOrderByopenid = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(openId) {
        var sql, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sql = 'select * from ordersummary  WHERE user_openid=\'' + openId + '\'';
                        _context.next = 3;
                        return query(sql);

                    case 3:
                        result = _context.sent;
                        return _context.abrupt('return', result[0]);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function searchOrderByopenid(_x) {
        return _ref.apply(this, arguments);
    };
}();

var createOrder = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var sql, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        sql = 'INSERT INTO ordersummary( user_name , user_address ,  user_phone ,  user_openid, delivery_time) values (\'' + data.userName + '\', \'' + data.userAddress + '\', \'' + data.userPhone + '\',\'' + data.openId + '\', \'' + data.deliveryTime + '\')';
                        _context2.next = 3;
                        return query(sql);

                    case 3:
                        result = _context2.sent;
                        return _context2.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function createOrder(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var orderPay = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userOpenid, orderId) {
        var sql, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        //订单支付
                        sql = 'UPDATE ordersummary SET  pay_status=\'1\' WHERE  order_id =\'' + orderId + '\' AND user_openid=' + userOpenid;

                        console.log('sql', sql);
                        _context3.next = 4;
                        return query(sql);

                    case 4:
                        result = _context3.sent;
                        return _context3.abrupt('return', result);

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function orderPay(_x3, _x4) {
        return _ref3.apply(this, arguments);
    };
}();

var query = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(sql) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return new Promise(function (resolve, reject) {
                            connection.query(sql, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                    //console.log("r", result);
                                }
                            });
                        });

                    case 2:
                        return _context4.abrupt('return', _context4.sent);

                    case 3:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function query(_x5) {
        return _ref4.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mysql = __webpack_require__(0);
var config = __webpack_require__(1);
var connection = mysql.createConnection(config);
connection.connect();
connection.on('error', function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
});

module.exports = {
    searchOrderByopenid: searchOrderByopenid,
    createOrder: createOrder,
    orderPay: orderPay
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var insertOrderDetail = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(productId, productQuantity, orderId) {
        var product, sql, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return productTable.getProductById(productId);

                    case 2:
                        product = _context.sent;

                        console.log('product', product);
                        sql = 'INSERT INTO orderdetails(order_id, product_id , product_name, product_icon, product_price,product_quantity, seller_phone) values (\'' + orderId + '\', \'' + productId + '\', \'' + product.product_name + '\',\'' + product.product_icon + '\', \'' + product.product_price + '\',\'' + productQuantity + '\', \'' + product.seller_phone + '\')';

                        console.log('sql:', sql);
                        _context.next = 8;
                        return query(sql);

                    case 8:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function insertOrderDetail(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var getOrderDetails = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(orderId) {
        var sql, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        //获取订单详情
                        sql = 'select * from orderdetails WHERE order_id =\'' + orderId + '\'';
                        _context2.next = 3;
                        return query(sql);

                    case 3:
                        result = _context2.sent;
                        return _context2.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getOrderDetails(_x4) {
        return _ref2.apply(this, arguments);
    };
}();

var query = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sql) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return new Promise(function (resolve, reject) {
                            connection.query(sql, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                    //console.log("r", result);
                                }
                            });
                        });

                    case 2:
                        return _context3.abrupt('return', _context3.sent);

                    case 3:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function query(_x5) {
        return _ref3.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mysql = __webpack_require__(0);
var config = __webpack_require__(1);
var productTable = __webpack_require__(3);
var connection = mysql.createConnection(config);
connection.connect();
connection.on('error', function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
});

module.exports = {
    insertOrderDetail: insertOrderDetail,
    getOrderDetails: getOrderDetails
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getProductPic = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(productId) {
        var sql, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sql = 'select * from product_pic where productId = ' + productId;
                        _context.next = 3;
                        return query(sql);

                    case 3:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getProductPic(_x) {
        return _ref.apply(this, arguments);
    };
}();

var query = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sql) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return new Promise(function (resolve, reject) {
                            connection.query(sql, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                    //console.log("r", result);
                                }
                            });
                        });

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function query(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mysql = __webpack_require__(0);
var config = __webpack_require__(1);
var connection = mysql.createConnection(config);
connection.connect();
connection.on('error', function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
});

module.exports = {
    getProductPic: getProductPic
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Router = __webpack_require__(2);
var router = new Router();

var product = __webpack_require__(23);

router.get('/buyer/product/list', product.getProductList); //商品列表查询
router.get('/buyer/product/key', product.productSearchByKey); //商品搜索查询


module.exports = router;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var product = __webpack_require__(3);
var categoryTable = __webpack_require__(24);

var getProductList = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        var sort, category, search, products;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        //商品列表查询
                        sort = ctx.request.query.sort;
                        _context.next = 3;
                        return categoryTable.getAllCategory();

                    case 3:
                        category = _context.sent;
                        _context.next = 6;
                        return product.getProductList(category);

                    case 6:
                        search = _context.sent;

                        console.log('商品列表', search);
                        products = search.filter(function (categoryProducts) {
                            return categoryProducts.products;
                        });

                        ctx.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: products
                        };

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getProductList(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var productSearchByKey = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        var key, products;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        //商品搜索查询
                        console.log('query', ctx.request.query);
                        key = ctx.request.query.key;

                        console.log('key', key);

                        if (!(key == '')) {
                            _context2.next = 5;
                            break;
                        }

                        return _context2.abrupt('return');

                    case 5:
                        _context2.next = 7;
                        return product.getProductBykey(key);

                    case 7:
                        products = _context2.sent;


                        ctx.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: products
                        };

                    case 10:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function productSearchByKey(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

module.exports = {
    getProductList: getProductList,
    productSearchByKey: productSearchByKey
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getAllCategory = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var sql, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sql = 'select * from category';
                        _context.next = 3;
                        return query(sql);

                    case 3:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getAllCategory() {
        return _ref.apply(this, arguments);
    };
}();

var query = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sql) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return new Promise(function (resolve, reject) {
                            connection.query(sql, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                    //console.log("r", result);
                                }
                            });
                        });

                    case 2:
                        return _context2.abrupt('return', _context2.sent);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function query(_x) {
        return _ref2.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mysql = __webpack_require__(0);
var config = __webpack_require__(1);
var connection = mysql.createConnection(config);
connection.connect();
connection.on('error', function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
});

module.exports = {
    getAllCategory: getAllCategory
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Router = __webpack_require__(2);
var router = new Router();

var wechatUser = __webpack_require__(26);

router.get('/wechat/login', wechatUser.login); //登录
router.get('/user/info/search', wechatUser.searchUserInfo); //查询
router.post('/user/info/modify', wechatUser.modifyUserInfo); //修改

router.get('/q/w', function (ctx, next) {
    console.log('1111111111111');
    ctx.status = 200;
    ctx.body = {
        code: 0,
        msg: 'success',
        data: 'hhhhhhhhhhh'
    };
});

module.exports = router;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getOpenIdAndSessionKey = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(code, encryptedData, iv) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return axios.get('https://api.weixin.qq.com/sns/jscode2session', {
                            params: {
                                grant_type: 'authorization_code',
                                appid: appId, //小程序的唯一标识
                                secret: secret, //小程序的app secret
                                js_code: code // code
                            }
                        });

                    case 2:
                        return _context4.abrupt('return', _context4.sent);

                    case 3:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function getOpenIdAndSessionKey(_x7, _x8, _x9) {
        return _ref4.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var axios = __webpack_require__(27);

var _require = __webpack_require__(28),
    WXBizDataCrypt = _require.WXBizDataCrypt;

var userTbale = __webpack_require__(30);

var appId = 'wx33fdb2328d611917';
var secret = '6c2ab9894fd10a107642e37b62b13b28';
// const data = { 
//     openId: 'oE3wM5Cv9iT52lJjGFGl6ZRnslWk',
//     nickName: '不畏将来，不念过往',
//     gender: 2,
//     language: 'zh_CN',
//     city: 'Xi\'an',
//     province: 'Shaanxi',
//     country: 'China',
//     avatarUrl:
//     'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL82pR12tiaOkBIGYiaMfPYRe3zEa8YfwGC4UiaMmATA2iazjfe8egQu1eKOh91jXbia7Egia7OymKuNq6w/132',
//     watermark: { timestamp: 1541386698, appid: 'wx33fdb2328d611917' } 
// }

var modifyUserInfo = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        //信息修改接口
                        data = ctx.request.body;

                        console.log('data', data);
                        userTbale.modifyUserInfo(data);
                        ctx.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: null
                        };

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function modifyUserInfo(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var searchUserInfo = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        var openId, search;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        //信息查询接口
                        openId = ctx.query.openId;
                        _context2.next = 3;
                        return userTbale.searchUser(openId);

                    case 3:
                        search = _context2.sent;

                        ctx.status = 200;
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: search
                        };

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function searchUserInfo(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var login = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, next) {
        var encryptedData, code, iv, data, openid, session_key, pc, info, result, search;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        //登录接口
                        encryptedData = ctx.query.encryptedData;
                        code = ctx.query.code;
                        iv = ctx.query.iv;
                        _context3.next = 5;
                        return getOpenIdAndSessionKey(code);

                    case 5:
                        data = _context3.sent;
                        openid = data.data.openid;
                        session_key = data.data.session_key;
                        pc = new WXBizDataCrypt(appId, session_key);
                        info = pc.decryptData(encryptedData, iv);
                        _context3.next = 12;
                        return userTbale.insertUser(info);

                    case 12:
                        result = _context3.sent;
                        _context3.next = 15;
                        return userTbale.searchUser(openid);

                    case 15:
                        search = _context3.sent;

                        ctx.status = 200;
                        //console.log('se', search)
                        ctx.body = {
                            code: 0,
                            msg: 'success',
                            data: search
                        };

                    case 18:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function login(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

module.exports = {
    login: login,
    searchUserInfo: searchUserInfo,
    modifyUserInfo: modifyUserInfo
};

/*
session_key: 'F/ih5VxXSpctlET1y5awgA==',
openid: 'oE3wM5Cv9iT52lJjGFGl6ZRnslWk',
encryptedData: 'vLvtI06lwWKXSNqLyoCGuECv252v4RPWgJPcq/TyBkV9dMdtZKF+sXrVVq7hK3cjm2TwSSUMGhYaF+2sbkyIKEFbZh0Uth/rpdNZJLTfTiXb/X87Ibi5dExkPfEanVpzriYKjWcKh/PE2bQ7kEAxIBU5v6z0eT84SEO8EGZ9TBxcPwkCXq5yznO3KI4ICG5l38g0WTNA6VbMdcAEwEHFBDor0RNZeQbAWEAfi5YohoejTOSLcvH4VUmJTCjXDZaV9yrBdPOcWrzNnYy6JtqLs/b6CqWj7HLkk09OFM5YuRLg2Xd+mchP0RUwhs4hOIIqEjBn1LdBwa3HO/rTWdFvTyQiRKOBwAzVwPV5Ra6DvcbXrmON5N5uUgDxLoUpMsb3ttGFwKESQPc4TYyF8N9gx4+QOzv6OerL+yJnCyF7Wu1mFBAaHwzEpm3bNXrgjs9xwLaW19X4UPxmqqQeKeQEUNXTaPrIPIcLtwvCwiQw+2E51Kp7J0U0eCMJl7xNfSAK',
iv:'IbzKjyk1BMQQ6llgbG6GAw==' 
*/

/*
{ 
    openId: 'oE3wM5Cv9iT52lJjGFGl6ZRnslWk',
    nickName: '不畏将来，不念过往',
    gender: 2,
    language: 'zh_CN',
    city: 'Xi\'an',
    province: 'Shaanxi',
    country: 'China',
    avatarUrl:
    'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL82pR12tiaOkBIGYiaMfPYRe3zEa8YfwGC4UiaMmATA2iazjfe8egQu1eKOh91jXbia7Egia7OymKuNq6w/132',
    watermark: { timestamp: 1541386698, appid: 'wx33fdb2328d611917' } 
}
*/

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = __webpack_require__(29);

function WXBizDataCrypt(appId, sessionKey) {
  this.appId = appId;
  this.sessionKey = sessionKey;
}

WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
  // base64 decode
  var sessionKey = new Buffer(this.sessionKey, 'base64');
  encryptedData = new Buffer(encryptedData, 'base64');
  iv = new Buffer(iv, 'base64');
  console.log("@@@@@@@@@@@@@@@@@@@@@@");
  try {
    // 解密
    console.log('******************');
    var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
    // 设置自动 padding 为 true，删除填充补位
    console.log('++++++++++++++++++=');
    console.log('decipher', decipher);
    decipher.setAutoPadding(true);
    var decoded = decipher.update(encryptedData, 'binary', 'utf8');

    decoded += decipher.final('utf8');
    console.log('&&&&&&&&&&&&&7', decoded);
    decoded = JSON.parse(decoded);
  } catch (err) {
    console.log('err', err);
    throw new Error('Illegal buffer');
  }

  if (decoded.watermark.appid !== this.appId) {
    console.log('decoded.watermark.appid', decoded.watermark.appid);
    console.log('this.appId', this.appId);
    throw new Error('Illegal Buffer');
  }

  return decoded;
};

module.exports = {
  WXBizDataCrypt: WXBizDataCrypt
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var insertUser = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var dataInfo, sql, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return searchUser(data.openId);

                    case 2:
                        dataInfo = _context.sent;

                        if (!(dataInfo.length != 0)) {
                            _context.next = 10;
                            break;
                        }

                        _context.t0 = console;
                        _context.next = 7;
                        return searchUser(data.openId);

                    case 7:
                        _context.t1 = _context.sent;

                        _context.t0.log.call(_context.t0, _context.t1);

                        return _context.abrupt('return');

                    case 10:
                        sql = 'INSERT INTO usertable( user_name , user_openid, user_icon, user_gender) values (\'' + data.nickName + '\', \'' + data.openId + '\', \'' + data.avatarUrl + '\',\'' + data.gender + '\')';
                        _context.next = 13;
                        return query(sql);

                    case 13:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function insertUser(_x) {
        return _ref.apply(this, arguments);
    };
}();

// async function insertUserAddressAndPhone(address, phone) {
//     var sql = `INSERT INTO usertable(user_address, user_phone) values ('${address}', '${phone}')`;
//     let result = await query(sql);
//     console.log('insert2', result);
// }

var modifyUserInfo = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        sql = 'UPDATE usertable SET user_name=\'' + data.userName + '\',  user_gender=\'' + data.userGender + '\', user_phone=\'' + data.userPhone + '\' WHERE user_openid =\'' + data.openId + '\'';
                        _context2.next = 3;
                        return query(sql);

                    case 3:
                        result = _context2.sent;
                        return _context2.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function modifyUserInfo(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var searchUser = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(openId) {
        var sql, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        sql = 'SELECT * from usertable WHERE user_openid=\'' + openId + '\'';
                        _context3.next = 3;
                        return query(sql);

                    case 3:
                        result = _context3.sent;
                        return _context3.abrupt('return', result);

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function searchUser(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

var query = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(sql) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return new Promise(function (resolve, reject) {
                            connection.query(sql, function (err, result) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                    //console.log("r", result);
                                }
                            });
                        });

                    case 2:
                        return _context4.abrupt('return', _context4.sent);

                    case 3:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function query(_x4) {
        return _ref4.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
var mysql = __webpack_require__(0);
var config = __webpack_require__(1);
var connection = mysql.createConnection(config);
connection.connect();
connection.on('error', function (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
});

module.exports = {
    insertUser: insertUser,
    // insertUserAddressAndPhone,
    searchUser: searchUser,
    modifyUserInfo: modifyUserInfo
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);