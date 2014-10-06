var input = 'aaaaaaabbbbcccdddeeeeefgggggegeee';
var input1 = 'abcdefg';

var compress = function(str) {
    var rst = '', canCompress = false, counter = 1;

    rst = str.split('').reduce(function(first, current, i) {
        var rst = '';
        if (first === '') {
            rst = current;
        } else if (current === first[first.length - 1]) {
            counter += 1;
            rst = first;
        } else {
            rst = first + counter + current;
            counter = 1;
        }
        if (counter > 1) {
            canCompress = true;
        }
        if (i === str.length - 1) {
            rst += counter;
        }
        return rst;

    }, '');

    return canCompress === false ? str : rst;
};

var rst = compress(input);
var rst1 = compress(input1);
var getCount = function(str) {
    return str.split('').reduce(function(first, current) {
        var v = parseInt(current, 10);
        if (!isNaN(v)) {
            return first + v;
        }
        return first;

    }, 0);
};
console.log(rst);
console.log(input.length);
console.log(getCount(rst));
