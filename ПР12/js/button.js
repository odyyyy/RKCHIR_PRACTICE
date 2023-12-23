"use strict"

let likeButton = document.getElementById('like-button');
let isLiked = false;
let originalFillColor = "white";
let newFillColor = "red";
let isDrawing = false;


function showLikeButton() {
    if (isLiked) {
        likeButton.querySelector('.like-icon path').setAttribute('fill', originalFillColor);
        isLiked = false;
    } else {
        likeButton.querySelector('.like-icon path').setAttribute('fill', newFillColor);
        isLiked = true;
    }
}

function drawLikeButton() {


    if (!isDrawing) {
        // Начинаем рисование
        isDrawing = true;
        document.addEventListener('mousemove', draw);
    } else {
        // Прекращаем рисование
        isDrawing = false;
        document.removeEventListener('mousemove', draw);
    }
}

function draw(event) {
    // Создаем свг и задаем аргументы
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'like-icon');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 512 512');

    // Создаем path для svg
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v-5.8c0-41.5 17.2-81.2 47.6 109.5");
    
    svg.appendChild(path);

    // Задаем стили
    svg.style.position = 'absolute';
    svg.style.left = (event.pageX + 5) + 'px';
    svg.style.top = (event.pageY + 5) + 'px';
    svg.style.fill = 'red';
    document.body.appendChild(svg);

    // Время через которое удалятся svgшки
    setTimeout(function ()  {
        document.body.removeChild(svg);
    }, 1000); 
}

// по клику на копку вызываем функции
likeButton.onclick = function(){
    showLikeButton();
    drawLikeButton();
}