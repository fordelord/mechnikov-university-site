let screenWidth = window.screen.width; 
let userScreen = document.body.clientWidth; 
let item1 = document.querySelector('.companies-item1');
let item2 = document.querySelector('.companies-item2');
let item3 = document.querySelector('.companies-item3');
let item4 = document.querySelector('.companies-item4');
let item5 = document.querySelector('.companies-item5');
let item6 = document.querySelector('.companies-item6');


window.onload = function() {
    item1.classList.add('item-false');
    item2.classList.add('item-false');
    item3.classList.add('item-false');
    item4.classList.add('item-false');
    item5.classList.add('item-false');
    item6.classList.add('item-false');

    if (userScreen <= 2560, userScreen != 2240, userScreen > 2240) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item5.classList.add('item-true');
        item6.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
        item5.classList.remove('item-false');
        item6.classList.remove('item-false');
    }
    if (userScreen <= 2240, userScreen != 1920, userScreen > 1920) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item5.classList.add('item-true');
        item6.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
        item5.classList.remove('item-false');
        item6.classList.remove('item-false');
    }
    if (userScreen <= 1920, userScreen != 1600, userScreen > 1600) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item5.classList.add('item-true');
        item6.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
        item5.classList.remove('item-false');
        item6.classList.remove('item-false');
    }
    if (userScreen <= 1600, userScreen != 1280, userScreen > 1280) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item5.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
        item5.classList.remove('item-false');
    }
    if (userScreen <= 1280, userScreen != 960, userScreen > 960) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item4.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
        item4.classList.remove('item-false');
    }
    if (userScreen <= 960, userScreen != 640, userScreen > 640) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item3.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
        item3.classList.remove('item-false');
    }
    if (userScreen <= 640, userScreen != 320, userScreen > 320) {
        item1.classList.add('item-true');
        item2.classList.add('item-true');
        item1.classList.remove('item-false');
        item2.classList.remove('item-false');
    }
    if (userScreen <= 320) {
        item1.classList.add('item-true');
        item1.classList.remove('item-false');
    }

    console.info("Ширина экрана", screenWidth);
    console.info("Ширина окна браузера", userScreen);
};