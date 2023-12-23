let cartTotal = 0;

let cart = [

];


document.addEventListener('DOMContentLoaded', function () {
    makeListItemsDraggable();
    makeCartDroppable();
});

function makeListItemsDraggable() {
    let products = document.querySelectorAll('.draggable .product-to-add');
    products.forEach(function (product) {
        product.draggable = true;
        product.addEventListener('dragstart', handleDragStart);
    });
}

function makeCartDroppable() {
    let cart = document.getElementById('cart');
    cart.addEventListener('dragover', handleDragOver);
    cart.addEventListener('drop', handleDrop);
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.name);
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    let productName = e.dataTransfer.getData('text/plain');
    let product = document.querySelector(`.draggable [data-name="${productName}"]`);

    if (product) {
        let cartItems = document.getElementById('cartItems');
        let cartTotalElement = document.getElementById('cartTotal');



        // Обновляем итоговую стоимость
        let productPrice = parseFloat(product.dataset.price);
        let productQuantity = parseFloat(product.dataset.quantity);
        cartTotal += productPrice;
        old_cart = cart.slice();
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        })

        render_cart(old_cart);
    }
}
















// Работа с корзиной (отображение корзины, удаление элементов и сортировка товаров)


let finalPrice = document.querySelector('.final-price');
let productContainerDiv = document.querySelector('.product-container');

function render_cart(old_cart = []) {
    let totalPrice = 0;
    let productDiv;
    for (let i = 0; i < cart.length; i++) {

        if (old_cart.length !== 0 && old_cart.includes(cart[i])) {
            continue;
        }

        productDiv = document.createElement('div');

        productDiv.className = "product";

        let productInfoTags = createAndGetProductInfoTags(i);


        // запоминаем индекс
        (function (index) {
            productInfoTags.deleteButton.addEventListener('click', function (event) {

                cart.splice(index, 1);
                event.currentTarget.parentNode.remove();
                console.log(cart, index)
                updateTotalPrice();

            });

            productInfoTags.plusButton.addEventListener('click', function (event) {
                cart[index].quantity++;
                updateCartItem(index);

            });

        })(i);

        addProductInfoTagsToProduct(productDiv, productInfoTags);


        productContainerDiv.appendChild(productDiv);

        totalPrice += cart[i].price * cart[i].quantity;

    }
    let curr = Number(finalPrice.innerHTML);
    finalPrice.innerHTML = curr + totalPrice;
}


function createAndGetProductInfoTags(i) {
    // Создаем div с информацией о товаре



    nameParagraph = document.createElement('p');
    nameParagraph.textContent = cart[i].name;

    priceSpan = document.createElement('span');
    priceSpan.className = "price-span";
    priceSpan.textContent = `Общая цена: ${cart[i].price * cart[i].quantity}`;

    quantitySpan = document.createElement('span');
    quantitySpan.className = "quantity-span";
    quantitySpan.textContent = `Количество: ${cart[i].quantity}`;

    deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Удалить";

    plusButton = document.createElement('button');
    plusButton.className = "plus-button";
    plusButton.textContent = "+";

    productInfoTags = {
        nameParagraph,
        priceSpan,
        quantitySpan,
        deleteButton,
        plusButton
    };

    return productInfoTags;


}

function addProductInfoTagsToProduct(productDiv, productInfoTags) {

    for (let product_info_tag in productInfoTags) {
        productDiv.appendChild(productInfoTags[product_info_tag])
    }

}

function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
    }
    finalPrice.innerHTML = totalPrice;
}

function updateCartItem(index) {
    let products = document.querySelectorAll('.product')
    let change_product = products[index];
    let quantitySpan = change_product.querySelector('.quantity-span');
    let priceSpan = change_product.querySelector('.price-span');
    quantitySpan.textContent = `Количество: ${cart[index].quantity}`;
    priceSpan.textContent = `Общая цена: ${cart[index].price * cart[index].quantity}`;
    updateTotalPrice();
}


let clearButton = document.querySelector('.clear-button');

// Очистка корзины
clearButton.addEventListener('click', clearAll);

function clearAll() {
    cart = [];
    productContainerDiv.innerHTML = '';
    finalPrice.innerHTML = 0;
}

function sortAscending() {
    cart.sort((a, b) => a.price * a.quantity - b.price * b.quantity);
    removeCurrentProductTags();
    render_cart();
}

function sortDescending() {
    cart.sort((a, b) => b.price * b.quantity - a.price * a.quantity);
    removeCurrentProductTags();
    render_cart();
}

function removeCurrentProductTags() {
    // Вспомогательная функция для очистки корзины для применения сортировки
    let products = document.querySelectorAll('.product')
    for (let i = 0; i < products.length; i++) {
        products[i].remove();
    }

}

// Фильтр по цене
function filterCartByPrice(cart, minPrice, maxPrice) {
    let filteredCart = cart.filter(function (product) {
        return product.price >= minPrice && product.price <= maxPrice;
    });

    return filteredCart;
}

let filteredProducts = filterCartByPrice(cart, 1, 300);



// // Запускаем отрисовку карточек товаров в корзине
render_cart();
