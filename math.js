/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */

function sum(a, b) {
    return a + b;
}

function diff(a,b){
  return a-b;
}
//can module.exports only once
module.exports = { diff,sum };

