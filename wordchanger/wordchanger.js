var input = 'this is some string';

var wordchanger = function(input) {
    var vowsReg = /[aeiou]/;

    return input.split('')
        .map(function(letter) { // change letter

            var offset = 0, reset = 0;

            if (/[a-zA-Z]/.test(letter)) {
                offset = 1;
            }

            if (letter === 'z' || letter === 'Z') {
                reset = 25;
            }

            return String.fromCharCode(letter.charCodeAt(0) + offset - reset);
        }).map(function(letter) {
            if (vowsReg.test(letter)) {
                return letter.toUpperCase();
            }
            return letter;
        }).join('');
};

console.log(wordchanger(input));
