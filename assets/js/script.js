
function tableMultiplication(nombre) {

  let i;
  for (i = 1; i <= 10 ; i++) {
    resultat = nombre * i;
     console.log(resultat);
  }
  
    nombre = Number(document.getElementById("number1").value)
    document.querySelector("#result").value = resultat
}

let btn = document.querySelector("submit")
btn.addEventListener("click",tableMultiplication)
