function addToCart(){

let produkt = {

nazwa:"RainCloud Lamp",

cena:149,

ilosc:1

};

localStorage.setItem(
"cart",
JSON.stringify(produkt)
);

window.location.href="cart.html";

}



document.addEventListener(
"DOMContentLoaded",
function(){

let koszyk=
JSON.parse(
localStorage.getItem("cart")
);

if(
document.getElementById("produkt")
&&
koszyk
){

document.getElementById(
"produkt"
).innerHTML=
koszyk.nazwa;

document.getElementById(
"cena"
).innerHTML=
koszyk.cena+" PLN";

document.getElementById(
"ilosc"
).innerHTML=
koszyk.ilosc;

document.getElementById(
"razem"
).innerHTML=
(koszyk.cena*koszyk.ilosc)
+" PLN";

}

}
);
