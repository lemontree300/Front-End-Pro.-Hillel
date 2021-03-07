// 1) Работа с bind
//<input id="elem" value="привет">

var elem = document.getElementById('elem');

function func(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
};

// Тут напишите конструкцию с bind()
console.log(elem.value);

const resultA = func.bind(elem.value); // ? не сработало
const resultB = func.bind(elem.value); // ? не сработало

func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.