var keywords = ['attitude', 'hard', 'stupid', 'smart', 'intelligence', 'hardwork', 'knowledge'];

var factor = function(word) {
    return word.toLowerCase().split('').reduce(function(first, current) {
        return first + current.charCodeAt(0) - 96;
    }, 0);
};

// var util = require('util');
keywords.forEach(function(word) {
    console.log('%s \u27AD %d', word, factor(word));
});

