/**
 * DESCRIPTION
 *
 * Start with an integer `n`
 *  if n is even -> divide by 2
 *  if n is odd  -> multiply by 3 and add 1
 *
 *  repeat until n = 1
 *
 *  log all generated value
 *
 */
var rst = [];
var $3n1 = function $3n1(v) {
    rst.push(v);
    if (v === 1) {
        return 1;
    }
    if (v % 2 === 0) {
        v = v/2;
    } else {
        v = v * 3 + 1;
    }
    $3n1(v);
};
$3n1(22);
console.log(rst);
