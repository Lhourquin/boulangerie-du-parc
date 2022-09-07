import { Product } from './Product.js';
//target
let containerBreadCard = document.getElementById("container-bread")
console.log(containerBreadCard);
let arrayContentOfCard = [];
let getProduct = Product.map((product) => {
    if (product.type === "bread") {
        arrayContentOfCard.push(
            `
        <div class="bread-card">
            <div class="bread-card-container-img">
                <img src="${product.src}">
            </div>
            <div class="bread-card-container-name-desc-price">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
            </div>

        </div>
        `
        );
    }

});
containerBreadCard.innerHTML = arrayContentOfCard.toString().split("").join("").split(",").join("");
