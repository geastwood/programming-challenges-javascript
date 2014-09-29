/**
 * DESCRIPTION of 3n + 1
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
var $3n1 = function $3n1(v, rst) {
    rst = rst || [];
    rst.push(v);
    if (v === 1) {
        return rst;
    }
    if (v % 2 === 0) {
        v = v/2;
    } else {
        v = v * 3 + 1;
    }
    return $3n1(v, rst);
};

var output = function(min, max) {
    var rst = [];
    while (min++ < max) {
        rst.push($3n1(min).length);
    }
    return Math.max.apply(null, rst);
};

// input are strings like   `1 10`
// output are strings like  `1 10 20`
var main = function(input) {
    var inputAsArray = input.split(/\s/);
    var rst = output.apply(null, inputAsArray);
    console.log(inputAsArray.join(' '),
                '=>',
                inputAsArray.concat(rst).join(' ') + ' (cycle length)');
};

main('1 10');
main('100 200');
main('201 210');
main('900 1000');
