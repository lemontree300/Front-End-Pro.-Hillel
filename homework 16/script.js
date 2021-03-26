/*Создать квадрат и при помощи стрелок двигать его влево в право, вверх и вниз
Если он упирается в одну из сторон не давать ему сдвигаться, выходить за пределы сайта*/

document.body.addEventListener('keydown', moveBlock);
var block = document.querySelector('#blueRect');

function moveBlock(event) {
    console.log('moveBlock--> ', event.key);
    var blockStyle = block.getAttribute('style');
    console.log('blockStyle--> ', blockStyle);
    switch (event.key) {
        case 'ArrowRight':
            console.log('Right');
            break;
        case 'ArrowLeft':
            console.log('Left');
            break;
        case 'ArrowUp':
            console.log('Up');
            break;
        case 'ArrowDown':
            console.log('Down');
            break;
    }
}
//////////////////////////////////////////////
var hiddenBody = document.querySelector("body");
hiddenBody.setAttribute("style", "overflow: hidden");
hiddenBody.getAttribute("style");

function reallyMoveBlock(e) {
    var posLeft = block.offsetLeft;
    var posTop = block.offsetTop;
    switch (e.keyCode) {
        case 37: // влево
            if (posLeft > 0)
                block.style.marginLeft = posLeft - 10 + "px";
            break;
        case 38: // вверх
            if (posTop > 0)
                block.style.marginTop = posTop - 10 + "px";
            break;
        case 39: // вправо
            if (posLeft < document.documentElement.clientWidth - 100)
                block.style.marginLeft = posLeft + 10 + "px";
            break;
        case 40: // вниз
            if (posTop < document.documentElement.clientHeight - 100)
                block.style.marginTop = posTop + 10 + "px";
            break;
    }
}
addEventListener("keydown", reallyMoveBlock);