//***********Start Api 1****************//
// to make ayman = listOfData , so that be a global var not local var
let ayman = [];

// to make newArray get data from local storage
let newArray = JSON.parse(localStorage.getItem("allCards")) || [];

// fun getData() to make api to displa it on html
let getData = async function(e){
let reponse = await fetch("shop-products.json")

// to know that is a file called json
let data = await reponse.json();

// get data from my array i set data on it
let listOfData= data.shopProduct

// to make ayman = listOfData , so that be a global var not local var
ayman = listOfData

// call fun with his parameta
diplayData(listOfData);
}
// call fun
getData();


// fun to display data on html
function diplayData(listOfData){
let emptyData= "";
for (let i = 0; i < listOfData.length; i++) {
emptyData += 
`
<div class="col-lg-4">
<div class="card border-0">
<div class="card__img">
<a href="index-details-shop.html"><img src="${listOfData[i].img}" class="card-img-top" alt="product(3)" title="Eskil-product"></a>
<div class="icones">
<a href="#"><i class="fa-solid fa-eye"></i></a>
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<div class="card-body">
<div class="card__text">
<h5 class="card-title">${listOfData[i].tittle}</h5>
<span>${listOfData[i].price}</span>
</div>
<p onclick="holdProduct(${ayman[i].id})" class="card-text card__text--font cursor"><i class="fa-solid fa-bag-shopping"></i><a href="#">ADD TO CART</a></p>
</div>
</div>
</div>
`
}
document.querySelector(".push").innerHTML = emptyData;
}

// fun to get product by id and set data in local storage
function holdProduct (id){

// set product by id with his array in var
let holdSingalpro = ayman[id - 1]

// storage data in new array and make item.id = holdSingalpro.id, so that i can select product with his id
let finalHoldpro = newArray.find((item)=> item.id === holdSingalpro.id)

// make (if ) , if product is added....you can increse his count only
if(finalHoldpro){
finalHoldpro.count += 1;
}

// if not , you push it first , then increse his count
else{
newArray.push({...holdSingalpro, count : 1})
}

// to set data in localstorage
localStorage.setItem("allCards", JSON.stringify(newArray))
}
//***********End Api 1****************//