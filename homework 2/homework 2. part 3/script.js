var numberOne = +prompt('Введите первое число (это километры)');

var numberTwo = +prompt('Введите второе число (это футы)');

numberOne = numberOne * 1000;
numberTwo = numberTwo / 3.2808;

console.log('numberOne--> ', numberOne);
console.log('numberTwo--> ', numberTwo);

if (numberOne === numberTwo) {
    alert('Числа одинаковые!');
} else if (numberOne < numberTwo) {
    alert('Второе число (то, что футы) больше, а первое (то, что километры) - меньше.');
} else if (numberOne > numberTwo) {
    alert('Первое число (то, что километры) больше, а второе (то, что футы) - меньше.');
} else {
    alert('Программа сломалась(((');
}