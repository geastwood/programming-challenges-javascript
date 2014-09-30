var matrix = require('simple-matrix');

// parse input
// return custom object containing
var input = '' +
    '4 4'       + '\n' +
    '*...'      + '\n' +
    '....'      + '\n' +
    '.*..'      + '\n' +
    '....'      + '\n' +
    '3 5'       + '\n' +
    '**...'     + '\n' +
    '.....'     + '\n' +
    '.*...'     ;

var parse = function(fields) {
    // rst contains collection of custom object
    var rst = [], lines = fields.split('\n'), i = -1, defs = [], arrays = [];

    while(++i < lines.length) {
        if (!isNaN(parseInt(lines[i][0], 10))) {
            defs.push(lines[i].split(/\s/));
        } else {
            arrays.push(lines[i].split(''));
        }
    }

    defs.forEach(function(def) {
        var empty = [];
        rst.push({
            def: def,
            matrix: empty.concat(arrays.splice(0, def[0]))
        });
    });

    return rst;
};

var check = function(field, m, n) {
    var neighbors = [
        [m - 1, n - 1], [m - 1, n], [m - 1, n + 1],
        [    m, n - 1], [    m, n], [    m, n + 1],
        [m + 1, n - 1], [m + 1, n], [m + 1, n + 1]
    ], size = field.size();
    if (field.position(m + 1, n + 1) === '*') {
        return '*';
    } else {
        return neighbors.filter(function(position) {
            return (position[0] >= 0 && position[1] >= 0) && (position[0] <= size.m - 1 && position[1] <= size.m - 1);
        }).reduce(function(prev, current) {
            return prev + (field.position(current[0] + 1, current[1] + 1) === '*' ? 1 : 0);
        }, 0);
    }
};

// field has been mixed in with `matrix` methods
var minesweeper = function(field) {

    var rst = new matrix(field.size().m, field.size().n, 0);

    rst.forEach(function(row, i) {
        row.forEach(function(item, j) {
            rst.position(i + 1, j + 1, check(field, i, j));
        });
    });

    return rst;
};

var output = function(input) {

    parse(input).forEach(function(item, i) {
        console.log('Field #' + (i + 1) + ':');
        minesweeper(matrix(item.matrix)).forEach(function(line) {
            console.log(line.join(''));
        });
        console.log('\n');
    });

};

console.log(input, '\n');
output(input);
