//1) Расшифровать значение и вывести на экран
const secret = {
    "!": [17],
    " ": [5, 10],
    "e": [1, 15],
    "o": [4, 8],
    "h": [0],
    "l": [2, 3, 13, 14, 16],
    "f": [6],
    "r": [7],
    "m": [9],
    "H": [11],
    "i": [12],
};

var superSecret = secret;

var listSecret = function () {
    for (var p in this.superSecret)
        console.log(p + ': ' + this.superSecret[p]);
};
listSecret();

/*var documentListSecret = function () {
    for (var q in this.superSecret) {
        document.write(`${this.superSecret.q}: ${this.superSecret[q]}</br>`);
    }
};
documentListSecret();*/