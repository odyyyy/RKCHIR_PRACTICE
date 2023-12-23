"use strict"


function generate_simple_captcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    let length = 6;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
    }

    return captcha;
}

function generate_numeric_captcha() {
    let num_1 = Math.floor(Math.random() * 50) + 1;
    let num_2 = Math.floor(Math.random() * 50) + 1;
    let result = num_1 + num_2;

    let numeric_captcha = {
        result,
        captcha: `${num_1} + ${num_2}`
    }

    return numeric_captcha;

}

let string_captcha = generate_simple_captcha();

let numeric_captcha = generate_numeric_captcha();

let captcha_text = document.querySelector(".captcha-text");
let input_text = document.querySelector(".captcha-input");
let button = document.querySelector(".form-button");

let PATH_TO_INDEX = '../index.html'


captcha_text.innerText = string_captcha;

button.addEventListener('click', function() {
    let user_input = input_text.value;
    event.preventDefault();
    if (user_input ==  string_captcha) {
        alert("Добро пожаловать");
        window.location.href = PATH_TO_INDEX;
        return;
    }
    else{
        event.preventDefault();
        captcha_text.innerText = numeric_captcha.captcha;
        user_input = input_text.value;
        if(user_input == numeric_captcha.result){
            alert("Добро пожаловать");
            window.location.href = PATH_TO_INDEX;
            return;
        }
        else{
            alert("Проверка не пройдена");
        }
    }
});
