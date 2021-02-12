//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
var abc = ['a', 'b', 'c'];
var def = [1, 2, 3];
var products = abc.concat(def);
console.log(products);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
var qqq = [1, 2, 3];
qqq.sort().reverse();
console.log(qqq);

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
var jscssjq = [3, 4, 1, 2, 7];
jscssjq.sort();
console.log(jscssjq);

//Дан массив [3, 4, 1, 2, 7]. создайте новый массив с чётными значениями
var jscssjq2 = [3, 4, 1, 2, 7];
var newArray = jscssjq2.filter(function (a) {
	if (a % 2 == 0) { return true; }
	else { return false; }
});
console.log(newArray);