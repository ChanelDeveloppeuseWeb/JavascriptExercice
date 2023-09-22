function nombreAbregee() {
  let quantity = document.getElementById("number1").value;
  let unit;
  switch (unit) {
    case "K":
      result = quantity * 1024;
      break;
    case "M":
      result = quantity * 1024 * 1024;
      break;
    case "G":
      result = quantity * 1024 * 1024 * 1024;
      break;
    case "T":
      result = quantity * 1024 * 1024 * 1024 * 1024;
      break;

    default:
      result = `${quantity}K`.trimEnd();
      break;
  }
  document.querySelector("#resultat").value = result;
}
let btn = document.getElementById("send");
btn.addEventListener("click", nombreAbregee);
