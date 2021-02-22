//1) Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
var abc = 'aaa bbb ccc';

var abcBbb = abc.substr(4, 3);
console.log(abcBbb);

var abcBBB = abc.substring(4, 7);
console.log(abcBBB);

var abcBBBbbb = abc.slice(4, 7);
console.log(abcBBBbbb);

//2) 'я учу javascript!' Преобразуйте первую букву строки в верхний регистр.
var studyJavascript = 'я учу javascript!';
var studyJavascriptUp = studyJavascript.slice(0, 1).toUpperCase() + studyJavascript.slice(1);
console.log(studyJavascriptUp);

//3) Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
var testText = 'var_test_text';
var hello = testText.split('_').join(' ');
var helloHello = hello.split(' ');

for (a = 0; a < helloHello.length; a++) {
    helloHello[a] = helloHello[a].slice(0, 1).toUpperCase() + helloHello[a].slice(1);
}

var helloHelloHello = helloHello.join(' ');
var helloHelloHelloHello = helloHelloHello.slice(0, 1).toLowerCase() + helloHelloHello.slice(1);

console.log(helloHelloHelloHello.split(' ').join(''));

//4) Вывести в консоль рандомное число от 0 до 50
var xxxxxx = Math.round((Math.random() * 50) + 0);
console.log(xxxxxx);
