let ulElement = document.querySelector(".popular-articles-list");

let userInput = prompt("Введите содержимое для нового пункта списка:");
while (userInput !== null && userInput !== "") {

    let liElement = document.createElement("li");

    let textNode = document.createTextNode(userInput);
    liElement.appendChild(textNode);

    ulElement.appendChild(liElement);
    userInput = prompt("Введите содержимое для нового пункта списка:");
}

function addListItems() {
    const list = document.querySelector(".popular-articles-list");
    
    while (true) {
        const userInput = prompt("Введите содержимое для нового пункта списка:");

        if (userInput === null || userInput === "") {
            // Если пользователь отменил ввод или ввел пустую строку, выходим из цикла
            break;
        }

        const listItem = document.createElement("li");
        listItem.textContent = userInput;

        list.appendChild(listItem);
    }
}

addListItems();