import { Product } from './Product.js';
//target
let containerPastryCard = document.getElementById("container-pastry")
console.log(containerPastryCard);
let arrayContentOfCard = [];
let getProduct = Product.map((product) => {
    if (product.type === "pastry") {
        arrayContentOfCard.push(
            `
        <div class="pastry-card">
            <div class="pastry-card-container-img">
                <img src="${product.src}">
            </div>
            <div class="pastry-card-container-name-desc-price">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
            </div>

        </div>
        `
        );
    }

});
containerPastryCard.innerHTML = arrayContentOfCard.toString().split("").join("").split(",").join("");
