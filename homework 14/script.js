//Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия.

var importTo = document.querySelector(".pane");
elemImg = document.createElement("img");
elemImg.src = "delete.gif";
document.body.appendChild(elemImg);

elemImg.setAttribute("style", "position: relative; left: 445px; top: -375px; highth: 19px; width: 19px");
styleValue = elemImg.getAttribute("style");

elemImg.addEventListener('click', foo);
function foo() {
    importTo.setAttribute("style", "visibility: hidden");
    styleValue = importTo.getAttribute("style");
    elemImg.setAttribute("style", "visibility: hidden");
    styleValue = elemImg.getAttribute("style");
};//добавляю первую картинку и функцию скрытия

var importTo2 = document.querySelector(".pane").nextElementSibling;

var secondElemImg = elemImg.cloneNode(true);
document.body.appendChild(secondElemImg);
secondElemImg.setAttribute("style", "position: relative; left: 425px; top: -260px; highth: 19px; width: 19px");
styleValue = secondElemImg.getAttribute("style");

secondElemImg.addEventListener('click', foo2);
function foo2() {
    importTo2.setAttribute("style", "visibility: hidden");
    styleValue = importTo2.getAttribute("style");
    secondElemImg.setAttribute("style", "visibility: hidden");
    styleValue = secondElemImg.getAttribute("style");
};//добавляю вторую картинку и функцию скрытия

var importTo3 = document.querySelector(".pane").nextElementSibling.nextElementSibling;

var thirdElemImg = elemImg.cloneNode(true);
document.body.appendChild(thirdElemImg);
thirdElemImg.setAttribute("style", "position: relative; left: 405px; top: -145px; highth: 19px; width: 19px");
styleValue = thirdElemImg.getAttribute("style");

thirdElemImg.addEventListener('click', foo3);
function foo3() {
    importTo3.setAttribute("style", "visibility: hidden");
    styleValue = importTo3.getAttribute("style");
    thirdElemImg.setAttribute("style", "visibility: hidden");
    styleValue = thirdElemImg.getAttribute("style");
};//добавляю вторую картинку и функцию скрытия

