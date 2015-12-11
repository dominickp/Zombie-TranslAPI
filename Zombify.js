var Zombify = function () {
};

Zombify.prototype.rule_1 = function (input) {
    //1. lower-case "r" at the end of words replaced with "rh".
    return input.replace(/r\b/g, function (match) {
        return match + 'h';
    });
};
Zombify.prototype.rule_2 = function (input) {
    // 2. an "a" or "A" by itself will be replaced with "hra".
    // CHANGED -- an "a" or "A" is replaced with "hra".Edited to be easier.
    return input.replace(/a/ig, 'hra');
};
Zombify.prototype.rule_3 = function (input) {
    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    //   ".!?", followed by a space, followed by a letter.)
    return input.replace(/(?:^|(?:[.!?]\s))(\w+)/g, function (match) {
        if (match.charAt(1) == ' ') {
            return match.charAt(0) + match.charAt(1) + match.charAt(2).toUpperCase() + match.substr(3);
        } else {
            return match.charAt(0).toUpperCase() + match.substr(1);
        }
    });
};
Zombify.prototype.rule_4 = function (input) {
    // 4. "e" or "E" is replaced by "rr"
    return input.replace(/e/g, 'rr').replace(/E/g, 'rr');
};
Zombify.prototype.rule_5 = function (input) {
    // 5. "i" or "I" is replaced by "rrRr"
    return input.replace(/i/g, 'rrRr').replace(/I/g, 'rrRr');
};
Zombify.prototype.rule_6 = function (input) {
    // 6. "o" or "O" is replaced by "rrrRr"
    return input.replace(/o/g, 'rrrRr').replace(/O/g, 'rrrRr');
};
Zombify.prototype.rule_7 = function (input) {
    // 7. "u" or "U" is replaced by "rrrrRr"
    return input.replace(/u/g, 'rrrrRr').replace(/U/g, 'rrrrRr');
};
Zombify.prototype.rule_8 = function (input) {
    // 8. "r" or "R' is replaced by "RR"
    //return input.replace(/R/g, 'RR').replace(/r/g, 'RR');
    return input.replace(/(?!(rh\b))r/gi, 'RR');
};
Zombify.prototype.rule_9 = function (input) {
    // 9. replace ':)' with '☠'
    return input.replace(/:\)/g, '☠');
};
Zombify.prototype.rule_10 = function (input) {
    // 8. "ok" is replaced by "ECHHh"
    return input.replace(/ok/g, 'ECHHh').replace(/OK/g, 'ECHHh').replace(/Ok/g, 'ECHHh');
};
Zombify.prototype.zombify = function (english) {

    // Cast to string
    var zombified = String(english);

    zombified = this.rule_3(this.rule_7(this.rule_6(this.rule_9(this.rule_10(this.rule_5(this.rule_4(this.rule_2(this.rule_8(this.rule_1(zombified))))))))));

    return zombified;
};

module.exports = new Zombify();