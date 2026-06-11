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
let ilosc = 1;
let cena = 149;

function odswiezKoszyk(){

document.getElementById(
"ilosc"
).innerHTML = ilosc;

document.getElementById(
"razem"
).innerHTML =
(ilosc * cena) + " PLN";

}

function zwieksz(){

ilosc++;

odswiezKoszyk();

}

function zmniejsz(){

if(ilosc>1){

ilosc--;

odswiezKoszyk();

}

}
