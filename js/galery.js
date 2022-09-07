import { Product} from './Product.js'; 
//target elem
let containerGalery = document.getElementById("galerie");
let allProduct = document.getElementById("allProduct");
let breadProduct = document.getElementById("breadProduct");
let pastryProduct = document.getElementById("pastryProduct");
//boolean for elem
let boolBread = false;
let boolPastry = false;
let boolForAll = true;
//img for carousel
let arrOfImgForCarousel = [];
//content to render at first
let arrOfcontainerGaleryContent = [];
let getImgOnArray = Product.map( product => arrOfcontainerGaleryContent.push(`<img class="galery-img" src="${product.src}">`));
containerGalery.innerHTML = arrOfcontainerGaleryContent.toString().split("").join("").split(",").join("");
//select product we want to render
allProduct.addEventListener('click', ()=> {
    boolForAll = true;
    boolBread = false;
    boolPastry = false;
    if(boolForAll){
        arrOfcontainerGaleryContent = [];
        containerGalery.innerHTML = "";
        Product.map((product)=> {
            arrOfcontainerGaleryContent.push(`<img class="galery-img" src="${product.src}">`);
            let stringArrOfcontainerGaleryContent = arrOfcontainerGaleryContent.toString().split("").join("").split(",").join("")
            containerGalery.innerHTML = stringArrOfcontainerGaleryContent;
        })
    }
});
breadProduct.addEventListener('click', ()=> {
    boolBread = true;
    boolPastry = false;
    boolForAll = false;
    if(boolBread){
        arrOfcontainerGaleryContent = [];
        containerGalery.innerHTML = "";
        Product.map((product)=> {
            if(product.type === "bread"){
                arrOfcontainerGaleryContent.push(`<img class="galery-img" src="${product.src}">`);
                let stringArrOfcontainerGaleryContent = arrOfcontainerGaleryContent.toString().split("").join("").split(",").join("")
                containerGalery.innerHTML = stringArrOfcontainerGaleryContent;
            }
        })
    }
});
pastryProduct.addEventListener('click', ()=> {
    boolBread = false;
    boolPastry = true;
    boolForAll = false;
    if(boolPastry){
        arrOfcontainerGaleryContent = [];
        containerGalery.innerHTML = "";
        Product.map((product)=> {
            if(product.type === "pastry"){
                arrOfcontainerGaleryContent.push(`<img class="galery-img"  src="${product.src}">`);
                let stringArrOfcontainerGaleryContent = arrOfcontainerGaleryContent.toString().split("").join("").split(",").join("")
                containerGalery.innerHTML = stringArrOfcontainerGaleryContent;
            }
        })
    }
});
//display image
function displayImgSelected(event){
    let img = document.getElementsByTagName("img");
    let target = event.target;
    for(let idx of img){
        if(target == idx){
            // imgWatchBox.src = target.src;
            console.log(idx.src)
        }
    }
}


containerGalery.addEventListener("click", displayImgSelected);

