function nonAlbrege() {
   quantites = Number(document.getElementById("number1").value);
   unit = Number(document.getElementById("number2").value);
   result = DC1 + DC2 + Ds;
  document.getElementById("resultat").value= result;

}
let btn = document.querySelector("#send");
btn.addEventListener("click", calcul);

