/**
 * @language: Javascript ECMA5
 * @name: datejs
 * @description: Javascript Date Object extend
 * @version: 1.0.0
 * @author: zbm2001@aliyun.com zhoubaimin@rongcapital.cn
 * @date: 2016-8-22
 * @copyright: Copyright (c) 2008-2016, Rong data service, Inc. (http://ruixuesoft.com). All rights reserved.
 * @license: See LICENSE and https://github.com/zbm2001/datejs/blob/master/LICENSE
 * @website: https://github.com/zbm2001/
 */

(function () {

  var rs = {

    roNumber: /^\d+$/,
    roInt: /^[-+]?\d+$/,
    roFloat: /^[-+]?\d+(?:\.\d+)?$/,
    rDoubleByte: /[^\x00-\xff]/,
    roDoubleByte: /^[^\x00-\xff]+$/,
    rDoubleByteG: /([^\x00-\xff]+)/g,
    rDoubleBytesG: /([^\x00-\xff]+)/g,
    rZh: /[\u4e00-\u9fa5\uf900-\ufa2d]/,
    roZh: /^[\u4e00-\u9fa5\uf900-\ufa2d]+$/,
    roMobileNumber: /^1\d{10}$/,
    // 电话地区号
    roAreaCode: /^0(?:10|2\d|[3-9]\d{2})$/,
    // 固定电话号码
    roTelNumber: /^[1-9]\d{6,7}$/,
    // 地区编号
    roAreaNumber: /^(?:[1-6]\d{5}|(?:71|81|82)0{4})$/,
    // 身份证号
    roIdNumber: /^\d{17}[\dxX]$/,
    roEmail: /^[\w-.]+@(?:[\w-]+\.)+[a-z]+$/,
    roUrl: /^(?:[a-zA-Z]+:\/\/)?(?:\w+\.)+[a-z]+(?::\d+)?(?:\/\S*)?$/,
    roQQNumber: /^[1-9]\d{1,10}$/,
    roBloodTypeI: /^(?:[ABO]|AB)$/i,

    roHexColorI: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,

    roMonth: /^(?:0?[1-9]|1[0-2])$/,
    roWeek: /^(?:0?[1-9]|[1-4]\d|5[0-2])$/,
    roTime: /^(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/,

    roMd5: /^[a-f0-9]{32}$/,
    oRoUuidIs: {
      3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    }
  };

  //Object.keys(rs).forEach(function(rName, i, rs){
  //  if(rName.charAt(0) === 'r' && rName.charAt(1) !== 'o') return;
  //  var roName = 'ro' +  rName.slice(1),
  //      r = rs[rName],
  //      roSource = '^(?:' + r.source + ')+$',
  //      gim = '';
  //
  //  r.global && gim += 'g';
  //  r.ignoreCase && gim += 'i';
  //  r.multiline && gim += 'm';
  //
  //  rs[roName] = new RegExp(roSource, gim);
  //});
  //
  //var arrSfns = [];
  //Object.keys(rs).forEach(function(rName, i, rs){
  //  if(rName.charAt(0) === 'r'){
  //    var sfn = ': function(s){ return this.' + rName + '.test(s); }';
  //    if(rName.charAt(1) === 'o'){
  //      arrSfns.push('is' + rName.slice(2) + sfn);
  //    }
  //    else{
  //      arrSfns.push('has' + rName.slice(1) + sfn);
  //    }
  //  }
  //});
  //
  //console.log('{' + arrSfns.join(',') + '}')

  function Validator() {
  }

  Object.assign(Validator.prototype, rs, {
    /**
     * 数字
     * @param {string} s
     * @returns {boolean}
     */
    isNumber: function (s) {
      return this.roNumber.test(s);
    },

    /**
     * 整型
     * @param {string} s
     * @returns {boolean}
     */
    isInt: function (s) {
      return this.roInt.test(s);
    },

    /**
     * 浮点类型
     * @param {string} s
     * @returns {boolean}
     */
    isFloat: function (s) {
      return this.roFloat.test(s);
    },

    /**
     * 包含双字节
     * @param {string} s
     * @returns {boolean}
     */
    hasDoubleByte: function (s) {
      return this.rDoubleByte.test(s);
    },

    /**
     * 只包含双字节
     * @param {string} s
     * @returns {boolean}
     */
    isDoubleByte: function (s) {
      return this.roDoubleByte.test(s);
    },

    /**
     * 包含中文
     * @param {string} s
     * @returns {boolean}
     */
    hasZh: function (s) {
      return this.rZh.test(s);
    },

    /**
     * 只包含中文
     * @param {string} s
     * @returns {boolean}
     */
    isZh: function (s) {
      return this.roZh.test(s);
    },

    /**
     * 手机号码
     * @param {string} s
     * @returns {boolean}
     */
    isMobileNumber: function (s) {
      return this.roMobileNumber.test(s);
    },

    /**
     * 电话地区号
     * @param {string} s
     * @returns {boolean}
     */
    isAreaCode: function (s) {
      return this.roAreaCode.test(s);
    },

    /**
     * 固定电话号码
     * @param {string} s
     * @returns {boolean}
     */
    isTelNumber: function (s) {
      return this.roTelNumber.test(s);
    },

    /**
     * 中国地区代码
     * @param {string} s
     * @returns {boolean}
     */
    isAreaNumber: function (s) {
      return this.roAreaNumber.test(s);
    },

    /**
     * 身份证号
     * @param {string} s
     * @returns {boolean}
     */
    isIdNumber: function (s) {
      return this.roIdNumber.test(s) && this.isAreaNumber(s.slice(0, 6))
        && this.isDate(s.slice(6, 16))
        && s.charAt(17).toUpperCase() === checksum(s.slice(0, 17));

      function checksum(idNumber17){
        var sum = 0;
        idNumber17.split('').reverse().forEach(function( n, i ){
          sum += n * (Math.pow(2, (i + 2) - 1) % 11);
        });
        sum = (12 - sum % 11) % 11;
        return sum > 9 ? 'X' : String(sum);
      }
    },

    /**
     * email 格式
     * @param {string} s
     * @returns {boolean}
     */
    isEmail: function (s) {
      return this.roEmail.test(s);
    },

    /**
     * url 格式
     * @param {string} s
     * @returns {boolean}
     */
    isUrl: function (s) {
      return s.length < 2084 && this.roUrl.test(s);
    },

    /**
     * QQ 号
     * @param {string} s
     * @returns {boolean}
     */
    isQQNumber: function (s) {
      return this.roQQNumber.test(s);
    },

    /**
     * 血型
     * @param {string} s
     * @returns {boolean}
     */
    isBloodTypeI: function (s) {
      return this.roBloodTypeI.test(s);
    },

    /**
     * rgb256色
     * @param {string} s
     * @returns {boolean}
     */
    isHexColor: function (s) {
      return this.roHexColorI.test(s);
    },

    /**
     * 月份 1-12
     * @param {string} s
     * @returns {boolean}
     */
    isMonth: function (s) {
      return this.roMonth.test(s);
    },

    /**
     * 周数 1-52
     * @param {string} s
     * @returns {boolean}
     */
    isWeek: function (s) {
      return this.roWeek.test(s);
    },

    /**
     * 时间格式 hh:mm:ss SSS
     * @param {string} s
     * @returns {boolean}
     */
    isTime: function (s) {
      return this.roTime.test(s);
    },

    /**
     * md5加密串格式
     * @param {string} s
     * @returns {boolean}
     */
    isMd5: function (s) {
      return this.roMd5.test(s);
    },

    /**
     * uuid格式，分版本号
     * @param {string} s
     * @param {number|string} version
     * @returns {boolean}
     */
    isUuid: function (s, version) {
      var r = this.oRoUuidIs[version];
      return r && r.test(s);
    },

    /**
     * 获取字符串字节长度
     * @param {string} s
     * @returns {number}
     */
    getByteLength: function (s) {
      return s.replace(this.rDoubleByteG, "**").length;
    },

    /**
     * 获取字符串字节长度
     * @param {string} s
     * @returns {number}
     */
    getByteLength: function (s) {
      return s.replace(this.roDoubleBytesG, "$1$1").length;
    }
  });

})();