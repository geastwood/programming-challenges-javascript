var matrix = require('simple-matrix');

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

// parse input
// return custom object containing
var parse = function(fields) {

    // rst contains collection of custom object
    // custom object contains
    //  * defs   ->  matrix dimension e.g. '4 4', '3 5', split in to array
    //  * array  ->  the matrix split to array e.g. ['*', '.', '.', '.']
    var rst = [], lines = fields.split('\n'), i = -1, defs = [], arrays = [];

    // loop once to collect all
    while(++i < lines.length) {
        if (!isNaN(parseInt(lines[i][0], 10))) {
            defs.push(lines[i].split(/\s/));
        } else {
            arrays.push(lines[i].split(''));
        }
    }

    // slice the array according to `def`
    defs.forEach(function(def) {
        var empty = [];
        rst.push({
            def: def,
            matrix: empty.concat(arrays.splice(0, def[0]))
        });
    });

    return rst;
};

// TODO possible rename
var check = function(field, m, n) {

    // construct the neighbors
    var neighbors = [
        [m - 1, n - 1], [m - 1, n], [m - 1, n + 1],
        [    m, n - 1], [    m, n], [    m, n + 1],
        [m + 1, n - 1], [m + 1, n], [m + 1, n + 1]
    ], size = field.size();

    // if it's mine on that position, return it
    // if not calculate the value
    if (field.position(m + 1, n + 1) === '*') {
        return '*';
    } else {
        // first filter out if element at border/corner, then sum up mines around it
        return neighbors.filter(function(position) {
            return (position[0] >= 0 && position[1] >= 0) && (position[0] < size.m && position[1] < size.m);
        }).reduce(function(prev, current) {
            return prev + (field.position(current[0] + 1, current[1] + 1) === '*' ? 1 : 0);
        }, 0);
    }
};

// field has been mixed in with `matrix` methods
var minesweeper = function(field) {

    // init a same dimension matrix for result
    var rst = new matrix(field.size().m, field.size().n, 0);

    // loop the matrix to determine each position's value, mine or count
    rst.loop(function(m, n) {
        this.position(m, n, check(field, m - 1, n - 1));
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
