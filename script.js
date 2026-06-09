const end=new Date(); end.setHours(end.getHours()+24);
setInterval(()=>{let d=end-new Date();
if(d<0){document.getElementById("timer").innerText="Promocja zakończona";return;}
let h=Math.floor(d/3600000),m=Math.floor((d%3600000)/60000),s=Math.floor((d%60000)/1000);
document.getElementById("timer").innerText=`${h}h ${m}m ${s}s`;},1000);