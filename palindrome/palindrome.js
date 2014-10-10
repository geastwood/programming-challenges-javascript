// this version is not so good, since it could have cut the time to half
var palindrome = function(str) {
    // clean input,
    //  1. strip out all non-character
    //  2. all to lower case
    str = str.replace(/[^a-zA-Z]/ig, '');
    str = str.toLowerCase();

    return str.split('').every(function(letter, index) {
        return letter === str[str.length - 1 - index];
    });
};

var collection = [
    'eye',
    'Amor, Roma',
    'A man, a plan, a canal: Panama',
    "Race car",
    "Taco cat",
    "No 'x' in 'Nixon'",
    "Eva, can I stab bats in a cave?",
    "Mr. Owl ate my metal worm",
    "Was it a car or a cat I saw?",
    "A nut for a jar of tuna",
    "Do geese see God?",
    "Ma is as selfless as I am",
    "A Toyota's a Toyota"
];

var check = function(name, fn) {

    var status = collection.every(function(sen) {
        return fn(sen);
    });

    console.log('"%s" %s the check', name, 'PASS');
};

check('double version', palindrome);
