
function tableMultiplication(nombre) {

  let i;
  for (i = 0; i <= 9 ; i++) {
    resultat = nombre * i;
  }
    nombre = Number(document.getElementById("number1").value)
    document.querySelector("#result").value = `${nombre} * ${i} = ${resultat}`
}

let btn = document.querySelector("#submit")
btn.addEventListener("click",tableMultiplication)
console.log(tableMultiplication())