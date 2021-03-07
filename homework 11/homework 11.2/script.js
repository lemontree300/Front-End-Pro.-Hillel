// 2) Работа с call
//<input id="elem" value="привет">

var elem = document.getElementById('elem');

function func() {
    alert(this.value);
}

const result1 = func.call(elem); //тут должно вывести value инпута

// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.