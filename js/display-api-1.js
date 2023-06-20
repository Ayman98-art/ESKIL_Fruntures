// data are storaged in localstorage , i get it and storage it in var
let diaplayOnHtml = JSON.parse(localStorage.getItem("allCards"));

// fun showData() to display data i get from localstorage on html
function showData(){
    let cartonaa = ""
    for (let i = 0; i < diaplayOnHtml.length; i++) {
        cartonaa +=
        `
        <div class="col-lg-4">
        <div class="card border-0">
        <div class="card__img">
        <a href="index-details-shop.html"><img src="${diaplayOnHtml[i].img}" class="card-img-top" alt="product(3)" title="Eskil-product"></a>
        <div class="icones">
        <a href="#"><i class="fa-solid fa-eye"></i></a>
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        </div>
        </div>
        <div class="card-body">
        <div class="card__text">
        <h5 class="card-title">${diaplayOnHtml[i].tittle}</h5>
        <span>${diaplayOnHtml[i].price}</span>
        </div>
        <button onclick="plusIn(${i})" class=" btn__plus mr-1"><i class="fa-solid fa-plus"></i></button>
        <span class="count">${diaplayOnHtml[i].count}</span>
        <button onclick="minusIN(${i})" class=" btn__minus"><i class="fa-solid fa-minus"></i></button>
        </div>
        </div>
        </div>
        `
    }
    document.querySelector(".pushPro").innerHTML = cartonaa;
}
showData();

// i == index of product
function plusIn(i){
// يبجيب رقم المنتج ويزود عليه واحد
let x = diaplayOnHtml[i].count += 1;
// to get data from local
localStorage.setItem("allCards" , JSON.stringify(diaplayOnHtml));
// to updata data
showData()
}

function minusIN(i){

    // if product > 1 , then decrese it one by one
    if(diaplayOnHtml[i].count > 1){
    diaplayOnHtml[i].count -= 1
}

// if not delete the only product
else{
    diaplayOnHtml.splice(i,1);
}

// to get data from local
localStorage.setItem("allCards", JSON.stringify(diaplayOnHtml))
// to updata data
showData()
}