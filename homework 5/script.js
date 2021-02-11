//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
var abc = ['a', 'b', 'c'];
var def = [1, 2, 3];
var abcdef = [...abc, ...def];

console.log(abcdef);

////////////////////////////////

var fff = ['a', 'b', 'c'];
fff.push(1, 2, 3);

console.log(fff);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
var qqq = [1, 2, 3];
var www = [4, 5, 6];
var wwwqqq = [...www, ...qqq];

console.log(wwwqqq);

////////////////////////////////

var aaa = [1, 2, 3];
aaa.unshift(4, 5, 6);
console.log(aaa);

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
var jscssjq = ['js', 'css', 'jq'];
alert(jscssjq[0]);

//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
var jscssjq2 = ['js', 'css', 'jq'];
alert(jscssjq2[2]);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
var lastMassive = [1, 2, 3, 4, 5];
var deleted = lastMassive.splice(0, 3);
console.log(deleted);