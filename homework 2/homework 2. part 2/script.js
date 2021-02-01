var numberOne = +prompt('Введите первое число');

var numberTwo = +prompt('Введите второе число');

console.log('numberOne--> ', numberOne);
console.log('numberTwo--> ', numberTwo);

if (numberOne === numberTwo) {
    alert('Числа одинаковые!');
} else if (numberOne < numberTwo) {
    alert(numberTwo + ' больше, а ' + numberOne + ' меньше.');
} else if (numberOne > numberTwo) {
    alert(numberOne + ' больше, а ' + numberTwo + ' меньше.');
} else {
    alert('Программа сломалась(((');
}