require.include("./moduleA.js");

var page = 'subPageA'



//require.ensure 方式
/* if (page == 'subPageA') {
  require.ensure(['./subPageA'], function () {
    var subpageA = require('./subPageA')
  }, 'subPageA')
} else if (page == 'subPageB') {
  require.ensure(['./subPageB'], function () {
    var subpageA = require('./subPageB')
  }, 'subPageB')
} */


// 异步加载
require.ensure([], function () {
  // 加载第三方依赖
  var _ = require('lodash')
  _.join(['1', '2'], '3')
}, 'vendor')

export default 'pageA'