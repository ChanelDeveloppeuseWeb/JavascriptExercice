function comparaisonNumber(DC1, DC2, Ds, result, comparaison) {
  DC1 = Number(document.getElementById("number1").value);
  DC2 = Number(document.getElementById("number2").value);
  Ds = Number(document.getElementById("number3").value);

  switch (true) {
    case  DC1==DC2 && DC1==Ds:
      result = `les trois variables sont identiques`;
      break;
    case DC1==DC2 || DC1==Ds || DC2==Ds:
      result = `deux des variables sont de valeurs egales`;
      break;
    default:
      result = `les trois variable sont differentes`;
      break;
  }
  document.getElementById("resultat").value = `${result}`;
}
let btn = document.querySelector("#send");
btn.addEventListener("click", comparaisonNumber);
