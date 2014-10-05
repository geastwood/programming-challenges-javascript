var Matrix = require('simple-matrix');

var complement = function(container, set) {
    return container.filter(function(item) {
        if (set.indexOf(item) === -1) {
            return true;
        }
        return false;
    });
};

var numbers = {
    one:    ['top', 'middle', 'bottom', 'leftTop', 'leftBottom'],
    two:    ['leftTop', 'rightBottom'],
    three:  ['leftTop', 'leftBottom'],
    four:   ['top', 'bottom', 'leftBottom'],
    five:   ['rightTop', 'leftBottom'],
    six:    ['rightTop'],
    seven:  ['leftTop', 'middle', 'bottom', 'leftBottom'],
    eight:  [],
    nine:   ['leftBottom'],
    zero:   ['middle']
};

var defs = function(s) {
    return {
        top:            [1                  , 2    , 'h'],
        middle:         [(2 * s + 4) / 2    , 2    , 'h'],
        bottom:         [2 * s + 3          , 2    , 'h'],
        leftTop:        [2                  , 1    , 'v'],
        leftBottom:     [(2 * s + 4) / 2 + 1, 1    , 'v'],
        rightTop:       [2                  , 2 * s, 'v'],
        rightBottom:    [(2 * s + 4) / 2 + 1, 2 * s, 'v']
    };
};

// TODO refactor
var adaptor = function(field, def, end) {
    var direction = def.pop(), count = 0, size = field.size();

    if (direction === 'h') {
        field.row(def[0]).forEach(function(item, j) {
            if ((j + 1) >= def[1] && count < size.n - 2) {
                field.position(def[0], j + 1, '-');
                count++;
            }
        });
    }

    if (direction === 'v') {
        field.column(def[1]).forEach(function(item, j) {
            if ((j + 1) >= def[0] && count < end) {
                field.position(j + 1, def[1], '|');
                count++;
            }
        });
    }
};

var lcd = function(size) {

    return function(number) {
        var field = new Matrix(2 * size + 3, 2 * size, ' ');
        var p = defs(size);
        complement(Object.keys(p), numbers[number]).forEach(function(type) {
            adaptor(field, p[type], size);
        });
        var rst = field.map(function(line) {
            return line.join('');
        }).join('\n');
        console.log(rst);
    };
};

var lcd2 = lcd(2);
var lcd3 = lcd(3);
lcd2('one');
lcd3('one');
