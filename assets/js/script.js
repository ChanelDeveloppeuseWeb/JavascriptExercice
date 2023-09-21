
function tableMultiplication() {
  let nombre = Number(document.getElementById("number1").value)
  let i; 
  document.querySelector("#text").innerHTML = ""
  for ( i = 1; i <= 10 ; i++) {
    resultat = nombre * i;
    // console.log(resultat)
    document.querySelector("#text").innerHTML += `${nombre} * ${i} = ${resultat} <br/>`
  }
    //document.write(resultat)
}

let btn = document.querySelector("#submit")
btn.addEventListener('click', tableMultiplication)