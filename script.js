document
.getElementById("orderForm")
.addEventListener(
"submit",
async function(e){

e.preventDefault();

let dane={

imie:
document
.getElementById("imie")
.value,

email:
document
.getElementById("email")
.value,

telefon:
document
.getElementById("telefon")
.value,

adres:
document
.getElementById("adres")
.value,

miasto:
document
.getElementById("miasto")
.value,

ilosc:
document
.getElementById("ilosc")
.value

};

await fetch(

"https://script.google.com/macros/s/AKfycby8rQTQq4VFgcVaDWR11kIMNPF7mKWVAYd82oH8xN0QJYbZn9BloEH0akymbCdwAAL4/exec",

{

method:"POST",

body:
JSON.stringify(dane)

}

);

document
.getElementById("wynik")
.innerHTML=
"Dziękujemy za zamówienie!";

this.reset();

}
);
let cart = 0;

function addToCart(){

cart++;

document.getElementById(
"cart-items"
).innerHTML=
"RainCloud Lamp x " + cart;

document.getElementById(
"cart-total"
).innerHTML=
"Razem: " + (cart*149) + " PLN";

document.getElementById(
"ilosc"
).value = cart;

}
