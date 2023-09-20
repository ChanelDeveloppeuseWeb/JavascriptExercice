function carreNumber(nombre,carre) {
   nombre = Number(document.getElementById("number1").value);
   carre = Math.pow(nombre,2) ;
  document.getElementById("resultat").value= `le carre est : ${carre}`;
}
let btn = document.querySelector("#send");
btn.addEventListener("click", carreNumber);


