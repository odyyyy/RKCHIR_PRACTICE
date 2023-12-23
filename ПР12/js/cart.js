
let cart = [
    {
        name: 'Товар 1',
        price: 160,
        quantity: 1
    },
    {
        name: 'Товар 2',
        price: 250,
        quantity: 5
    },
    {
        name: 'Товар 3',
        price: 321,
        quantity: 3
    }
];

let productContainerDiv = document.querySelector('.product-container');

function render_cart() {

    let productDiv;
    for (let i = 0; i < cart.length; i++) {
        
        productDiv = document.createElement('div');

        productDiv.className = "product";

        let productInfoTags = createAndGetProductInfoTags(i);


        // запоминаем индекс
        (function (index) {
            productInfoTags.deleteButton.addEventListener('click', function (event) {
                cart.splice(index, 1);
                event.currentTarget.parentNode.remove();

            });

            productInfoTags.plusButton.addEventListener('click', function (event) {
                cart[index].quantity++;
                updateCartItem(index);


            });

        })(i);

        addProductInfoTagsToProduct(productDiv, productInfoTags);


        productContainerDiv.appendChild(productDiv);
    }
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

function addProductInfoTagsToProduct(productDiv, productInfoTags){

    for (let product_info_tag in productInfoTags){
        productDiv.appendChild(productInfoTags[product_info_tag])
    }

}


function updateCartItem(index) {
    let products = document.querySelectorAll('.product')
    let change_product = products[index];
    let quantitySpan = change_product.querySelector('.quantity-span');
    let priceSpan = change_product.querySelector('.price-span');
    quantitySpan.textContent = `Количество: ${cart[index].quantity}`;
    priceSpan.textContent = `Общая цена: ${cart[index].price * cart[index].quantity}`;
}


let clearButton = document.querySelector('.clear-button');

// Очистка корзины
clearButton.addEventListener('click', function () {
    cart = [];
    productContainerDiv.innerHTML = '';
})

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

function removeCurrentProductTags(){
    // Вспомогательная функция для очистки корзины для применения сортировки
    let products = document.querySelectorAll('.product')
    for (let i = 0; i < products.length; i++){
        products[i].remove();
    }
}

// Фильтр по цене
function filterCartByPrice(cart, minPrice, maxPrice) {
    let filteredCart = cart.filter(function(product) {
        return product.price >= minPrice && product.price <= maxPrice;
    });

    return filteredCart;
}

let filteredProducts = filterCartByPrice(cart, 150, 300);

console.log(filteredProducts);


// Запускаем отрисовку карточек товаров в корзине
render_cart();
