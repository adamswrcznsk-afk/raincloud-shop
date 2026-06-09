const end=new Date(); end.setHours(end.getHours()+24);
setInterval(()=>{let d=end-new Date();
if(d<0){document.getElementById("timer").innerText="Promocja zakończona";return;}
let h=Math.floor(d/3600000),m=Math.floor((d%3600000)/60000),s=Math.floor((d%60000)/1000);
document.getElementById("timer").innerText=`${h}h ${m}m ${s}s`;},1000);
document
.getElementById("orderForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const formData = {
  imie: this.imie.value,
  email: this.email.value,
  telefon: this.telefon.value,
  adres: this.adres.value,
  miasto: this.miasto.value,
  ilosc: this.ilosc.value
};

await fetch(
"https://script.google.com/macros/s/AKfycbyVZBv0byXiDq6QX1g5PgAYXQMA4fjyRxc2RE1ueZCqrYjh3hlNAgE5Qja6UZI_vLpF/exec",
{
method:"POST",
body:JSON.stringify(formData)
});

alert("Dziękujemy za zamówienie!");

this.reset();

});
