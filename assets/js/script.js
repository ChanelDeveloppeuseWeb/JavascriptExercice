function calcul(DC1) {
   DC1 = Number(document.getElementById("number1").value);
   carre = DC1 ;
  document.getElementById("resultat").value= `le carre est:`;

}
let btn = document.querySelector("#send");
btn.addEventListener("click", calcul);

