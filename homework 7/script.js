//1) Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел. (Сделать через map)
var abc = [-1, 2, -3, 4, 5, -6, 7, -8, 9, 10];
var positiveAbc = abc.filter(function (a) {
	return a > 0;
});
console.log(positiveAbc);
var squareRootAbc = positiveAbc.map(Math.sqrt);
console.log(squareRootAbc);

//2)Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
var def = [-1, 1, 4, 5, 8, 7, 0, 4];
//var numDef = def.reduce(function (value, item) {
//	return value + item;
//});
//console.log(numDef);
//console.log(def.length);

var numDef = def.reduce(function (value, item) {
	if (value[1] < 10) {
		return false;
	} else {
		return [value[0] + 1, value[1] + item];
	}
});
console.log(numDef);
