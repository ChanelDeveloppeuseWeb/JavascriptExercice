function nombreAbregee() {
  let quantity = Number(document.getElementById("number1").value);
  let unit = "k";"M";"G";"T";
  //  let  result = 0;
  switch (unit.toUpperCase()) {
    case ("K"):
      result = quantity * 1024;
      break;
    case ("M"):
      result = quantity * 1024 * 1024;
      break;
    case ("G"):
      result = quantity * 1024 * 1024 * 1024;
      break;
    case ("T"):
      result = quantity * 1024 * 1024 * 1024 * 1024;
      break;

    default:
      result = `${quantity}k`.trimEnd();
      break;
      
  }
  document.querySelector("#resultat").value = result;
}
// let btn = document.getElementById("send");
// btn.addEventListener("click", nombreAbregee());
