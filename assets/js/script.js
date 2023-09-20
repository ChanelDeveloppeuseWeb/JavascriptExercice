function moyenne(DC1,DC2,Ds,result,somme) {
   DC1 = Number(document.getElementById("number1").value);
   DC2 = Number(document.getElementById("number2").value);
    Ds = Number(document.getElementById("number3").value);

   result = DC1 + DC2 + Ds;
   somme = result/3
  document.getElementById("resultat").value= `la moyenne est de : ${somme}`;

}
let btn = document.querySelector("#send");
btn.addEventListener("click", moyenne);

