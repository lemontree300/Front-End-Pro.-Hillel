/*с появлением попапа сравнивать сколько осталось до конца акции и показывать количество часов, и каждую секунду обновлять время.
При нажатии Купить скрывать попап,
При нажатии отмена скрывать попап но показывать через 10 секунд
Использовать setTimeout setInterval*/

var salePopupBuy = document.querySelector('.sale-popup-buy');
var salePopupClose = document.querySelector('.sale-popup-close');

salePopupBuy.addEventListener('click', popupBuy);
salePopupClose.addEventListener('click', popupClose);

function popupBuy() {
    localStorage.setItem('Sale', true);
    localStorage.setItem('ShowSalePopup', JSON.stringify({ isShow: false, time: 0 }));
    var info = JSON.parse(localStorage.getItem('ShowSalePopup'));
    console.log(info);
    document.querySelector('.timer').hidden = true;
}

function popupClose() {
    localStorage.setItem('Sale', false);
    localStorage.setItem('ShowSalePopup', JSON.stringify({ isShow: true, time: 15000 }));
    var info2 = JSON.parse(localStorage.getItem('ShowSalePopup'));
    console.log(info2);
    document.querySelector('.timer').hidden = true;
    setTimeout(() => { document.querySelector('.timer').hidden = false; }, 10000);
}

var countDownDate = new Date("Apr 20, 2021 00:00:00").getTime();
var timerFunction = setInterval(function () {
    var currentDate = new Date().getTime();
    var leftTime = countDownDate - currentDate;
    var days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((leftTime % (1000 * 60)) / 1000);
    document.getElementById("timerID").innerHTML = days + " : " + hours + " : "
        + minutes + " : " + seconds;
    if (leftTime < 0) {
        clearInterval(timerFunction);
        document.getElementById("timerID").innerHTML = "ВРЕМЯ ВЫШЛО";
    }
}, 500);