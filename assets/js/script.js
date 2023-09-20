function comparaisonNumber(DC1,DC2,Ds,result,comparaison) {
   DC1 = Number(document.getElementById("number1").value);
   DC2 = Number(document.getElementById("number2").value);
    Ds = Number(document.getElementById("number3").value);

    switch (comparaison) {
      case (DC1===DC2 && DC2===Ds):
        result="DC1,DC2,Ds sont egales"
        
        break;
      case (DC1==DC2 || DC2==Ds);
      break;
      default:
        break;
    }
   result = DC1 + DC2 + Ds;
  document.getElementById("resultat").value= result;

}
let btn = document.querySelector("#send");
btn.addEventListener("click", comparaisonNumber);

