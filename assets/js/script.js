function numberOrString() {
  let value = 7;
  let result 

  value = document.getElementById("number1").value;

  if (typeof(value) === 'number')
 {
  result = "la valeur est un nombre";
  } 

  else if (typeof(value) === 'string') 
  {
    result = "la valeur est une chaine de caractere";
  }

  document.getElementById("resultat").value = result;
}

// let btn = document.querySelector("#send");
// btn.addEventListener("click", numberOrString());

