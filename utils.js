var crypto = require('crypto')

function WXBizDataCrypt(appId, sessionKey) {
  this.appId = appId
  this.sessionKey = sessionKey
}

WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
  // base64 decode
  var sessionKey = new Buffer(this.sessionKey, 'base64')
  encryptedData = new Buffer(encryptedData, 'base64')
  iv = new Buffer(iv, 'base64')
console.log("@@@@@@@@@@@@@@@@@@@@@@");
  try {
     // 解密
     console.log('******************');
    var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
    // 设置自动 padding 为 true，删除填充补位
    console.log('++++++++++++++++++=');
    console.log('decipher', decipher);
    decipher.setAutoPadding(true)
    var decoded = decipher.update(encryptedData, 'binary', 'utf8')
 
    decoded += decipher.final('utf8')
    console.log('&&&&&&&&&&&&&7', decoded);
    decoded = JSON.parse(decoded)

  } catch (err) {
    console.log('err', err);
    throw new Error('Illegal buffer')
  }

  if (decoded.watermark.appid !== this.appId) {
    console.log('decoded.watermark.appid', decoded.watermark.appid);
    console.log('this.appId', this.appId);
    throw new Error('Illegal Buffer')
  }

  return decoded
}

module.exports = {
    WXBizDataCrypt
}
