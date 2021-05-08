/*Создать окно, назвать Frontend, размеры окна 500*500.
Вставить в окно картинку (Котиков).
Окно должно двигаться каждую секунду в рандомное место.
Не должно содержать ни скролбара ни тулбара..... ничего из параметров.
Через 15 секунд окно должно закрыться*/

var openNewWindow = window.open('cat.jpg', 'Frontend', 'width=500, height=500, directories=no, location=no, menubar=no, resizable=no, scrollbars=no, toolbar=no, status=no'); // Открываю окно

setTimeout(function () { openNewWindow.close(); }, 15000); // Окно закрывается через 15 секунд

openNewWindow.moveTo(0, 0); // Я собирался двигать окно, но дальнейшие попытки не сработали

/////////////////////////////////////////////////////////

/*openNewWindow.onload = function () {
    var elemImg = openNewWindow.document.createElement('img');
    elemBody = openNewWindow.document.body;
    elemImg.setAttribute("style", "width: 100%; height: 100%; src: 'cat.jpg';");
    elemImg.getAttribute("style");
    elemBody.insertBefore(elemImg, elemBody.firstChild);
}*/ // Не сработало, картинка не добавлялась в child window, был белый экран

/////////////////////////////

/*var newWindow;

setInterval(function () {
    var RandomX = (Math.random() * 1024) + 1;
    var RandomY = (Math.random() * 768) + 1;
    var specs = "height=100px, width=100px, left=" + RandomX + ", top=" + RandomY;
    newWindow = window.open("cat.jpg", "test", specs);
}, 1000);

setInterval(function () {
    newWindow.close();
}, 15000);*/ // Не сработало

/////////////////////////////////////////////////////////////////

/*var h = setInterval(function () {
    //openNewWindow.screenTop = Math.floor((Math.random() * 100) + 1) + "px";
    //openNewWindow.screenLeft = Math.floor((Math.random() * 200) + 1) + "px";
    openNewWindow.moveTo(Math.floor((Math.random() * 100) + 1) + "px", Math.floor((Math.random() * 200) + 1) + "px");
}, 100)*/ // Не сработало