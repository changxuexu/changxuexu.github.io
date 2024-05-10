import './subPageA'
import './subPageB'

//提取公共的moduleA

import * as _ from "lodash";
console.log("At page 'A' :", _);

import $ from 'jquery'

console.log("At page 'A' :", $);

export default 'pageA'