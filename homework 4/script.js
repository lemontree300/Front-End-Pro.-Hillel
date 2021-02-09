var multiplicationTable = ' ';
for (var a = 1; a <= 10; a++) {
    for (var b = 1; b <= 10; b++) {
        multiplicationTable += (' ' + a + "*" + b + "=" + (a * b) + ' ');
        if (a * b < 11) {
            multiplicationTable += ' ';
        }
    }
    console.log(multiplicationTable);
    multiplicationTable = ' ';
}

//////////////////////////////////////////////

var multiplicationTable = ' ';
for (var a = 1; a <= 10; a++) {
    for (var b = 1; b <= 10; b++) {
        multiplicationTable += ('  ' + a * b);
        if (a * b < 11) {
            multiplicationTable += ' ';
        }
    }
    console.log(multiplicationTable);
    multiplicationTable = ' ';
}

///////////////////////////////////////////

var multiplicationTable = ' ';
for (var a = 1; a < 11; a++) {
    for (var b = 1; b < 11; b++) {
        if (a == 0 && b > 0) {
            multiplicationTable += ' ' + b + ' ';
        } else if (b == 0 && a > 0) {
            multiplicationTable += ' ' + a + ' ';
        } else if (a > 0 && b > 0) {
            multiplicationTable += (a * b) + ' ';
        }
    }
    multiplicationTable += '\n';
}
console.log(multiplicationTable);