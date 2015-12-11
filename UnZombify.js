var UnZombify = function () {
};

UnZombify.prototype.rule_1 = function(input) {
    //1. lower-case "r" at the end of words replaced with "rh".
    return input.replace(/rh\b/g, 'r');
};
UnZombify.prototype.rule_2 = function(input) {
    // 2. an "a" or "A" by itself will be replaced with "hra".
    // CHANGED -- an "a" or "A" is replaced with "hra".Edited to be easier.
    return input.replace(/hra/ig, 'a');
};
UnZombify.prototype.rule_3 = function(input) {
    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    //   ".!?", followed by a space, followed by a letter.)
    return input.replace(/(?:^|(?:[.!?]\s))(\w+)/g, function (match) {
        if(match.charAt(1) == ' '){
            return match.charAt(0) + match.charAt(1) + match.charAt(2).toUpperCase() + match.substr(3);
        } else {
            return match.charAt(0).toUpperCase() + match.substr(1);
        }
    });
};
UnZombify.prototype.rule_4 = function(input) {
    // 4. "e" or "E" is replaced by "rr"
    return input.replace(/rr/g, 'e');
};
UnZombify.prototype.rule_5 = function(input) {
    // 5. "i" or "I" is replaced by "rrRr"
    return input.replace(/rrRr/g, 'i');
};
UnZombify.prototype.rule_6 = function(input) {
    // 6. "o" or "O" is replaced by "rrrRr"
    return input.replace(/rrrRr/g, 'o');
};
UnZombify.prototype.rule_7 = function(input) {
    // 7. "u" or "U" is replaced by "rrrrRr"
    return input.replace(/rrrrRr/g, 'u');
};
UnZombify.prototype.rule_8 = function(input) {
    // 8. "r" or "R' is replaced by "RR"
    //return input.replace(/R/g, 'RR').replace(/r/g, 'RR');
    return input.replace(/RR/g, 'r');
};
UnZombify.prototype.rule_9 = function(input) {
    // 9. replace ':)' with '☠'
    return input.replace(/☠/g, ':)');
};
UnZombify.prototype.rule_10 = function(input) {
    // 8. "ok" is replaced by "ECHHh"
    return input.replace(/ECHHh/g, 'ok');
};

UnZombify.prototype.unzombify = function(zombie) {

    // Cast to string
    var english = String(zombie);


    english =  this.rule_1(this.rule_8(this.rule_2(this.rule_4(this.rule_5(this.rule_10(this.rule_9(this.rule_6(this.rule_7(this.rule_3(english))))))))));

    return english;
};

module.exports = new UnZombify();