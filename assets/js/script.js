function convertAlgebraValue() {
const  quantity =document.getElementById("number1").value;
let unit =document.getElementById("number2").value;

   switch (unit.toUpperCase()) {
    case ("K"):
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
      result = "Unité invalide";
      break;
  }
  document.getElementById("resultat").value = result;
}
let btn = document.querySelector("#send");
btn.addEventListener("click", convertAlgebraValue);

// la methode parseInt permet de convertir la valeur en un type de donnee numerique (entier)
//toString convertir un entier en une chaine de caractere
