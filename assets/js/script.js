

function calcul(DC1,DC2,Ds,result) {
    DC1 = Number(document.getElementById("number1").value);
    DC2 = Number(document.getElementById("number2").value);
     Ds = Number(document.getElementById("number3").value);
 
    result = DC1 + DC2 + Ds;
   document.getElementById("resultat").value= result;
 
 }
 let btn = document.querySelector("#send");
 btn.addEventListener("click", calcul);