"use strict"

let likeButtons = document.querySelectorAll('.like-button');
let originalFillColor = "white";
let newFillColor = "red";

function showLikeButton(button) {
    let isLiked = button.classList.contains('liked');

    if (isLiked) {
        button.querySelector('.like-icon path').setAttribute('fill', originalFillColor);
    } else {
        button.querySelector('.like-icon path').setAttribute('fill', newFillColor);
    }

    button.classList.toggle('liked');
}

likeButtons.forEach(function (button) {
    button.onclick = function () {
        showLikeButton(button);
    }
});
