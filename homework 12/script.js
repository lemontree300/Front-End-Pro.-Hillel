/* https://prnt.sc/10ds2uy
В JS создать блок с стилями.... Много стилей не делайте.... Нужно вставить класс через
атрибут, и поместите туда с CSS класс для стилизации.
логотип
Заголовок
Под заголовок
Текст
Так же создать*/

var articleDiv = document.querySelector("div.article");
articleDiv.setAttribute("style", "width: 609px; height: 454px; background-color: #f6f6f6; margin: 0 auto; border: 1px solid grey; padding: 58px 150px 84px 133px");
styleValue = articleDiv.getAttribute("style");

var elemImg = document.createElement("img");
elemImg.src = "picture.png";
articleDiv.appendChild(elemImg);

var elemH2 = document.createElement("h2");
var elemH2Text = document.createTextNode("Создание сайта");
elemH2.appendChild(elemH2Text);
articleDiv.appendChild(elemH2);
elemH2.setAttribute("style", "font-size: 200%;");
styleValue = elemH2.getAttribute("style");

var post = `<br>` + `Руководитель отдела маркетинга компании "Sticker Wall".` + `<br>` + `<br>` +
    `Спасибо команде за качественно проделанную работу. Сайт был сдан в оговоренные сроки и без единого бага.` + `<br>` +
    `Рад, что друзья посоветовали именно Вас!`;

var elemP = document.createElement("p");
elemP.innerHTML = post;
articleDiv.appendChild(elemP);

/*var elemP = document.createElement("p");
var elemPText = document.createTextNode(`Руководитель отдела маркетинга компании "Sticker Wall"`);
elemP.appendChild(elemPText);
articleDiv.appendChild(elemP);

var elemP2 = document.createElement("p");
var elemP2Text = document.createTextNode("Спасибо команде за качественно проделанную работу. Сайт был сдан в оговоренные сроки и без единого бага.");
elemP2.appendChild(elemP2Text);
articleDiv.appendChild(elemP2);

var elemP3 = document.createElement("p");
var elemP3Text = document.createTextNode("Рад, что друзья посоветовали именно Вас!");
elemP3.appendChild(elemP3Text);
articleDiv.appendChild(elemP3);*/