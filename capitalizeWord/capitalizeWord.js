var input = [
    'argument goes here',
    'ipsam3 d4ebitis itaqu!e repudiandae.',
    'hello world'
];

var capitalize = function(str) {
    return str.split(' ').map(function(word) {
        return word.split('').map(function(letter, i) {
            if (i === 0) {
                return letter.toUpperCase();
            }
            return letter;
        }).join('');
    }).join(' ');
};

var output = function(input) {
    input.forEach(function(sen) {
        console.log(capitalize(sen));
    });
};

output(input);
