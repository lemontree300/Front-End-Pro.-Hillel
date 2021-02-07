function isLannisterSoldier(color, lion) {
    if (color = 'red') {
        return true;
    } else if (lion = 'lion') {
        return true;
    } else {
        return false;
    }
}

var color = confirm('Цвет доспехов красный?');

if (color == true) {
    alert('это Ланнистер');
} else {
    alert('это не Ланнистер. Сейчас проверим щит.');
}

var lion = confirm('Если есть щит, то на нем изображен лев?');

if (lion == true) {
    alert('это точно Ланнистер');
} else {
    alert('это точно не Ланнистер');
}