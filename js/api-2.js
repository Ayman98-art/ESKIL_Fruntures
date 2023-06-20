// // *********Strat Api 2***************//
let getpower = async function(){
    let reponseTwo = await fetch("shop2-products.json")
    // to know it is a file json
    let dataTwo = await reponseTwo.json();
    let listOfPower= dataTwo.shopTwoProduct
    // x1 = listOfPower
    diplayPower(listOfPower);
}
getpower();

function diplayPower(listOfPower){
    let emptyPower= "";
    for (let i = 0; i < listOfPower.length; i++) {
        emptyPower += 
        `
<div class="col-lg-4">
        <div class="card card__style border-0">
        <div class="card__img">
        <img src="${listOfPower[i].img}" class="card-img-top" alt="product(1)" title="Eskil-product">
        <div class="icones">
        <a href="#"><i class="fa-solid fa-eye"></i></a>
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        </div>
        </div>
        <div class="card-body">
        <div class="card__text">
        <h5 class="card-title">${listOfPower[i].tittle}</h5>
        <span>${listOfPower[i].price}</span>
        </div>
        <p class="card-text card__text--font cursor"><i class="fa-solid fa-bag-shopping"></i><a href="#">ADD TO CART</a></p>
        </div>
        </div>
</div>
        `
    }
    document.querySelector(".pushInHome").innerHTML = emptyPower;
}
//***********Start Api 1****************//